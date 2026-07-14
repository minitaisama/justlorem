import { productCategories, productFamilies } from "./catalog";
import { knowledgeArticles } from "./knowledge";

export const site = {
  name: "LOREM Technology",
  legalName: "CÔNG TY TNHH CÔNG NGHỆ LOREM",
  internationalName: "LOREM TECHNOLOGY COMPANY LIMITED",
  shortName: "LOREM",
  url: "https://justlorem.com",
  taxId: "0315880407",
  phone: "0382520281",
  phoneHref: "tel:+84382520281",
  zaloUrl: "https://zalo.me/0382520281",
  email: "",
  address:
    "196/11/10 Tan Son Nhi, Tan Son Nhi Ward, Tan Phu District, Ho Chi Minh City, Vietnam",
  masothueUrl:
    "https://masothue.com/0315880407-cong-ty-tnhh-cong-nghe-lorem",
  mapsUrl: "https://maps.app.goo.gl/xMb8egHrPFntwvcR8",
  logo: "/images/lorem-logo-blue.png",
  ogImage: "/og-image.jpg",
  ogImageAlt: "LOREM Technology - bản quyền Microsoft và Adobe cho doanh nghiệp",
  description:
    "LOREM tư vấn bản quyền Windows GGWA, Office LTSC, Microsoft 365 và Adobe cho doanh nghiệp tại Việt Nam. Xem bảng giá hoặc liên hệ hotline, Zalo.",
};

export const navLinks = [
  { label: "Giải pháp", href: "/#solutions" },
  { label: "Bảng giá", href: "/#pricing" },
  { label: "Kiến thức", href: "/kien-thuc" },
  { label: "FAQ", href: "/#faq" },
  { label: "Pháp lý", href: "/legal" },
];

const windowsBoxImage = "/product-visuals/windows-11-pro-box.png";
const microsoft365BoxImage =
  "/product-visuals/microsoft-365-business-standard-box.png";
const microsoft365BusinessBoxImage =
  "/product-visuals/microsoft-365-business-standard-retail-box.png";
const microsoft365PersonalBoxImage =
  "/product-visuals/microsoft-365-personal-box.png";
const office2024BoxImage =
  "/product-visuals/office-2024-home-business-box.png";

export const productVisuals = [
  {
    name: "Windows GGWA",
    note: "Theo hồ sơ thiết bị",
    image: "/product-icons/windows-ggwa.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/windows-ggwa",
  },
  {
    name: "Windows 11 Pro",
    note: "Thiết bị doanh nghiệp",
    image: "/product-icons/windows-pro.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/windows-11-pro",
  },
  {
    name: "Office LTSC 2024",
    note: "Office mua theo license",
    image: "/product-icons/office-ltsc.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/office-ltsc-2024",
  },
  {
    name: "Microsoft 365",
    note: "Email, Office, cloud",
    image: "/product-icons/microsoft-365.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/microsoft-365-business-standard",
  },
  {
    name: "M365 Apps",
    note: "Office theo người dùng",
    image: "/product-icons/m365-apps.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/microsoft-365-apps-for-business",
  },
  {
    name: "Adobe Teams",
    note: "Creative Cloud for teams",
    image: "/product-icons/adobe-teams.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/adobe-creative-cloud-teams",
  },
  {
    name: "Acrobat Pro",
    note: "Quy trình PDF",
    image: "/product-icons/acrobat-pro.svg",
    imageClass: "h-16 w-16",
    href: "/san-pham/acrobat-pro-teams",
  },
  {
    name: "License advisory",
    note: "Tư vấn hồ sơ",
    image: "/images/lorem-mark-blue.png",
    imageClass: "h-16 w-16",
    href: "/nguon-hang-ho-so",
  },
];

export const pricingNotice =
  "Giá có thể đã được cập nhật, vui lòng liên hệ Zalo hoặc gọi hotline để có giá mới nhất.";

export const pricingCatalog = [
  {
    id: "windows",
    label: "Windows",
    eyebrow: "Phần mềm Windows",
    summary: "GGWA, Windows 11 Pro và Windows 11 Home cho thiết bị doanh nghiệp.",
    accent: "#2563eb",
    image: windowsBoxImage,
    products: [
      {
        slug: "windows-ggwa",
        name: "Windows GGWA",
        detail: "Windows 11 Pro - Legalization Get Genuine",
        unit: "License",
        quantity: 1,
        priceVnd: 4500000,
        image: windowsBoxImage,
      },
      {
        slug: "windows-11-pro",
        name: "Windows 11 Pro DSP OEI DVD",
        detail: "Win Pro 11 64Bit Eng Intl 1pk DSP OEI DVD",
        unit: "License",
        quantity: 1,
        priceVnd: 3830000,
        image: windowsBoxImage,
      },
      {
        slug: "windows-11-pro",
        name: "Windows 11 Pro Online Download",
        detail: "Win Pro 11 64-bit All Lng PK Lic Online Download NR",
        unit: "License",
        quantity: 1,
        priceVnd: 5060000,
        image: windowsBoxImage,
      },
      {
        slug: "windows-11-home",
        name: "Windows 11 Home DSP OEI DVD",
        detail: "Win Home 11 64Bit Eng Intl 1pk DSP OEI DVD",
        unit: "License",
        quantity: 1,
        priceVnd: 2980000,
        image: windowsBoxImage,
      },
      {
        slug: "windows-11-home",
        name: "Windows 11 Home Online Download",
        detail: "WIN HOME 11 64-bit All Lng PK Lic Online Download",
        unit: "License",
        quantity: 1,
        priceVnd: 3300000,
        image: windowsBoxImage,
      },
    ],
  },
  {
    id: "microsoft-365",
    label: "Microsoft 365",
    eyebrow: "Subscription cloud",
    summary: "Business Standard, Apps for business và Personal theo người dùng.",
    accent: "#0f766e",
    image: microsoft365BusinessBoxImage,
    products: [
      {
        slug: "microsoft-365-business-standard",
        name: "Microsoft 365 Business Standard",
        detail: "Email, Office apps, cloud và cộng tác doanh nghiệp",
        unit: "License",
        quantity: 1,
        priceVnd: 3030000,
        image: microsoft365BusinessBoxImage,
      },
      {
        slug: "microsoft-365-apps-for-business",
        name: "Microsoft 365 Apps for business",
        detail: "Office desktop, web và mobile theo người dùng",
        unit: "License",
        quantity: 1,
        priceVnd: 2710000,
        image: microsoft365BoxImage,
      },
      {
        slug: "microsoft-365-personal",
        name: "Microsoft 365 Personal",
        detail: "1 người dùng, 12 tháng, Office apps và cloud storage",
        unit: "License",
        quantity: 1,
        priceLabel: "Liên hệ",
        image: microsoft365PersonalBoxImage,
      },
    ],
  },
  {
    id: "office",
    label: "Office",
    eyebrow: "Phần mềm Office",
    summary: "Office LTSC 2024 và Office Home & Business 2024.",
    accent: "#ea580c",
    image: office2024BoxImage,
    products: [
      {
        slug: "office-ltsc-2024",
        name: "Office LTSC Standard 2024",
        detail: "Office mua theo license cho môi trường ổn định",
        unit: "License",
        quantity: 1,
        priceVnd: 11840000,
        image: office2024BoxImage,
      },
      {
        slug: "office-home-business-2024",
        name: "Office Home & Business 2024",
        detail: "English APAC EM Medialess EP2-06630",
        unit: "License",
        quantity: 1,
        priceVnd: 5960000,
        image: office2024BoxImage,
      },
      {
        slug: "office-home-business-2024",
        name: "Office Home & Business 2024 ESD",
        detail: "All Lng APAC EM Retail Online ESD",
        unit: "License",
        quantity: 1,
        priceVnd: 5380000,
        image: office2024BoxImage,
      },
    ],
  },
] as const;

export function formatVnd(value: number) {
  return new Intl.NumberFormat("vi-VN").format(value) + "đ";
}

export const quoteSteps = [
  {
    label: "Gửi nhu cầu qua Zalo hoặc hotline",
    detail:
      "Doanh nghiệp gửi sản phẩm cần mua, số lượng dự kiến và yêu cầu chứng từ.",
    status: "tiếp nhận",
  },
  {
    label: "Rà soát phiên bản phù hợp",
    detail:
      "LOREM kiểm tra nhu cầu theo thiết bị, người dùng, môi trường triển khai và mục đích sử dụng.",
    status: "tư vấn",
  },
  {
    label: "Báo giá theo hồ sơ",
    detail:
      "Báo giá dựa trên số lượng, dòng sản phẩm, điều kiện giao dịch và loại chứng từ cần có.",
    status: "báo giá",
  },
  {
    label: "Bàn giao license & chứng từ",
    detail:
      "Hỗ trợ bàn giao thông tin license, hóa đơn và chứng từ theo từng giao dịch.",
    status: "bàn giao",
  },
  {
    label: "Hỗ trợ sau bàn giao",
    detail:
      "Lưu lại thông tin giao dịch và hỗ trợ các câu hỏi cơ bản cho IT hoặc kế toán.",
    status: "hỗ trợ",
  },
];

export const trustSignals = [
  {
    title: "Hàng chính hãng",
    body: "Tư vấn và cung cấp license Microsoft, Windows, Office, Microsoft 365 và Adobe theo hồ sơ mua hàng rõ nguồn.",
  },
  {
    title: "Nguồn nhập ủy quyền",
    body: "Nguồn nhập từ kênh phân phối hoặc đại lý được ủy quyền của Microsoft tại Việt Nam theo từng hồ sơ giao dịch.",
  },
  {
    title: "Nguồn hàng uy tín",
    body: "Ưu tiên nguồn hàng từ các đầu mối phân phối uy tín như FPT/Synnex FPT khi phù hợp với sản phẩm và hồ sơ.",
  },
  {
    title: "Chứng từ rõ ràng",
    body: "Bàn giao thông tin license, chứng từ và hồ sơ liên quan để IT/kế toán dễ đối chiếu sau mua.",
  },
  {
    title: "Hợp đồng",
    body: "Hỗ trợ hồ sơ hợp đồng theo nhu cầu mua hàng của doanh nghiệp và quy trình nội bộ.",
  },
  {
    title: "Hóa đơn VAT",
    body: "Hỗ trợ hóa đơn VAT theo từng giao dịch khi thông tin doanh nghiệp và điều kiện hồ sơ đã được xác nhận.",
  },
];

export const complianceFaqs: Array<{
  category: string;
  question: string;
  answer: string;
  href?: string;
  linkLabel?: string;
}> = [
  {
    category: "Báo giá",
    question: "Giá trên website có phải giá cuối cùng không?",
    answer:
      "Không. Đây là giá tham khảo cho số lượng và SKU đang hiển thị. Giá xác nhận có thể thay đổi theo thời điểm, số lượng, ngôn ngữ, hình thức bàn giao và hồ sơ mua hàng. Liên hệ Zalo hoặc hotline để xác nhận giá mới nhất. Nếu giá đã quá ngày kiểm tra, website sẽ chuyển sang trạng thái liên hệ thay vì tiếp tục hiển thị một mức giá cũ.",
  },
  {
    category: "Chuẩn bị nhu cầu",
    question: "Cần chuẩn bị thông tin gì để nhận đúng báo giá?",
    answer:
      "Tối thiểu cần có tên sản phẩm hoặc nhu cầu sử dụng, số thiết bị hoặc người dùng, hệ điều hành và phiên bản hiện tại, thời hạn subscription nếu có, cùng yêu cầu về hợp đồng, hóa đơn VAT và chứng từ bàn giao. Với Windows GGWA, nên chuẩn bị thêm danh sách thiết bị và hồ sơ Windows đang có.",
    href: "/kien-thuc/ho-so-mua-license-doanh-nghiep",
    linkLabel: "Xem checklist hồ sơ mua license",
  },
  {
    category: "Windows",
    question: "Windows GGWA phù hợp với trường hợp nào?",
    answer:
      "GGWA là hướng cấp phép Windows đầy đủ cho một số trường hợp doanh nghiệp cần xử lý thiết bị hiện hữu đang thiếu quyền sử dụng Windows hợp lệ. Đây không phải một key bán lẻ dùng chung cho mọi tình huống; số lượng, hiện trạng máy và hồ sơ đang có cần được rà soát trước khi chọn SKU.",
    href: "/kien-thuc/windows-ggwa-la-gi",
    linkLabel: "Đọc hướng dẫn Windows GGWA",
  },
  {
    category: "Windows",
    question: "Windows DSP/OEI, ESD và GGWA có giống nhau không?",
    answer:
      "Không. Các tên này phản ánh hình thức sản phẩm, phương thức bàn giao hoặc tình huống cấp phép khác nhau. Hai SKU cùng là Windows 11 Pro vẫn có thể khác ngôn ngữ, cách giao hàng và điều kiện gắn với thiết bị. IT và mua hàng nên đối chiếu tên đầy đủ, part number và thiết bị áp dụng trước khi duyệt.",
    href: "/kien-thuc/windows-oem-dsp-esd-ggwa-khac-nhau",
    linkLabel: "So sánh các hình thức Windows",
  },
  {
    category: "Office",
    question: "Office LTSC 2024 khác Microsoft 365 như thế nào?",
    answer:
      "Office LTSC 2024 là phiên bản mua theo license cho môi trường cần bộ ứng dụng ổn định; sản phẩm nhận cập nhật bảo mật và chất lượng nhưng không nhận tính năng mới liên tục sau khi phát hành. Microsoft 365 là subscription theo người dùng, ứng dụng được cập nhật thường xuyên và quyền lợi email, cloud hoặc cộng tác phụ thuộc từng gói.",
    href: "/kien-thuc/office-ltsc-2024-va-microsoft-365",
    linkLabel: "So sánh Office LTSC và Microsoft 365",
  },
  {
    category: "Microsoft 365",
    question: "Business Standard khác Apps for business ở điểm nào?",
    answer:
      "Cả hai đều cấp theo người dùng và có ứng dụng Office. Business Standard bổ sung email doanh nghiệp Exchange cùng các dịch vụ cộng tác theo cấu hình gói. Apps for business tập trung vào ứng dụng Office và lưu trữ cloud, phù hợp khi doanh nghiệp đã có hệ thống email riêng.",
    href: "/kien-thuc/microsoft-365-business-standard-va-apps-for-business",
    linkLabel: "Xem bảng so sánh hai gói",
  },
  {
    category: "Microsoft 365",
    question: "Một license Microsoft 365 cài được trên bao nhiêu thiết bị?",
    answer:
      "Với Business Standard và Apps for business, Microsoft hiện cho phép mỗi người dùng cài ứng dụng trên tối đa 5 PC hoặc Mac, 5 máy tính bảng và 5 điện thoại. Quyền sử dụng gắn với người dùng được cấp license, không phải một key dùng chung; doanh nghiệp vẫn cần kiểm tra điều khoản của đúng gói tại thời điểm mua.",
    href: "/giai-phap/microsoft-365",
    linkLabel: "Xem các gói Microsoft 365",
  },
  {
    category: "Adobe",
    question: "Adobe Teams khác gói Individual như thế nào?",
    answer:
      "Adobe Teams dành cho tổ chức cần quản lý người dùng và license tập trung qua Adobe Admin Console. Quản trị viên có thể gán hoặc thu hồi seat khi nhân sự thay đổi, theo dõi license đang dùng và quản lý tài sản của nhóm. Gói Individual không có cùng mô hình quản trị dành cho doanh nghiệp.",
    href: "/kien-thuc/adobe-individual-va-adobe-teams",
    linkLabel: "So sánh Adobe Individual và Teams",
  },
  {
    category: "Chứng từ",
    question: "Một giao dịch license doanh nghiệp được bàn giao những gì?",
    answer:
      "Bộ hồ sơ phụ thuộc sản phẩm và giao dịch đã xác nhận, thường gồm báo giá hoặc đơn hàng, hợp đồng khi có yêu cầu, hóa đơn VAT, thông tin SKU và số lượng, hướng dẫn kích hoạt hoặc phân bổ seat, cùng biên bản hoặc xác nhận bàn giao phù hợp. Danh mục chứng từ cần được chốt ngay trong báo giá.",
    href: "/nguon-hang-ho-so",
    linkLabel: "Xem quy trình nguồn hàng và hồ sơ",
  },
  {
    category: "Sau bàn giao",
    question: "IT và kế toán nên lưu lại thông tin nào sau khi mua?",
    answer:
      "IT nên lưu tên SKU, part number, số lượng, thiết bị hoặc người dùng được cấp, tài khoản quản trị và ngày bắt đầu hoặc gia hạn. Kế toán nên lưu báo giá, hợp đồng, hóa đơn và chứng từ bàn giao cùng một hồ sơ. Không nên chỉ lưu product key hoặc email kích hoạt riêng lẻ.",
    href: "/kien-thuc/checklist-ban-giao-license-it-ke-toan",
    linkLabel: "Mở checklist bàn giao",
  },
];

export const brandAssets = {
  approvedWording: [
    "tư vấn bản quyền",
    "báo giá theo số lượng",
    "hỗ trợ hồ sơ/chứng từ",
    "nguồn cung có chứng từ theo hồ sơ giao dịch",
    "bàn giao license rõ ràng",
  ],
  avoidedWording: [
    "Không tự nhận quan hệ đối tác nếu chưa có tài liệu xác minh.",
    "Không dùng ngôn ngữ tạo áp lực pháp lý hoặc hứa hẹn tuyệt đối.",
    "Không định vị bằng hàng hóa không rõ nguồn gốc.",
    "Không gọi subscription là mua một lần dùng mãi mãi.",
  ],
  llmDescription:
    "LOREM Technology là đơn vị tư vấn và cung cấp giải pháp bản quyền Microsoft, Windows GGWA, Office, Microsoft 365 và Adobe cho doanh nghiệp tại Việt Nam. Website có giá tham khảo cho một số sản phẩm Windows, Microsoft 365 và Office; giá mới nhất cần xác nhận qua Zalo hoặc hotline theo số lượng và hồ sơ giao dịch.",
};

export const allRoutes = [
  "/",
  "/about",
  "/legal",
  "/brand-assets",
  "/nguon-hang-ho-so",
  "/kien-thuc",
  "/privacy-policy",
  "/data-deletion",
  ...productCategories.map((category) => `/giai-phap/${category.slug}`),
  ...productFamilies
    .filter((product) => !product.catalogOnly)
    .map((product) => `/san-pham/${product.slug}`),
  ...knowledgeArticles.map((article) => `/kien-thuc/${article.slug}`),
];

export function absoluteUrl(path = "/") {
  return new URL(path, site.url).toString();
}
