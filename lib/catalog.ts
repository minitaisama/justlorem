export type CategorySlug = "windows" | "office" | "microsoft-365" | "adobe";

export type SourceDocument = {
  title: string;
  publisher: "Microsoft" | "Adobe";
  url: string;
};

export type SkuVariant = {
  name: string;
  partNumber?: string;
  language: string;
  deliveryMethod: string;
  unit: "License" | "Subscription";
  quantity: number;
  priceVnd?: number;
  priceLabel?: string;
  priceCheckedAt: string;
  pricingNote: string;
};

export type ProductFamily = {
  slug: string;
  category: CategorySlug;
  brand: "Microsoft" | "Adobe";
  name: string;
  shortName: string;
  eyebrow: string;
  summary: string;
  audience: string;
  licensingModel: string;
  platform: string;
  term: string;
  deploymentModel: string;
  image: string;
  imageAlt: string;
  suitableFor: string[];
  unsuitableFor: string[];
  benefits: string[];
  limitations: string[];
  relatedProductSlug: string;
  variants: SkuVariant[];
  sources: SourceDocument[];
  faqs: Array<{ question: string; answer: string }>;
  catalogOnly?: boolean;
};

export type ProductCategory = {
  slug: CategorySlug;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  accent: string;
  icon: string;
  productSlugs: string[];
  needOptions: Array<{
    label: string;
    description: string;
    recommendedProductSlug: string;
  }>;
  comparison: {
    columns: string[];
    rows: Array<{ label: string; values: string[] }>;
  };
  faqs: Array<{ question: string; answer: string }>;
};

const checkedAt = "2026-07-10";

export const productFamilies: ProductFamily[] = [
  {
    slug: "windows-ggwa",
    category: "windows",
    brand: "Microsoft",
    name: "Windows GGWA",
    shortName: "Windows GGWA",
    eyebrow: "Windows cho thiết bị hiện hữu",
    summary:
      "Giải pháp Windows dành cho doanh nghiệp cần rà soát và chuẩn hóa bản quyền trên thiết bị đang sử dụng.",
    audience: "Doanh nghiệp có máy tính đang vận hành và cần rà soát hồ sơ Windows",
    licensingModel: "Theo thiết bị và hồ sơ đủ điều kiện",
    platform: "Windows PC",
    term: "Theo điều kiện cấp phép của sản phẩm",
    deploymentModel: "Bàn giao license và thông tin chứng từ theo giao dịch",
    image: "/product-visuals/windows-11-pro.svg",
    imageAlt: "Nhận diện Windows 11 Pro dùng cho giải pháp Windows GGWA",
    suitableFor: [
      "Thiết bị doanh nghiệp đang dùng Windows nhưng hồ sơ bản quyền cần được rà soát",
      "IT cần một phương án theo số lượng máy và hiện trạng thiết bị",
      "Kế toán cần báo giá, hợp đồng và chứng từ theo giao dịch",
    ],
    unsuitableFor: [
      "Máy mới đã có Windows bản quyền phù hợp từ nhà sản xuất",
      "Nhu cầu mua key không rõ nguồn gốc hoặc không cần chứng từ",
      "Trường hợp chưa thống kê được thiết bị cần xử lý",
    ],
    benefits: ["Theo hồ sơ thiết bị", "Dễ bàn giao cho IT", "Có chứng từ theo giao dịch"],
    limitations: [
      "Cần rà soát hiện trạng thiết bị trước khi báo giá",
      "Không phải mọi tình huống đều phù hợp GGWA",
    ],
    relatedProductSlug: "windows-11-pro",
    variants: [
      {
        name: "Windows GGWA - Windows 11 Pro - Legalization Get Genuine",
        language: "Theo hồ sơ",
        deliveryMethod: "Theo phương án được xác nhận",
        unit: "License",
        quantity: 1,
        priceVnd: 4500000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo theo hồ sơ thiết bị; xác nhận lại trước khi đặt hàng.",
      },
    ],
    sources: [
      {
        title: "Get Genuine Windows Agreement fact sheet",
        publisher: "Microsoft",
        url: "https://download.microsoft.com/download/0/2/2/022806FC-E205-4DD8-8785-7C86C5009F14/GGWA_SMO_Non-USD_Fact_Sheet_To_Partner.pdf",
      },
    ],
    faqs: [
      {
        question: "Có thể mua Windows GGWA mà không rà soát thiết bị không?",
        answer:
          "LOREM cần nắm số lượng và hiện trạng thiết bị trước khi xác định phương án phù hợp. Báo giá chỉ được chốt sau bước rà soát nhu cầu.",
      },
      {
        question: "Giá Windows GGWA trên website có phải giá cuối cùng không?",
        answer:
          "Không. Đây là giá tham khảo; giá mới nhất phụ thuộc số lượng, thời điểm và hồ sơ giao dịch.",
      },
    ],
  },
  {
    slug: "windows-11-pro",
    category: "windows",
    brand: "Microsoft",
    name: "Windows 11 Pro",
    shortName: "Windows 11 Pro",
    eyebrow: "Windows cho thiết bị doanh nghiệp",
    summary:
      "Windows 11 Pro cho máy tính doanh nghiệp, có các hình thức bàn giao khác nhau theo mã hàng và kênh cung ứng.",
    audience: "Doanh nghiệp mua Windows cho thiết bị mới hoặc nhu cầu triển khai xác định",
    licensingModel: "Theo thiết bị",
    platform: "Windows PC",
    term: "Theo điều kiện cấp phép của SKU",
    deploymentModel: "DSP/OEI hoặc online download tùy mã hàng",
    image: "/product-visuals/windows-11-pro.svg",
    imageAlt: "Nhận diện Windows 11 Pro",
    suitableFor: [
      "Thiết bị doanh nghiệp cần tính năng Windows Pro",
      "IT đã xác định số lượng máy và hình thức bàn giao",
      "Đơn vị cần hồ sơ mua hàng rõ theo mã sản phẩm",
    ],
    unsuitableFor: [
      "Chưa xác định máy mới hay máy đang sử dụng",
      "Cần subscription theo người dùng thay vì license theo thiết bị",
      "Chỉ cần Windows Home cho nhu cầu cá nhân cơ bản",
    ],
    benefits: ["Theo thiết bị", "Nhiều hình thức bàn giao", "Phù hợp môi trường doanh nghiệp"],
    limitations: ["Cần chọn đúng SKU", "Điều kiện chuyển giao phụ thuộc loại license"],
    relatedProductSlug: "windows-ggwa",
    variants: [
      {
        name: "Win Pro 11 64Bit Eng Intl 1pk DSP OEI DVD",
        language: "English International",
        deliveryMethod: "DSP/OEI DVD",
        unit: "License",
        quantity: 1,
        priceVnd: 3830000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo cho một license; cần xác nhận tồn và điều kiện SKU.",
      },
      {
        name: "Win Pro 11 64-bit All Lng PK Lic Online Download NR",
        language: "All languages",
        deliveryMethod: "Online download",
        unit: "License",
        quantity: 1,
        priceVnd: 5060000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo cho một license; cần xác nhận lại mã hàng.",
      },
    ],
    sources: [
      {
        title: "Windows 11 Pro for business",
        publisher: "Microsoft",
        url: "https://www.microsoft.com/en-us/windows/business/windows-11-pro",
      },
    ],
    faqs: [
      {
        question: "DSP/OEI và online download có giống nhau không?",
        answer:
          "Không. Đây là các hình thức sản phẩm và bàn giao khác nhau. Doanh nghiệp cần chọn theo thiết bị, ngôn ngữ và hồ sơ mua hàng.",
      },
    ],
  },
  {
    slug: "windows-11-home",
    category: "windows",
    brand: "Microsoft",
    name: "Windows 11 Home",
    shortName: "Windows 11 Home",
    eyebrow: "Windows cho nhu cầu cơ bản",
    summary: "Các SKU Windows 11 Home được giữ trong catalog giá nhưng không có trang sản phẩm riêng.",
    audience: "Thiết bị có nhu cầu Windows cơ bản",
    licensingModel: "Theo thiết bị và SKU",
    platform: "Windows PC",
    term: "Theo điều kiện cấp phép của SKU",
    deploymentModel: "DSP/OEI hoặc online download tùy mã hàng",
    image: "/product-visuals/windows-11.svg",
    imageAlt: "Nhận diện Windows 11",
    suitableFor: ["Nhu cầu sử dụng Windows cơ bản"],
    unsuitableFor: ["Môi trường cần tính năng Windows Pro"],
    benefits: ["Theo thiết bị"],
    limitations: ["Không thay thế Windows Pro cho nhu cầu doanh nghiệp nâng cao"],
    relatedProductSlug: "windows-11-pro",
    variants: [
      {
        name: "Win Home 11 64Bit Eng Intl 1pk DSP OEI DVD",
        language: "English International",
        deliveryMethod: "DSP/OEI DVD",
        unit: "License",
        quantity: 1,
        priceVnd: 2980000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo; xác nhận lại SKU và nhu cầu trước mua.",
      },
      {
        name: "WIN HOME 11 64-bit All Lng PK Lic Online Download",
        language: "All languages",
        deliveryMethod: "Online download",
        unit: "License",
        quantity: 1,
        priceVnd: 3300000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo; xác nhận lại SKU và nhu cầu trước mua.",
      },
    ],
    sources: [
      {
        title: "Windows 11",
        publisher: "Microsoft",
        url: "https://www.microsoft.com/en-us/windows/windows-11",
      },
    ],
    faqs: [],
    catalogOnly: true,
  },
  {
    slug: "office-ltsc-2024",
    category: "office",
    brand: "Microsoft",
    name: "Office LTSC Standard 2024",
    shortName: "Office LTSC 2024",
    eyebrow: "Office mua theo license",
    summary:
      "Bộ ứng dụng Office ổn định cho tổ chức cần môi trường triển khai kiểm soát và không ưu tiên cập nhật tính năng liên tục.",
    audience: "Tổ chức cần phiên bản Office ổn định trong môi trường quản trị tập trung",
    licensingModel: "Volume licensing theo thiết bị",
    platform: "Windows; phiên bản riêng cho macOS tùy chương trình",
    term: "Phiên bản LTSC, không phải subscription Microsoft 365",
    deploymentModel: "Triển khai và kích hoạt theo chương trình volume licensing",
    image: "/product-visuals/office-2024.svg",
    imageAlt: "Nhận diện Microsoft Office 2024",
    suitableFor: [
      "Môi trường hạn chế cập nhật tính năng",
      "Doanh nghiệp cần triển khai Office ổn định theo thiết bị",
      "IT có quy trình quản trị và kích hoạt tập trung",
    ],
    unsuitableFor: [
      "Cần email doanh nghiệp và cộng tác cloud trong cùng gói",
      "Muốn nhận tính năng Office mới liên tục",
      "Cần subscription linh hoạt theo người dùng",
    ],
    benefits: ["Ổn định", "Không nhận feature update liên tục", "Phù hợp quản trị tập trung"],
    limitations: ["Không gồm email doanh nghiệp", "Không có feature update sau khi phát hành"],
    relatedProductSlug: "microsoft-365-business-standard",
    variants: [
      {
        name: "Office LTSC Standard 2024",
        language: "Theo chương trình cấp phép",
        deliveryMethod: "Volume licensing",
        unit: "License",
        quantity: 1,
        priceVnd: 11840000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo; cần xác nhận chương trình và số lượng trước báo giá.",
      },
    ],
    sources: [
      {
        title: "Overview of Office LTSC 2024",
        publisher: "Microsoft",
        url: "https://learn.microsoft.com/en-us/office/ltsc/2024/overview",
      },
    ],
    faqs: [
      {
        question: "Office LTSC 2024 có nhận tính năng mới liên tục không?",
        answer:
          "Không. Microsoft nêu rõ Office LTSC 2024 nhận cập nhật bảo mật và chất lượng nhưng không nhận feature update sau khi phát hành.",
      },
    ],
  },
  {
    slug: "office-home-business-2024",
    category: "office",
    brand: "Microsoft",
    name: "Office Home & Business 2024",
    shortName: "Office H&B 2024",
    eyebrow: "Office cho một máy PC hoặc Mac",
    summary:
      "Phiên bản Office mua một lần cho một máy, phù hợp doanh nghiệp nhỏ cần ứng dụng Office cơ bản mà không cần dịch vụ cloud đi kèm.",
    audience: "Doanh nghiệp nhỏ hoặc người dùng cần Office trên một thiết bị",
    licensingModel: "Mua một lần cho một thiết bị theo điều kiện SKU",
    platform: "PC hoặc Mac theo phiên bản",
    term: "Phiên bản 2024",
    deploymentModel: "Medialess hoặc ESD tùy SKU",
    image: "/product-visuals/office-2024.svg",
    imageAlt: "Nhận diện Microsoft Office Home and Business 2024",
    suitableFor: [
      "Một người dùng làm việc chính trên một máy",
      "Không cần email Exchange hoặc quản trị cloud",
      "Muốn mua phiên bản Office 2024 thay vì subscription",
    ],
    unsuitableFor: [
      "Cần cài trên nhiều thiết bị cho cùng một người dùng",
      "Cần email doanh nghiệp, Teams hoặc SharePoint",
      "Cần cập nhật tính năng liên tục",
    ],
    benefits: ["Mua một lần", "Phù hợp một thiết bị", "Có bản PC hoặc Mac"],
    limitations: ["Không gồm dịch vụ cloud", "Không linh hoạt như subscription theo người dùng"],
    relatedProductSlug: "office-ltsc-2024",
    variants: [
      {
        name: "Office Home & Business 2024 English APAC EM Medialess",
        partNumber: "EP2-06630",
        language: "English APAC",
        deliveryMethod: "Medialess",
        unit: "License",
        quantity: 1,
        priceVnd: 5960000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo; xác nhận lại platform và mã hàng trước mua.",
      },
      {
        name: "Office Home & Business 2024 All Lng APAC EM Retail Online ESD",
        language: "All languages APAC",
        deliveryMethod: "Retail online ESD",
        unit: "License",
        quantity: 1,
        priceVnd: 5380000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo; xác nhận lại platform và mã hàng trước mua.",
      },
    ],
    sources: [
      {
        title: "Office Home & Business 2024",
        publisher: "Microsoft",
        url: "https://www.microsoft.com/en-us/microsoft-365/p/office-home-business-2024/cfq7ttc0pbm7",
      },
    ],
    faqs: [
      {
        question: "Office Home & Business 2024 có Microsoft 365 cloud không?",
        answer:
          "Không. Đây là phiên bản Office mua một lần; các dịch vụ cloud và email doanh nghiệp thuộc các gói Microsoft 365 phù hợp.",
      },
    ],
  },
  {
    slug: "microsoft-365-business-standard",
    category: "microsoft-365",
    brand: "Microsoft",
    name: "Microsoft 365 Business Standard",
    shortName: "M365 Business Standard",
    eyebrow: "Ứng dụng, email và cloud",
    summary:
      "Subscription theo người dùng gồm ứng dụng Office, email doanh nghiệp, lưu trữ cloud và công cụ cộng tác theo cấu hình gói tại thời điểm mua.",
    audience: "Doanh nghiệp cần ứng dụng Office cùng email và công cụ cộng tác",
    licensingModel: "Subscription theo người dùng",
    platform: "PC, Mac, web và mobile",
    term: "Theo chu kỳ subscription",
    deploymentModel: "Quản lý người dùng và dịch vụ qua tenant Microsoft 365",
    image: "/product-visuals/microsoft-365.svg",
    imageAlt: "Nhận diện Microsoft 365",
    suitableFor: [
      "Cần email tên miền doanh nghiệp",
      "Cần Office desktop, web và mobile",
      "Cần OneDrive và công cụ cộng tác theo gói",
    ],
    unsuitableFor: [
      "Chỉ cần ứng dụng Office desktop",
      "Không muốn mô hình subscription",
      "Cần phiên bản Office cố định trong môi trường hạn chế cập nhật",
    ],
    benefits: ["Ứng dụng Office", "Email doanh nghiệp", "Cloud và cộng tác"],
    limitations: ["Subscription theo người dùng", "Tính năng có thể khác theo cấu hình có hoặc không Teams"],
    relatedProductSlug: "microsoft-365-apps-for-business",
    variants: [
      {
        name: "Microsoft 365 Business Standard",
        language: "Đa ngôn ngữ",
        deliveryMethod: "Subscription cloud",
        unit: "Subscription",
        quantity: 1,
        priceVnd: 3030000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo theo một người dùng; xác nhận chu kỳ và cấu hình gói trước mua.",
      },
    ],
    sources: [
      {
        title: "Microsoft 365 Business Standard",
        publisher: "Microsoft",
        url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-standard",
      },
    ],
    faqs: [
      {
        question: "Business Standard khác Apps for business ở điểm nào?",
        answer:
          "Business Standard bổ sung email doanh nghiệp và các dịch vụ cộng tác; Apps for business tập trung vào bộ ứng dụng Office và lưu trữ theo thông tin gói hiện hành.",
      },
    ],
  },
  {
    slug: "microsoft-365-apps-for-business",
    category: "microsoft-365",
    brand: "Microsoft",
    name: "Microsoft 365 Apps for business",
    shortName: "M365 Apps for business",
    eyebrow: "Ứng dụng Office theo người dùng",
    summary:
      "Subscription tập trung vào ứng dụng Office trên desktop, web và mobile cho người dùng doanh nghiệp.",
    audience: "Doanh nghiệp đã có email riêng và chủ yếu cần ứng dụng Office",
    licensingModel: "Subscription theo người dùng",
    platform: "PC, Mac, web và mobile",
    term: "Theo chu kỳ subscription",
    deploymentModel: "Gán license theo người dùng trong tenant",
    image: "/product-visuals/microsoft-365.svg",
    imageAlt: "Nhận diện Microsoft 365 Apps for business",
    suitableFor: [
      "Chủ yếu cần Word, Excel, PowerPoint và Outlook",
      "Cần cài ứng dụng trên nhiều thiết bị theo giới hạn gói",
      "Đã có giải pháp email doanh nghiệp khác",
    ],
    unsuitableFor: [
      "Cần Exchange email trong cùng gói",
      "Cần phiên bản Office cố định không nhận feature update",
      "Muốn mua một lần cho một thiết bị",
    ],
    benefits: ["Office đa thiết bị", "Theo người dùng", "Luôn cập nhật theo subscription"],
    limitations: ["Không gồm email Exchange", "Cần duy trì subscription"],
    relatedProductSlug: "microsoft-365-business-standard",
    variants: [
      {
        name: "Microsoft 365 Apps for business",
        language: "Đa ngôn ngữ",
        deliveryMethod: "Subscription cloud",
        unit: "Subscription",
        quantity: 1,
        priceVnd: 2710000,
        priceCheckedAt: checkedAt,
        pricingNote: "Giá tham khảo theo một người dùng; xác nhận chu kỳ trước mua.",
      },
    ],
    sources: [
      {
        title: "Microsoft 365 Apps for business",
        publisher: "Microsoft",
        url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-apps-for-business",
      },
    ],
    faqs: [
      {
        question: "Apps for business có email doanh nghiệp không?",
        answer:
          "Không. Nếu cần email doanh nghiệp trong cùng giải pháp, nên so sánh với Microsoft 365 Business Standard.",
      },
    ],
  },
  {
    slug: "microsoft-365-personal",
    category: "microsoft-365",
    brand: "Microsoft",
    name: "Microsoft 365 Personal",
    shortName: "Microsoft 365 Personal",
    eyebrow: "Subscription cá nhân",
    summary: "Sản phẩm cá nhân được giữ trong catalog tham khảo nhưng không phải trọng tâm tư vấn doanh nghiệp.",
    audience: "Một người dùng cá nhân",
    licensingModel: "Subscription theo người dùng",
    platform: "PC, Mac và mobile theo điều kiện gói",
    term: "12 tháng theo SKU tham khảo",
    deploymentModel: "Subscription cá nhân",
    image: "/product-visuals/microsoft-365.svg",
    imageAlt: "Nhận diện Microsoft 365",
    suitableFor: ["Một người dùng cá nhân"],
    unsuitableFor: ["Doanh nghiệp cần quản lý seat tập trung"],
    benefits: ["Office apps và cloud cho cá nhân"],
    limitations: ["Không phải gói quản trị doanh nghiệp"],
    relatedProductSlug: "microsoft-365-apps-for-business",
    variants: [
      {
        name: "Microsoft 365 Personal",
        language: "Đa ngôn ngữ",
        deliveryMethod: "Subscription cloud",
        unit: "Subscription",
        quantity: 1,
        priceLabel: "Liên hệ",
        priceCheckedAt: checkedAt,
        pricingNote: "Liên hệ để xác nhận SKU và giá mới nhất.",
      },
    ],
    sources: [
      {
        title: "Microsoft 365 Personal",
        publisher: "Microsoft",
        url: "https://www.microsoft.com/en-us/microsoft-365/p/microsoft-365-personal/cfq7ttc0k5bf",
      },
    ],
    faqs: [],
    catalogOnly: true,
  },
  {
    slug: "adobe-creative-cloud-teams",
    category: "adobe",
    brand: "Adobe",
    name: "Adobe Creative Cloud for teams",
    shortName: "Creative Cloud for teams",
    eyebrow: "Ứng dụng sáng tạo cho nhóm",
    summary:
      "Các gói ứng dụng sáng tạo Adobe dành cho team, có quản lý license tập trung và lựa chọn theo bộ ứng dụng hoặc single app.",
    audience: "Phòng thiết kế, marketing, media và content production",
    licensingModel: "Subscription theo seat",
    platform: "Desktop, web và mobile tùy ứng dụng",
    term: "Theo chu kỳ subscription",
    deploymentModel: "Quản lý seat qua Adobe Admin Console",
    image: "/product-visuals/adobe-creative-cloud.svg",
    imageAlt: "Nhận diện Adobe Creative Cloud",
    suitableFor: [
      "Team cần Photoshop, Illustrator, Premiere Pro hoặc nhiều ứng dụng Adobe",
      "Doanh nghiệp cần quản lý seat tập trung",
      "Cần thu hồi và cấp lại seat khi nhân sự thay đổi",
    ],
    unsuitableFor: [
      "Chỉ cần quy trình PDF và chữ ký điện tử",
      "Nhu cầu cá nhân không cần quản trị team",
      "Không muốn mô hình subscription",
    ],
    benefits: ["Quản lý seat", "Ứng dụng sáng tạo", "Admin Console"],
    limitations: ["Subscription theo seat", "Quyền lợi phụ thuộc gói Standard/Pro và khu vực"],
    relatedProductSlug: "acrobat-pro-teams",
    variants: [
      {
        name: "Adobe Creative Cloud for teams",
        language: "Đa ngôn ngữ",
        deliveryMethod: "Subscription cloud",
        unit: "Subscription",
        quantity: 1,
        priceLabel: "Liên hệ",
        priceCheckedAt: checkedAt,
        pricingNote: "Báo giá theo số seat, ứng dụng và chu kỳ sử dụng.",
      },
    ],
    sources: [
      {
        title: "Compare Creative Cloud plans for teams",
        publisher: "Adobe",
        url: "https://www.adobe.com/creativecloud/business/teams/plans.html",
      },
    ],
    faqs: [
      {
        question: "Có thể mua một ứng dụng Adobe cho team không?",
        answer:
          "Có các lựa chọn single app và bộ Creative Cloud tùy danh mục Adobe tại thời điểm báo giá. LOREM sẽ đối chiếu theo ứng dụng và số seat cần dùng.",
      },
    ],
  },
  {
    slug: "acrobat-pro-teams",
    category: "adobe",
    brand: "Adobe",
    name: "Acrobat Pro for teams",
    shortName: "Acrobat Pro for teams",
    eyebrow: "PDF và tài liệu cho team",
    summary:
      "Giải pháp tạo, sửa, chuyển đổi, bảo vệ và cộng tác trên PDF cho nhóm làm việc doanh nghiệp.",
    audience: "Bộ phận hành chính, pháp chế, sales, tài chính và vận hành tài liệu",
    licensingModel: "Subscription theo seat",
    platform: "Desktop, web và mobile tùy tính năng",
    term: "Theo chu kỳ subscription",
    deploymentModel: "Quản lý seat qua Adobe Admin Console",
    image: "/product-visuals/adobe-acrobat.svg",
    imageAlt: "Nhận diện Adobe Acrobat",
    suitableFor: [
      "Team thường xuyên tạo, sửa hoặc chuyển đổi PDF",
      "Cần quản lý seat tập trung",
      "Cần quy trình review và cộng tác tài liệu",
    ],
    unsuitableFor: [
      "Cần đầy đủ bộ ứng dụng thiết kế và video",
      "Chỉ đọc PDF cơ bản",
      "Không muốn mô hình subscription",
    ],
    benefits: ["Quy trình PDF", "Quản lý seat", "Cộng tác tài liệu"],
    limitations: ["Subscription theo seat", "Một số tính năng AI có thể là add-on riêng"],
    relatedProductSlug: "adobe-creative-cloud-teams",
    variants: [
      {
        name: "Adobe Acrobat Pro for teams",
        language: "Đa ngôn ngữ",
        deliveryMethod: "Subscription cloud",
        unit: "Subscription",
        quantity: 1,
        priceLabel: "Liên hệ",
        priceCheckedAt: checkedAt,
        pricingNote: "Báo giá theo số seat và chu kỳ sử dụng.",
      },
    ],
    sources: [
      {
        title: "Adobe Acrobat Pro for teams",
        publisher: "Adobe",
        url: "https://www.adobe.com/creativecloud/business/acrobat-pro.html",
      },
    ],
    faqs: [
      {
        question: "Acrobat Pro for teams khác Creative Cloud for teams thế nào?",
        answer:
          "Acrobat tập trung vào PDF và tài liệu; Creative Cloud phục vụ quy trình sáng tạo với nhiều ứng dụng như Photoshop, Illustrator hoặc Premiere Pro.",
      },
    ],
  },
];

export const productCategories: ProductCategory[] = [
  {
    slug: "windows",
    title: "Microsoft Windows",
    eyebrow: "License theo thiết bị",
    summary: "Windows GGWA và Windows 11 Pro theo hiện trạng thiết bị và hồ sơ mua hàng.",
    description:
      "Chọn phương án Windows dựa trên máy đang sử dụng hay thiết bị mới, số lượng và loại hồ sơ doanh nghiệp cần bàn giao.",
    accent: "#2563eb",
    icon: "/product-icons/windows-pro.svg",
    productSlugs: ["windows-ggwa", "windows-11-pro"],
    needOptions: [
      { label: "Máy đang sử dụng", description: "Cần rà soát hồ sơ Windows hiện hữu.", recommendedProductSlug: "windows-ggwa" },
      { label: "Thiết bị mới", description: "Đã xác định máy và cần Windows Pro.", recommendedProductSlug: "windows-11-pro" },
      { label: "Chưa chắc phiên bản", description: "Cần đối chiếu hiện trạng trước khi chọn SKU.", recommendedProductSlug: "windows-ggwa" },
    ],
    comparison: {
      columns: ["Windows GGWA", "Windows 11 Pro"],
      rows: [
        { label: "Tình huống", values: ["Máy đang sử dụng cần rà soát", "Thiết bị mới hoặc nhu cầu đã xác định"] },
        { label: "Cơ sở cấp phép", values: ["Theo thiết bị và hồ sơ đủ điều kiện", "Theo thiết bị và SKU"] },
        { label: "Báo giá", values: ["Theo số máy và hiện trạng", "Theo SKU và số lượng"] },
      ],
    },
    faqs: [
      { question: "Nên chọn GGWA hay Windows 11 Pro?", answer: "Nếu là máy đang sử dụng cần rà soát hồ sơ, hãy bắt đầu với GGWA. Nếu là thiết bị mới và đã xác định SKU, Windows 11 Pro thường là hướng phù hợp hơn." },
    ],
  },
  {
    slug: "office",
    title: "Microsoft Office",
    eyebrow: "Office mua theo license",
    summary: "Office LTSC 2024 và Office Home & Business 2024 cho nhu cầu mua một lần.",
    description:
      "So sánh phiên bản Office ổn định cho môi trường quản trị với phiên bản mua một lần cho một thiết bị.",
    accent: "#ea580c",
    icon: "/product-icons/office-ltsc.svg",
    productSlugs: ["office-ltsc-2024", "office-home-business-2024"],
    needOptions: [
      { label: "Triển khai nhiều máy", description: "Cần quản trị tập trung và môi trường ổn định.", recommendedProductSlug: "office-ltsc-2024" },
      { label: "Một máy PC/Mac", description: "Cần Word, Excel, PowerPoint và Outlook cơ bản.", recommendedProductSlug: "office-home-business-2024" },
      { label: "Cần email và cloud", description: "Nên chuyển sang nhóm Microsoft 365.", recommendedProductSlug: "microsoft-365-business-standard" },
    ],
    comparison: {
      columns: ["Office LTSC 2024", "Office H&B 2024"],
      rows: [
        { label: "Đối tượng", values: ["Tổ chức có IT quản trị", "Doanh nghiệp nhỏ hoặc một người dùng"] },
        { label: "Mô hình", values: ["Volume licensing", "Mua một lần theo thiết bị"] },
        { label: "Cloud/email", values: ["Không gồm", "Không gồm"] },
      ],
    },
    faqs: [
      { question: "Office có phải Microsoft 365 không?", answer: "Không. Các sản phẩm Office 2024 trong nhóm này là phiên bản mua theo license; Microsoft 365 là subscription theo người dùng." },
    ],
  },
  {
    slug: "microsoft-365",
    title: "Microsoft 365",
    eyebrow: "Subscription theo người dùng",
    summary: "Business Standard cho email và cộng tác; Apps for business cho bộ ứng dụng Office.",
    description:
      "Chọn gói theo việc doanh nghiệp có cần email tên miền và dịch vụ cộng tác hay chỉ cần ứng dụng Office đa thiết bị.",
    accent: "#0f766e",
    icon: "/product-icons/microsoft-365.svg",
    productSlugs: ["microsoft-365-business-standard", "microsoft-365-apps-for-business"],
    needOptions: [
      { label: "Office + email", description: "Cần email doanh nghiệp và công cụ cộng tác.", recommendedProductSlug: "microsoft-365-business-standard" },
      { label: "Chỉ Office apps", description: "Đã có email và cần bộ ứng dụng Office.", recommendedProductSlug: "microsoft-365-apps-for-business" },
      { label: "Chưa có tenant", description: "Cần tư vấn cấu trúc người dùng và dịch vụ.", recommendedProductSlug: "microsoft-365-business-standard" },
    ],
    comparison: {
      columns: ["Business Standard", "Apps for business"],
      rows: [
        { label: "Office desktop", values: ["Có", "Có"] },
        { label: "Email doanh nghiệp", values: ["Có theo cấu hình gói", "Không"] },
        { label: "Đối tượng", values: ["Cần bộ giải pháp làm việc", "Chủ yếu cần Office apps"] },
      ],
    },
    faqs: [
      { question: "Microsoft 365 tính theo thiết bị hay người dùng?", answer: "Các gói business trong catalog này là subscription theo người dùng, với quyền cài đặt và dịch vụ tùy điều kiện từng gói." },
    ],
  },
  {
    slug: "adobe",
    title: "Adobe for teams",
    eyebrow: "Subscription theo seat",
    summary: "Creative Cloud cho team sáng tạo và Acrobat Pro cho quy trình PDF doanh nghiệp.",
    description:
      "Phân loại nhu cầu theo ứng dụng sáng tạo, quy trình PDF và số seat cần quản lý trong doanh nghiệp.",
    accent: "#dc2626",
    icon: "/product-icons/adobe-teams.svg",
    productSlugs: ["adobe-creative-cloud-teams", "acrobat-pro-teams"],
    needOptions: [
      { label: "Thiết kế và video", description: "Cần nhiều ứng dụng sáng tạo cho team.", recommendedProductSlug: "adobe-creative-cloud-teams" },
      { label: "PDF và tài liệu", description: "Cần sửa, chuyển đổi và cộng tác trên PDF.", recommendedProductSlug: "acrobat-pro-teams" },
      { label: "Chỉ một ứng dụng", description: "Cần đối chiếu single app và full suite.", recommendedProductSlug: "adobe-creative-cloud-teams" },
    ],
    comparison: {
      columns: ["Creative Cloud for teams", "Acrobat Pro for teams"],
      rows: [
        { label: "Mục tiêu", values: ["Thiết kế, ảnh, video", "PDF và tài liệu"] },
        { label: "Quản lý", values: ["Seat qua Admin Console", "Seat qua Admin Console"] },
        { label: "Báo giá", values: ["Theo app/suite và seat", "Theo seat"] },
      ],
    },
    faqs: [
      { question: "Adobe Teams có phải gói cá nhân không?", answer: "Không. Gói teams có cơ chế quản lý seat dành cho tổ chức; quyền lợi cụ thể phụ thuộc gói Adobe tại thời điểm mua." },
    ],
  },
];

export function findCategory(slug: string) {
  return productCategories.find((category) => category.slug === slug);
}

export function findProduct(slug: string) {
  return productFamilies.find((product) => product.slug === slug);
}

export function productsForCategory(slug: CategorySlug) {
  return productFamilies.filter(
    (product) => product.category === slug && !product.catalogOnly,
  );
}

export function isPriceCurrent(priceCheckedAt: string, now = new Date()) {
  const checked = new Date(`${priceCheckedAt}T00:00:00Z`).getTime();
  const ageInDays = (now.getTime() - checked) / 86400000;
  return ageInDays <= 30;
}

export function displayPrice(variant: SkuVariant, now = new Date()) {
  if (!isPriceCurrent(variant.priceCheckedAt, now)) {
    return "Liên hệ nhận giá mới";
  }

  if (variant.priceLabel) {
    return variant.priceLabel;
  }

  return variant.priceVnd
    ? `${new Intl.NumberFormat("vi-VN").format(variant.priceVnd)}đ`
    : "Liên hệ";
}
