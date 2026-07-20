/// <reference types="webmcp-types" />

type CatalogProduct = {
  slug: string;
  category: string;
  brand: string;
  name: string;
  description: string;
  licensingModel: string;
  audience: string;
  platform: string;
  term: string;
  url: string;
  variants: Array<{
    name: string;
    displayPrice: string;
    priceCheckedAt: string;
    pricingNote: string;
  }>;
};

type CatalogResponse = {
  pricingPolicy: {
    type: string;
    reviewCycleDays: number;
    note: string;
  };
  products: CatalogProduct[];
};

type KnowledgeArticle = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  category: string;
  audience: string[];
  readingMinutes: number;
  reviewedAt: string;
  url: string;
};

type KnowledgeResponse = {
  articles: KnowledgeArticle[];
};

const categoryValues = ["windows", "office", "microsoft-365", "adobe"] as const;
const knowledgeCategoryValues = [
  "Windows",
  "Office",
  "Microsoft 365",
  "Adobe",
  "Procurement",
] as const;

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("vi-VN")
    .trim();
}

function readString(input: Record<string, unknown>, key: string) {
  const value = input[key];
  return typeof value === "string" ? value.trim() : "";
}

function readLimit(input: Record<string, unknown>) {
  const value = input.limit;
  return typeof value === "number" && Number.isFinite(value)
    ? Math.min(10, Math.max(1, Math.trunc(value)))
    : 6;
}

async function fetchJson<T>(path: string): Promise<T> {
  const response = await fetch(path, {
    headers: { Accept: "application/json" },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Unable to load ${path} (${response.status}).`);
  }

  return response.json() as Promise<T>;
}

function absolutePath(path: string) {
  return new URL(path, window.location.origin).toString();
}

const solutionPaths = {
  "existing-windows-devices": {
    title: "Rà soát Windows cho thiết bị đang sử dụng",
    category: "Windows",
    product: "Windows GGWA",
    categoryPath: "/giai-phap/windows",
    productPath: "/san-pham/windows-ggwa",
    guidance:
      "Bắt đầu bằng danh sách thiết bị và tình trạng Windows hiện tại. GGWA chỉ được xác định sau khi rà soát điều kiện và hồ sơ giao dịch.",
  },
  "new-windows-devices": {
    title: "Windows cho thiết bị mới",
    category: "Windows",
    product: "Windows 11 Pro",
    categoryPath: "/giai-phap/windows",
    productPath: "/san-pham/windows-11-pro",
    guidance:
      "Đối chiếu loại thiết bị, số lượng, ngôn ngữ và hình thức bàn giao trước khi chọn SKU Windows 11 Pro.",
  },
  "one-time-office": {
    title: "Office mua một lần",
    category: "Office",
    product: "Office LTSC 2024 hoặc Office Home & Business 2024",
    categoryPath: "/giai-phap/office",
    productPath: "/san-pham/office-ltsc-2024",
    guidance:
      "Chọn Office LTSC cho môi trường tổ chức cần quản trị ổn định; chọn Home & Business khi nhu cầu là một thiết bị PC hoặc Mac phù hợp điều kiện sản phẩm.",
  },
  "email-cloud-office": {
    title: "Office, email doanh nghiệp và cloud",
    category: "Microsoft 365",
    product: "Microsoft 365 Business Standard",
    categoryPath: "/giai-phap/microsoft-365",
    productPath: "/san-pham/microsoft-365-business-standard",
    guidance:
      "Xác định số người dùng, tên miền, tenant hiện có và nhu cầu email/cộng tác trước khi triển khai.",
  },
  "office-apps-only": {
    title: "Ứng dụng Office theo người dùng",
    category: "Microsoft 365",
    product: "Microsoft 365 Apps for business",
    categoryPath: "/giai-phap/microsoft-365",
    productPath: "/san-pham/microsoft-365-apps-for-business",
    guidance:
      "Phù hợp khi doanh nghiệp chủ yếu cần ứng dụng Office và đã có giải pháp email riêng. License được quản lý theo người dùng.",
  },
  "creative-team": {
    title: "Bộ công cụ sáng tạo cho đội ngũ",
    category: "Adobe",
    product: "Adobe Creative Cloud for teams",
    categoryPath: "/giai-phap/adobe",
    productPath: "/san-pham/adobe-creative-cloud-teams",
    guidance:
      "Lập danh sách ứng dụng, số seat và người quản trị trước khi chọn single app hoặc bộ Creative Cloud.",
  },
  "pdf-workflow": {
    title: "Quy trình PDF doanh nghiệp",
    category: "Adobe",
    product: "Adobe Acrobat Pro for teams",
    categoryPath: "/giai-phap/adobe",
    productPath: "/san-pham/acrobat-pro-teams",
    guidance:
      "Xác định số seat và nhu cầu chỉnh sửa, chuyển đổi, ký hoặc cộng tác trên PDF trước khi báo giá.",
  },
} as const;

function createTools(): WebMCP.ModelContextTool[] {
  return [
    {
      name: "get_company_information",
      title: "Thông tin LOREM Technology",
      description:
        "Trả về thông tin công khai đã xác minh của LOREM Technology, gồm pháp nhân, MST, hotline, Zalo, website, Masothue và nguyên tắc diễn đạt thương hiệu.",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async () => fetchJson(absolutePath("/company.json")),
    },
    {
      name: "search_licensing_catalog",
      title: "Tìm sản phẩm bản quyền",
      description:
        "Tìm trong catalog công khai của LOREM theo tên sản phẩm, nhu cầu hoặc nhóm Windows, Office, Microsoft 365 và Adobe. Kết quả gồm mô hình license, đối tượng phù hợp, giá tham khảo và URL chính thức trên website.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            maxLength: 160,
            description:
              "Từ khóa hoặc nhu cầu, ví dụ: GGWA, email doanh nghiệp, Office mua một lần, PDF.",
          },
          category: {
            type: "string",
            enum: categoryValues,
            description: "Nhóm sản phẩm cần lọc.",
          },
          limit: {
            type: "integer",
            minimum: 1,
            maximum: 10,
            default: 6,
            description: "Số kết quả tối đa.",
          },
        },
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input: Record<string, unknown>) => {
        const catalog = await fetchJson<CatalogResponse>(absolutePath("/catalog.json"));
        const query = normalize(readString(input, "query"));
        const category = readString(input, "category");
        const limit = readLimit(input);

        const products = catalog.products
          .filter((product) => !category || product.category === category)
          .filter((product) => {
            if (!query) return true;
            const searchable = normalize(
              [
                product.name,
                product.description,
                product.licensingModel,
                product.audience,
                product.platform,
                product.term,
                ...product.variants.map((variant) => variant.name),
              ].join(" "),
            );
            return query.split(/\s+/).every((token) => searchable.includes(token));
          })
          .slice(0, limit)
          .map((product) => ({
            slug: product.slug,
            category: product.category,
            brand: product.brand,
            name: product.name,
            description: product.description,
            licensingModel: product.licensingModel,
            audience: product.audience,
            url: product.url,
            variants: product.variants.map((variant) => ({
              name: variant.name,
              displayPrice: variant.displayPrice,
              priceCheckedAt: variant.priceCheckedAt,
              pricingNote: variant.pricingNote,
            })),
          }));

        return {
          query: query || null,
          category: category || null,
          resultCount: products.length,
          pricingPolicy: catalog.pricingPolicy,
          products,
        };
      },
    },
    {
      name: "recommend_licensing_path",
      title: "Gợi ý hướng chọn license",
      description:
        "Gợi ý category và product page phù hợp với một nhu cầu phổ biến. Đây là hướng tham khảo; phiên bản và báo giá cuối cùng cần được xác nhận theo số lượng và hồ sơ doanh nghiệp.",
      inputSchema: {
        type: "object",
        properties: {
          need: {
            type: "string",
            enum: Object.keys(solutionPaths),
            description:
              "Nhu cầu cần xử lý: existing-windows-devices, new-windows-devices, one-time-office, email-cloud-office, office-apps-only, creative-team hoặc pdf-workflow.",
          },
          quantity: {
            type: "integer",
            minimum: 1,
            maximum: 100000,
            description: "Số thiết bị, người dùng hoặc seat dự kiến nếu đã biết.",
          },
        },
        required: ["need"],
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input: Record<string, unknown>) => {
        const need = readString(input, "need") as keyof typeof solutionPaths;
        const recommendation = solutionPaths[need];

        if (!recommendation) {
          return {
            error: "Nhu cầu không nằm trong danh sách được hỗ trợ.",
            supportedNeeds: Object.keys(solutionPaths),
          };
        }

        const quantity =
          typeof input.quantity === "number" && Number.isFinite(input.quantity)
            ? Math.max(1, Math.trunc(input.quantity))
            : null;

        return {
          need,
          quantity,
          title: recommendation.title,
          category: recommendation.category,
          product: recommendation.product,
          guidance: recommendation.guidance,
          categoryUrl: absolutePath(recommendation.categoryPath),
          productUrl: absolutePath(recommendation.productPath),
          quoteChannels: {
            zalo: "https://zalo.me/0382520281",
            hotline: "tel:+84382520281",
          },
          disclaimer:
            "Gợi ý mang tính định hướng. SKU, điều kiện cấp phép và giá mới nhất phải được xác nhận theo hồ sơ giao dịch.",
        };
      },
    },
    {
      name: "find_licensing_guides",
      title: "Tìm bài hướng dẫn bản quyền",
      description:
        "Tìm bài chuyên sâu trong kho kiến thức LOREM theo từ khóa hoặc nhóm Windows, Office, Microsoft 365, Adobe và Procurement. Mỗi kết quả có câu trả lời ngắn, đối tượng đọc, ngày kiểm tra và URL bài viết.",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            maxLength: 160,
            description: "Chủ đề cần tìm, ví dụ: GGWA, gia hạn, bàn giao, quản lý seat.",
          },
          category: {
            type: "string",
            enum: knowledgeCategoryValues,
            description: "Nhóm nội dung cần lọc.",
          },
          limit: {
            type: "integer",
            minimum: 1,
            maximum: 10,
            default: 6,
            description: "Số bài tối đa.",
          },
        },
        additionalProperties: false,
      },
      annotations: { readOnlyHint: true },
      execute: async (input: Record<string, unknown>) => {
        const knowledge = await fetchJson<KnowledgeResponse>(absolutePath("/knowledge.json"));
        const query = normalize(readString(input, "query"));
        const category = readString(input, "category");
        const limit = readLimit(input);

        const articles = knowledge.articles
          .filter((article) => !category || article.category === category)
          .filter((article) => {
            if (!query) return true;
            const searchable = normalize(
              [article.title, article.description, article.answer, ...article.audience].join(" "),
            );
            return query.split(/\s+/).every((token) => searchable.includes(token));
          })
          .slice(0, limit);

        return {
          query: query || null,
          category: category || null,
          resultCount: articles.length,
          articles,
          indexUrl: absolutePath("/kien-thuc"),
        };
      },
    },
  ];
}

export function registerWebMcpTools() {
  const modelContext = document.modelContext;
  if (!modelContext) return () => undefined;

  const controller = new AbortController();

  void Promise.allSettled(
    createTools().map((tool) =>
      modelContext.registerTool(tool, {
        signal: controller.signal,
      }),
    ),
  );

  return () => controller.abort();
}
