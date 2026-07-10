import type { SourceDocument } from "./catalog";

type KnowledgeSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type KnowledgeArticle = {
  slug: string;
  title: string;
  description: string;
  answer: string;
  publishedAt: string;
  reviewedAt: string;
  category: string;
  relatedCategory: string;
  relatedProductSlugs: string[];
  audience: string[];
  readingMinutes: number;
  keyTakeaways: string[];
  sources: SourceDocument[];
  sections: KnowledgeSection[];
};

const publishedAt = "2026-07-10";

const sources = {
  ggwaTerms: {
    title: "Microsoft Product Terms: Windows Desktop Operating System",
    publisher: "Microsoft" as const,
    url: "https://www.microsoft.com/licensing/terms/en-US/productoffering/WindowsDesktopOperatingSystem/MCA",
  },
  ggwaFactSheet: {
    title: "Get Genuine Windows Agreement fact sheet",
    publisher: "Microsoft" as const,
    url: "https://download.microsoft.com/download/0/2/2/022806FC-E205-4DD8-8785-7C86C5009F14/GGWA_SMO_Non-USD_Fact_Sheet_To_Partner.pdf",
  },
  genuineWindows: {
    title: "About Genuine Windows",
    publisher: "Microsoft" as const,
    url: "https://support.microsoft.com/en-us/windows/activation/about-genuine-windows",
  },
  windowsPro: {
    title: "Windows 11 Pro for business",
    publisher: "Microsoft" as const,
    url: "https://www.microsoft.com/en-us/windows/business/windows-11-pro",
  },
  officeLtsc: {
    title: "Overview of Office LTSC 2024",
    publisher: "Microsoft" as const,
    url: "https://learn.microsoft.com/en-us/office/ltsc/2024/overview",
  },
  officeLtscUpdate: {
    title: "Update Office LTSC 2024",
    publisher: "Microsoft" as const,
    url: "https://learn.microsoft.com/en-us/office/ltsc/2024/update",
  },
  office2024Faq: {
    title: "Office 2024 and Office LTSC 2024 FAQ",
    publisher: "Microsoft" as const,
    url: "https://support.microsoft.com/en-us/office/lifecycle/office-2024-and-office-ltsc-2024-faq",
  },
  officeHomeBusiness: {
    title: "Office Home & Business 2024",
    publisher: "Microsoft" as const,
    url: "https://www.microsoft.com/en-us/microsoft-365/p/office-home-business-2024/cfq7ttc0pbm7",
  },
  officeInstall: {
    title: "Download, install, or reinstall Microsoft 365 or Office 2024",
    publisher: "Microsoft" as const,
    url: "https://support.microsoft.com/en-us/office/download-install-or-reinstall-microsoft-365-office-2024-or-office-2021-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658",
  },
  m365Choice: {
    title: "Which Microsoft 365 plan is right for your business?",
    publisher: "Microsoft" as const,
    url: "https://support.microsoft.com/en-us/office/which-microsoft-365-plan-is-right-for-your-business-4b140c05-d02d-4086-bebb-4638b1691305",
  },
  m365Standard: {
    title: "Microsoft 365 Business Standard",
    publisher: "Microsoft" as const,
    url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-business-standard",
  },
  m365Apps: {
    title: "Microsoft 365 Apps for business",
    publisher: "Microsoft" as const,
    url: "https://www.microsoft.com/en-us/microsoft-365/business/microsoft-365-apps-for-business",
  },
  m365AdminUsers: {
    title: "Add users and assign licenses in Microsoft 365",
    publisher: "Microsoft" as const,
    url: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/add-users?view=o365-worldwide",
  },
  m365AdminRoles: {
    title: "Assign admin roles in the Microsoft 365 admin center",
    publisher: "Microsoft" as const,
    url: "https://learn.microsoft.com/en-us/microsoft-365/admin/add-users/assign-admin-roles?view=o365-worldwide",
  },
  m365AppsLicensing: {
    title: "Microsoft 365 Apps licensing guidance",
    publisher: "Microsoft" as const,
    url: "https://www.microsoft.com/licensing/docs/documents/download/Microsoft_365_Apps_licensing_guidance.pdf",
  },
  adobeTeams: {
    title: "Compare Creative Cloud plans for teams",
    publisher: "Adobe" as const,
    url: "https://www.adobe.com/creativecloud/business/teams/plans.html",
  },
  adobeTeamsAdmin: {
    title: "Admin Console for Creative Cloud for teams",
    publisher: "Adobe" as const,
    url: "https://www.adobe.com/creativecloud/business/teams/for-admins.html",
  },
  adobeAssignTeams: {
    title: "Assign a license to a teams user",
    publisher: "Adobe" as const,
    url: "https://helpx.adobe.com/enterprise/using/assign-licenses-to-teams-users.html",
  },
  adobeTeamManagement: {
    title: "Team Management for Creative Cloud, Acrobat and Express",
    publisher: "Adobe" as const,
    url: "https://helpx.adobe.com/enterprise/using/creative-cloud-desktop-app-team-management.html",
  },
  adobeAcrobat: {
    title: "Adobe Acrobat Pro for teams",
    publisher: "Adobe" as const,
    url: "https://www.adobe.com/creativecloud/business/acrobat-pro.html",
  },
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "windows-ggwa-la-gi",
    title: "Windows GGWA là gì và phù hợp trường hợp nào?",
    description:
      "Hướng dẫn đọc Windows GGWA theo hiện trạng thiết bị, điều kiện sản phẩm và hồ sơ doanh nghiệp cần chuẩn bị.",
    answer:
      "Windows GGWA là hướng cấp phép Windows đầy đủ cho một số thiết bị hiện hữu cần có quyền sử dụng Windows hợp lệ. Đừng chọn theo tên sản phẩm hoặc giá trước: phải bắt đầu từ danh sách máy, tình trạng Windows hiện có và điều kiện chương trình áp dụng cho giao dịch.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Windows",
    relatedCategory: "windows",
    relatedProductSlugs: ["windows-ggwa", "windows-11-pro"],
    audience: ["IT quản trị thiết bị", "Mua hàng", "Kế toán cần đối chiếu hồ sơ"],
    readingMinutes: 7,
    keyTakeaways: [
      "GGWA không phải key bán lẻ dùng cho mọi trường hợp.",
      "Danh sách thiết bị và chứng từ hiện có là đầu vào quan trọng nhất.",
      "Điều khoản chương trình và khu vực cần được xác nhận trong báo giá.",
    ],
    sources: [sources.ggwaTerms, sources.ggwaFactSheet, sources.genuineWindows],
    sections: [
      {
        heading: "Bắt đầu từ hiện trạng thiết bị, không phải SKU",
        paragraphs: [
          "Câu hỏi đầu tiên không phải là “GGWA giá bao nhiêu?” mà là “những máy nào đang cần được rà soát?”. IT nên lập danh sách gồm tên máy, người dùng chính, phiên bản Windows đang chạy, ngày mua máy và chứng từ Windows đã có.",
          "Microsoft Product Terms hiện mô tả GGWA là full Windows desktop OS license cho các thiết bị cần quyền Windows hợp lệ. Điều này giải thích vì sao sản phẩm cần được xem xét theo thiết bị và hồ sơ, thay vì mua một mã rồi phân bổ tùy ý.",
        ],
        bullets: [
          "Số lượng máy đang vận hành và địa điểm sử dụng",
          "Thiết bị mới hay đã mua từ trước",
          "Phiên bản Windows và bằng chứng mua/được bàn giao hiện có",
          "Yêu cầu hợp đồng, hóa đơn VAT và đầu mối nhận bàn giao",
        ],
      },
      {
        heading: "Khi nào cần xem xét GGWA",
        paragraphs: [
          "GGWA thường là chủ đề cần bàn khi doanh nghiệp có máy đang sử dụng nhưng quyền Windows chưa rõ ràng hoặc hồ sơ cần được chuẩn hóa. Với máy mới đã có Windows phù hợp từ nhà sản xuất, hướng xử lý có thể khác; không nên mặc định mọi máy đều cần GGWA.",
          "Theo Product Terms cho chương trình Microsoft Customer Agreement đang hiển thị, GGWA không có yêu cầu Qualifying OS như Windows upgrade thông thường. Các điều kiện thương mại, chương trình và khu vực phải được xác nhận lại với đơn vị cung ứng trong từng giao dịch.",
        ],
      },
      {
        heading: "Ba lỗi dẫn đến chọn sai",
        paragraphs: ["Những lỗi dưới đây thường khiến báo giá đúng tên sản phẩm nhưng sai bối cảnh sử dụng."],
        bullets: [
          "Gộp máy mới và máy cũ vào cùng một yêu cầu mà không ghi hiện trạng.",
          "Chỉ gửi ảnh màn hình activation nhưng không có danh sách thiết bị và hồ sơ mua hàng.",
          "Xem GGWA như một key dùng chung hoặc chuyển tự do giữa các máy.",
        ],
      },
      {
        heading: "Cách làm việc hiệu quả với IT và kế toán",
        paragraphs: [
          "IT xác nhận thiết bị nào thuộc phạm vi rà soát; mua hàng chốt số lượng và thời điểm cần; kế toán nêu yêu cầu chứng từ ngay từ đầu. Một yêu cầu rõ giúp đơn vị báo giá phân biệt nhu cầu Windows cho máy mới với tình huống cần rà soát thiết bị hiện hữu.",
          "Khi nhận bàn giao, lưu cùng một hồ sơ gồm SKU, số lượng, phạm vi thiết bị, báo giá/đơn hàng, hóa đơn và hướng dẫn hoặc xác nhận liên quan. Đây là dữ liệu cần cho người tiếp quản sau này, không chỉ cho lần kích hoạt đầu tiên.",
        ],
      },
    ],
  },
  {
    slug: "windows-oem-dsp-esd-ggwa-khac-nhau",
    title: "Windows OEM, DSP/OEI, ESD và GGWA: đọc SKU trước khi mua",
    description:
      "Cách phân biệt các tên Windows thường gặp theo thiết bị áp dụng, phương thức bàn giao và các điểm phải xác nhận trước khi duyệt mua.",
    answer:
      "OEM/DSP/OEI, ESD và GGWA không phải các tên thay thế cho nhau. Chúng có thể mô tả nguồn gắn với thiết bị, hình thức bàn giao hoặc một tình huống cấp phép riêng; vì vậy phải đối chiếu SKU đầy đủ, ngôn ngữ, thiết bị áp dụng và chứng từ giao dịch.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Windows",
    relatedCategory: "windows",
    relatedProductSlugs: ["windows-11-pro", "windows-ggwa"],
    audience: ["IT mua thiết bị", "Procurement", "Người duyệt báo giá Windows"],
    readingMinutes: 6,
    keyTakeaways: [
      "Tên Windows 11 Pro chưa đủ để xác định đúng phương án mua.",
      "Part number, ngôn ngữ và phương thức bàn giao cần nằm trên báo giá.",
      "Không suy luận quyền chuyển máy từ tên “online” hoặc “download”.",
    ],
    sources: [sources.windowsPro, sources.ggwaTerms, sources.genuineWindows],
    sections: [
      {
        heading: "Bốn nhãn này nói lên điều gì",
        paragraphs: [
          "OEM/DSP/OEI thường xuất hiện trong tên SKU gắn với cách sản phẩm được phân phối hoặc bàn giao. ESD/online download nhấn mạnh phương thức nhận phần mềm hoặc mã. GGWA là một hướng cấp phép có mục đích riêng cho thiết bị hiện hữu cần được rà soát.",
          "Các nhãn đó không tự nói hết quyền sử dụng. Cùng một dòng Windows 11 Pro có thể khác ngôn ngữ, kênh, hình thức bàn giao và điều kiện sản phẩm. Vì vậy website chỉ nên là điểm bắt đầu để hỏi đúng, không phải nơi thay thế việc kiểm tra SKU.",
        ],
      },
      {
        heading: "Bảng kiểm trước khi duyệt báo giá",
        paragraphs: ["Yêu cầu báo giá nên có đủ dữ liệu để IT, mua hàng và kế toán đọc cùng một cách."],
        bullets: [
          "Tên thương mại đầy đủ và part number, nếu có",
          "Phiên bản: Home hay Pro; 32/64-bit nếu SKU nêu rõ",
          "Ngôn ngữ và hình thức bàn giao: DSP/OEI, ESD, medialess hoặc khác",
          "Thiết bị áp dụng: máy mới, máy hiện hữu hoặc theo hồ sơ cần rà soát",
          "Đơn vị tính, số lượng, giá tham khảo, ngày kiểm tra giá và chứng từ cần bàn giao",
        ],
      },
      {
        heading: "Đừng dùng giá thấp để thay cho điều kiện sản phẩm",
        paragraphs: [
          "Hai dòng giá khác nhau cho Windows 11 Pro có thể phản ánh khác biệt về SKU hoặc điều kiện cung ứng, không đơn giản là cùng một quyền sử dụng với giá khác nhau. Nếu báo giá thiếu part number hoặc mô tả, hãy yêu cầu làm rõ trước khi so sánh.",
          "Microsoft cũng khuyến nghị mua Windows từ Microsoft, PC có Windows cài sẵn hoặc nguồn đáng tin cậy. Với doanh nghiệp, “đáng tin cậy” còn bao gồm khả năng cung cấp hồ sơ giao dịch và giải thích rõ sản phẩm đang được chào bán.",
        ],
      },
      {
        heading: "Quy trình chọn Windows 11 Pro thực dụng",
        paragraphs: [
          "Bước một, tách máy mới khỏi máy hiện hữu. Bước hai, chốt phiên bản Home hay Pro theo nhu cầu quản trị. Bước ba, chọn SKU sau khi xác minh ngôn ngữ, giao hàng và chứng từ. Bước cuối, lưu dữ liệu SKU vào sổ theo dõi license ngay khi nhận bàn giao.",
          "Nếu chưa tách được tình trạng máy, hãy coi đó là rủi ro đầu vào thay vì vội chọn một SKU. Bài Windows GGWA sẽ giúp chuẩn bị phần rà soát thiết bị hiện hữu.",
        ],
      },
    ],
  },
  {
    slug: "windows-11-pro-cho-doanh-nghiep",
    title: "Chọn Windows 11 Pro cho doanh nghiệp: checklist máy mới và máy hiện hữu",
    description:
      "Khung quyết định ngắn để tách nhu cầu Windows 11 Pro cho máy mới khỏi thiết bị đang vận hành và chuẩn bị thông tin trước báo giá.",
    answer:
      "Windows 11 Pro nên được chọn sau khi phân loại máy mới, máy đang sử dụng và nhu cầu quản trị thực tế. Với doanh nghiệp, quyết định tốt không chỉ là chọn Pro hay Home mà còn là xác định SKU, cách bàn giao và hồ sơ lưu theo từng thiết bị.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Windows",
    relatedCategory: "windows",
    relatedProductSlugs: ["windows-11-pro", "windows-ggwa"],
    audience: ["IT procurement", "Doanh nghiệp thay mới máy tính", "Người quản lý tài sản IT"],
    readingMinutes: 5,
    keyTakeaways: [
      "Máy mới và máy hiện hữu phải đi qua hai nhánh đánh giá khác nhau.",
      "Windows Pro nên được gắn vào hồ sơ tài sản của từng máy.",
      "Thông tin platform, ngôn ngữ và cách bàn giao cần được chốt trước khi mua.",
    ],
    sources: [sources.windowsPro, sources.genuineWindows, sources.ggwaTerms],
    sections: [
      {
        heading: "Nhánh 1: máy mới",
        paragraphs: [
          "Với máy mới, hãy xác nhận ngay từ PO hoặc báo giá phần cứng: máy có hệ điều hành nào, phiên bản nào, và Windows đã được nhà sản xuất cài sẵn hay chưa. Đây là dữ liệu quan trọng hơn việc chỉ thấy nhãn Windows trên thùng máy.",
          "Nếu cần Windows Pro cho môi trường làm việc, IT nên ghi rõ yêu cầu đó trong specification thiết bị. Sau khi nhận máy, đối chiếu serial/asset tag với thông tin Windows đã được bàn giao và lưu trong hệ thống quản lý tài sản.",
        ],
      },
      {
        heading: "Nhánh 2: máy đang sử dụng",
        paragraphs: [
          "Với máy đang vận hành, không nên xử lý như mua mới. Hãy rà soát phiên bản đang chạy, lịch sử thiết bị, bằng chứng Windows có sẵn và số lượng máy thuộc phạm vi cần giải quyết. Nếu hồ sơ chưa rõ, hãy bắt đầu bằng bài GGWA thay vì đặt vội SKU Pro.",
          "Lập bảng gồm asset tag, tên người dùng, phiên bản Windows, nguồn máy và trạng thái hồ sơ. Bảng này giúp loại trừ máy không thuộc phạm vi hoặc đã có quyền sử dụng phù hợp.",
        ],
      },
      {
        heading: "Thông tin phải có trên yêu cầu mua",
        paragraphs: ["Một yêu cầu Windows 11 Pro tốt cần trả lời được các câu hỏi sau."],
        bullets: [
          "Mua cho máy mới hay máy hiện hữu?",
          "Tổng số thiết bị và khoảng thời gian cần bàn giao",
          "Phiên bản, ngôn ngữ, cách giao hàng và part number nếu đã xác định",
          "Đầu mối IT tiếp nhận, điều kiện hóa đơn/hợp đồng và nơi lưu hồ sơ",
        ],
      },
    ],
  },
  {
    slug: "office-ltsc-2024-va-microsoft-365",
    title: "Office LTSC 2024 và Microsoft 365: chọn theo mô hình vận hành",
    description:
      "So sánh Office LTSC 2024 với Microsoft 365 theo cập nhật, cloud, cách cấp phép, triển khai và nhu cầu quản trị IT.",
    answer:
      "Office LTSC 2024 phù hợp môi trường cần ứng dụng Office ổn định và không nhận tính năng mới liên tục. Microsoft 365 phù hợp khi tổ chức vận hành theo subscription người dùng, cần ứng dụng luôn cập nhật và có thể cần email, cloud hoặc cộng tác.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Office",
    relatedCategory: "office",
    relatedProductSlugs: ["office-ltsc-2024", "microsoft-365-business-standard"],
    audience: ["IT manager", "Quản trị Office", "Người quyết định mô hình mua"],
    readingMinutes: 8,
    keyTakeaways: [
      "LTSC là lựa chọn cho môi trường hạn chế feature update, không phải Microsoft 365 giá rẻ hơn.",
      "LTSC vẫn cần quy trình cập nhật bảo mật và chất lượng.",
      "Nhu cầu email, cloud và cộng tác nên đưa doanh nghiệp sang nhánh Microsoft 365.",
    ],
    sources: [sources.officeLtsc, sources.officeLtscUpdate, sources.m365Choice],
    sections: [
      {
        heading: "Khác biệt cốt lõi: fixed release và subscription",
        paragraphs: [
          "Microsoft mô tả Office LTSC 2024 dành cho môi trường bị hạn chế hoặc quản lý chặt việc nhận feature update. Sản phẩm nhận cập nhật bảo mật và chất lượng, nhưng không nhận tính năng mới liên tục sau khi phát hành.",
          "Microsoft 365 Apps vận hành theo subscription người dùng và được cập nhật thường xuyên. Các gói business có thể đi kèm email, lưu trữ và cộng tác; cần xem đúng cấu hình gói tại thời điểm mua thay vì suy luận từ tên Microsoft 365.",
        ],
      },
      {
        heading: "Chọn LTSC khi nào",
        paragraphs: [
          "LTSC đáng xem xét khi IT cần một phiên bản Office ổn định cho môi trường quản trị tập trung, có quy trình triển khai nội bộ và không cần chức năng cloud mới liên tục. Đây thường là quyết định vận hành, không chỉ là quyết định chi phí.",
          "Trước khi chọn, kiểm tra hệ điều hành, ứng dụng nội bộ/add-in, 32-bit hay 64-bit, cách kích hoạt và kênh cập nhật. Microsoft nêu Office LTSC 2024 có thể được quản lý bằng các công cụ triển khai hiện hữu, nhưng dự án vẫn cần kiểm thử tương thích trước khi rollout hàng loạt.",
        ],
      },
      {
        heading: "Chọn Microsoft 365 khi nào",
        paragraphs: [
          "Nếu người dùng cần Office trên nhiều thiết bị, làm việc với email doanh nghiệp, lưu trữ cloud hoặc cộng tác, hãy đánh giá Microsoft 365 trước. Mô hình này đòi hỏi doanh nghiệp quản lý user, license, admin role và ngày gia hạn thay vì chỉ bàn giao một sản phẩm trên máy.",
          "Business Standard và Apps for business đều có ứng dụng Office, nhưng chỉ Business Standard là nhánh cần xem xét khi muốn email doanh nghiệp trong cùng gói. Bài so sánh hai gói giải thích chi tiết hơn.",
        ],
      },
      {
        heading: "Bốn câu hỏi chốt trước khi mua",
        paragraphs: ["Trả lời bốn câu này sẽ loại bỏ phần lớn lựa chọn sai giữa LTSC và Microsoft 365."],
        bullets: [
          "Có cần email tên miền, OneDrive hoặc cộng tác cloud trong cùng giải pháp không?",
          "Môi trường có cho phép feature update thường xuyên không?",
          "Doanh nghiệp quản lý license theo thiết bị hay theo người dùng?",
          "IT đã có kế hoạch triển khai, kích hoạt và cập nhật sau bàn giao chưa?",
        ],
      },
    ],
  },
  {
    slug: "office-home-business-2024-cho-doanh-nghiep",
    title: "Office Home & Business 2024: khi nào phù hợp doanh nghiệp nhỏ?",
    description:
      "Cách đánh giá Office Home & Business 2024 theo mô hình một máy, ứng dụng cần dùng, cài đặt và giới hạn so với Microsoft 365.",
    answer:
      "Office Home & Business 2024 phù hợp khi một người dùng làm việc chủ yếu trên một PC hoặc Mac, cần Word, Excel, PowerPoint, Outlook và không cần dịch vụ cloud hay email doanh nghiệp trong cùng gói. Đây là sản phẩm mua một lần, không phải Microsoft 365 subscription.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Office",
    relatedCategory: "office",
    relatedProductSlugs: ["office-home-business-2024", "office-ltsc-2024"],
    audience: ["Doanh nghiệp nhỏ", "Người mua Office cho một máy", "Kế toán và chủ doanh nghiệp"],
    readingMinutes: 6,
    keyTakeaways: [
      "Sản phẩm là one-time purchase cho một PC hoặc Mac theo điều khoản Microsoft.",
      "Có Outlook desktop, nhưng không bao gồm dịch vụ Microsoft 365 cloud.",
      "Không nên chọn khi một người cần linh hoạt dùng nhiều thiết bị hoặc team cần quản trị tập trung.",
    ],
    sources: [sources.officeHomeBusiness, sources.office2024Faq, sources.officeInstall],
    sections: [
      {
        heading: "Những gì Office Home & Business 2024 giải quyết",
        paragraphs: [
          "Microsoft mô tả Office Home & Business 2024 là phiên bản mua một lần cho một PC hoặc Mac, gồm các bản desktop cổ điển của Word, Excel, PowerPoint, Outlook và OneNote. Nó phù hợp cho nhu cầu làm việc cố định tại một máy, không đòi hỏi tenant hoặc subscription theo user.",
          "Điểm dễ nhầm là Outlook desktop không đồng nghĩa gói có email doanh nghiệp Exchange. Outlook là ứng dụng email; hạ tầng mailbox doanh nghiệp là một nhu cầu riêng cần được xác định trong giải pháp Microsoft 365 hoặc hệ thống email hiện có.",
        ],
      },
      {
        heading: "Chọn khi nào, không chọn khi nào",
        paragraphs: [
          "Nên chọn khi doanh nghiệp nhỏ có một hoặc vài người dùng ổn định, mỗi người làm việc chủ yếu trên một máy và chỉ cần bộ Office desktop. Đây cũng là trường hợp cần tránh phát sinh quy trình quản lý subscription khi không thật sự cần cloud/cộng tác.",
          "Không nên chọn làm mặc định cho team di động, nhân sự làm việc trên nhiều thiết bị, doanh nghiệp cần email/cloud, hoặc môi trường triển khai tập trung cho nhiều máy. Những nhu cầu này nên được so sánh với Microsoft 365 hoặc Office LTSC theo bối cảnh cụ thể.",
        ],
      },
      {
        heading: "Checklist trước khi đặt hàng",
        paragraphs: ["Tên hàng có thể khác theo ngôn ngữ và phương thức giao hàng, nên chốt các mục sau trong báo giá."],
        bullets: [
          "PC hay Mac; phiên bản hệ điều hành của máy",
          "Ngôn ngữ cần dùng và part number nếu có",
          "Medialess/ESD hoặc phương thức bàn giao được chào",
          "Tài khoản dùng để kích hoạt hoặc quy trình IT tiếp nhận",
          "Nơi lưu hóa đơn, thông tin SKU và xác nhận bàn giao",
        ],
      },
    ],
  },
  {
    slug: "office-ltsc-2024-trien-khai-cap-nhat",
    title: "Triển khai và cập nhật Office LTSC 2024: những việc IT cần chốt",
    description:
      "Checklist triển khai Office LTSC 2024 gồm kiểm thử tương thích, kích hoạt, update channel và kế hoạch cập nhật bảo mật sau bàn giao.",
    answer:
      "Office LTSC 2024 không nhận tính năng mới liên tục, nhưng vẫn cần được cập nhật bảo mật và chất lượng. IT nên chốt trước cách triển khai, kiểm thử add-in, kích hoạt và nguồn update thay vì coi đây là phiên bản “cài xong là xong”.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Office",
    relatedCategory: "office",
    relatedProductSlugs: ["office-ltsc-2024", "office-home-business-2024"],
    audience: ["IT deployment", "Quản trị endpoint", "Doanh nghiệp dùng Office on-premises"],
    readingMinutes: 7,
    keyTakeaways: [
      "LTSC 2024 cần cập nhật bảo mật/chất lượng định kỳ.",
      "Kiểm thử add-in và kế hoạch gỡ Office cũ là phần của rollout.",
      "Quản lý update source cần phù hợp chính sách mạng nội bộ.",
    ],
    sources: [sources.officeLtsc, sources.officeLtscUpdate],
    sections: [
      {
        heading: "Trước rollout: khảo sát tương thích",
        paragraphs: [
          "Đừng bắt đầu từ số license; bắt đầu từ nhóm pilot. Kiểm tra Windows version, macro, add-in, template nội bộ, tích hợp Outlook và phần mềm nghiệp vụ hay dùng. Lưu kết quả kiểm thử để biết máy nào cần ngoại lệ trước khi mở rộng triển khai.",
          "Microsoft khuyến nghị gỡ các phiên bản Office cũ trước khi triển khai LTSC 2024. Điều này cần được lập kế hoạch cùng backup template, add-in và phương án quay lui để tránh gián đoạn công việc.",
        ],
      },
      {
        heading: "Kích hoạt và cập nhật là hai việc riêng",
        paragraphs: [
          "Kích hoạt xác nhận quyền dùng sản phẩm theo phương án volume licensing; cập nhật bảo mật và chất lượng là công việc vận hành sau đó. Theo Microsoft Learn, các bản update LTSC 2024 mang tính cumulative và thường được phát hành định kỳ hàng tháng.",
          "Office CDN là nguồn update mặc định khi chính sách mạng cho phép. Nếu dùng shared folder hoặc công cụ quản lý endpoint, IT cần chịu thêm trách nhiệm đồng bộ build, dung lượng và thời điểm phát hành cho máy trạm.",
        ],
      },
      {
        heading: "Checklist vận hành sau bàn giao",
        paragraphs: ["Đưa các mục dưới đây vào runbook của IT để tránh mất dấu phiên bản và chính sách update."],
        bullets: [
          "Danh sách máy đã cài và trạng thái kích hoạt",
          "Nhóm pilot, ngày rollout và kết quả kiểm thử add-in",
          "Update source, người phụ trách và lịch kiểm tra build mới",
          "SKU/License ID, hồ sơ mua hàng và đầu mối hỗ trợ",
        ],
      },
    ],
  },
  {
    slug: "microsoft-365-business-standard-va-apps-for-business",
    title: "Microsoft 365 Business Standard và Apps for business: chọn theo dịch vụ cần dùng",
    description:
      "So sánh Business Standard với Apps for business theo email, Office apps, cloud, số người dùng và cách bàn giao cho IT.",
    answer:
      "Business Standard phù hợp khi người dùng cần Office apps cùng email doanh nghiệp và dịch vụ cộng tác theo gói. Apps for business phù hợp khi tổ chức chủ yếu cần Office apps, đã có giải pháp email riêng và không muốn trả cho dịch vụ không dùng.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Microsoft 365",
    relatedCategory: "microsoft-365",
    relatedProductSlugs: ["microsoft-365-business-standard", "microsoft-365-apps-for-business"],
    audience: ["IT manager", "Chủ doanh nghiệp", "Người mua Microsoft 365"],
    readingMinutes: 7,
    keyTakeaways: [
      "Cả hai gói đều là subscription theo người dùng, không phải license theo máy.",
      "Điểm rẽ chính là email doanh nghiệp và dịch vụ cộng tác trong cùng gói.",
      "Tình trạng tenant, domain và admin cần được chốt trước bàn giao.",
    ],
    sources: [sources.m365Choice, sources.m365Standard, sources.m365Apps],
    sections: [
      {
        heading: "So sánh theo nhu cầu làm việc",
        paragraphs: [
          "Business Standard là nhánh dành cho doanh nghiệp muốn kết hợp Office apps với email doanh nghiệp và các dịch vụ cộng tác theo cấu hình gói. Microsoft Support hiện định vị đây là lựa chọn phổ biến cho nhiều doanh nghiệp nhỏ cần một bộ công cụ làm việc đầy đủ hơn.",
          "Apps for business tập trung vào Office apps và cloud storage theo quyền lợi gói, phù hợp khi email đã được giải quyết ở hệ thống khác. Đừng mua Business Standard chỉ vì tên “Standard” nếu phần email/cộng tác không được dùng.",
        ],
      },
      {
        heading: "Chọn theo ba tình huống phổ biến",
        paragraphs: ["Ba tình huống dưới đây giúp rút ngắn phần lớn cuộc trao đổi trước báo giá."],
        bullets: [
          "Cần email tên miền mới hoặc muốn đưa email và Office về một tenant: bắt đầu với Business Standard.",
          "Đã có email doanh nghiệp ổn định, chỉ cần Word/Excel/PowerPoint/Outlook apps cho nhân sự: đánh giá Apps for business.",
          "Cần một Office cố định cho thiết bị, không muốn subscription: quay lại so sánh Office LTSC hoặc Home & Business.",
        ],
      },
      {
        heading: "Quyền dùng theo người dùng cần được quản lý ra sao",
        paragraphs: [
          "Microsoft 365 business yêu cầu user account và license assignment trước khi người dùng dùng dịch vụ. Với Business Standard và Apps for business, Microsoft hiện nêu khả năng cài apps cho một user trên nhiều thiết bị trong giới hạn của gói; đó không phải cơ chế chia sẻ một tài khoản cho nhiều người.",
          "Tạo sổ theo dõi gồm user, department, gói được cấp, ngày bắt đầu, admin owner và ngày rà soát. Đây là dữ liệu cần có khi nhân sự thay đổi hoặc doanh nghiệp gia hạn subscription.",
        ],
      },
      {
        heading: "Thông tin cần có trong báo giá",
        paragraphs: ["Một báo giá Microsoft 365 hữu ích phải giúp IT bắt đầu triển khai, không chỉ thể hiện đơn giá."],
        bullets: [
          "Tên gói, số user, chu kỳ subscription và ngày dự kiến bắt đầu",
          "Tenant đã có hay cần tạo mới; domain email có sẵn hay chưa",
          "Người nhận quyền admin và người thực hiện license assignment",
          "Yêu cầu hóa đơn, hợp đồng và danh mục bàn giao",
        ],
      },
    ],
  },
  {
    slug: "trien-khai-microsoft-365-cho-doanh-nghiep",
    title: "Triển khai Microsoft 365 cho doanh nghiệp: checklist trước ngày cấp license",
    description:
      "Checklist tạo user, phân vai trò admin, cấp license và bàn giao để Microsoft 365 có thể dùng ngay sau khi mua.",
    answer:
      "Một dự án Microsoft 365 nên được xem là onboarding người dùng và dịch vụ, không phải chỉ mua seat. Trước ngày cấp license, doanh nghiệp cần chốt tenant/domain, danh sách user, vai trò quản trị, phương án phân quyền và nơi lưu hồ sơ bàn giao.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Microsoft 365",
    relatedCategory: "microsoft-365",
    relatedProductSlugs: ["microsoft-365-business-standard", "microsoft-365-apps-for-business"],
    audience: ["Microsoft 365 admin", "IT onboarding", "Procurement"],
    readingMinutes: 8,
    keyTakeaways: [
      "User account và license assignment là hai bước riêng.",
      "Không dùng Global Administrator như vai trò vận hành mặc định.",
      "Danh sách user và người sở hữu tenant cần được chốt trước ngày bàn giao.",
    ],
    sources: [sources.m365AdminUsers, sources.m365AdminRoles, sources.m365AppsLicensing],
    sections: [
      {
        heading: "Thiết lập đầu vào trước khi cấp seat",
        paragraphs: [
          "Chuẩn bị danh sách user gồm họ tên, username, domain, phòng ban, gói cần cấp và người phê duyệt. Microsoft Learn nêu user account phải tồn tại trước khi người dùng có thể đăng nhập và dùng Microsoft 365 business; license được gán vào user đó trong admin center.",
          "Nếu có domain email doanh nghiệp, xác định rõ ai chịu trách nhiệm DNS và xác minh domain. Nếu chưa có tenant, chốt người sở hữu tenant, tài khoản khẩn cấp và cách lưu thông tin quản trị trước khi bắt đầu cấu hình.",
        ],
      },
      {
        heading: "Phân vai trò admin theo nguyên tắc tối thiểu",
        paragraphs: [
          "Microsoft khuyến nghị dùng vai trò có quyền thấp nhất đủ để hoàn thành công việc. Global Administrator có quyền rất rộng, nên cần giới hạn số người giữ vai trò này và không dùng làm tài khoản vận hành hằng ngày.",
          "Đối với công việc cấp hoặc thu hồi license, cân nhắc License Administrator thay vì cấp Global Administrator. Lưu danh sách admin role, chủ sở hữu và phương án xử lý khi người phụ trách nghỉ việc.",
        ],
      },
      {
        heading: "Ngày bàn giao: xác nhận bốn lớp",
        paragraphs: ["Trước khi kết thúc onboarding, kiểm tra cả bốn lớp dưới đây với đại diện IT."],
        bullets: [
          "Tenant và domain: user đăng nhập đúng domain, quyền quản trị được xác nhận.",
          "License: mỗi user trong danh sách được gán đúng gói và service cần dùng.",
          "Ứng dụng: người dùng biết tài khoản nào để cài/đăng nhập Office apps.",
          "Hồ sơ: báo giá, hóa đơn, số seat, ngày bắt đầu/gia hạn và người phụ trách được lưu cùng nhau.",
        ],
      },
      {
        heading: "Sau 7 ngày: rà soát vận hành",
        paragraphs: [
          "Không nên chờ đến ngày gia hạn mới xem lại. Sau tuần đầu, kiểm tra user nào chưa đăng nhập, email nào chưa hoạt động, seat nào chưa được gán và các quyền admin có đang quá rộng hay không.",
          "Tạo nhịp rà soát hàng tháng hoặc theo thay đổi nhân sự. Điều này giúp doanh nghiệp biết chính xác mình đang cần bao nhiêu seat trước kỳ gia hạn tiếp theo.",
        ],
      },
    ],
  },
  {
    slug: "quan-ly-license-microsoft-365-theo-nguoi-dung",
    title: "Quản lý license Microsoft 365 theo người dùng: vận hành sau khi mua",
    description:
      "Hướng dẫn thiết lập sổ theo dõi license, cấp/thu hồi user và phân quyền admin tối thiểu cho Microsoft 365.",
    answer:
      "Microsoft 365 là subscription theo người dùng, vì vậy phần quan trọng sau mua là gán đúng license cho đúng user, giữ ít quyền admin nhất cần thiết và rà soát seat theo vòng đời nhân sự. Một bảng theo dõi đơn giản thường hiệu quả hơn lưu rải rác trong email.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Microsoft 365",
    relatedCategory: "microsoft-365",
    relatedProductSlugs: ["microsoft-365-business-standard", "microsoft-365-apps-for-business"],
    audience: ["M365 admin", "IT operations", "HR/IT offboarding"],
    readingMinutes: 7,
    keyTakeaways: [
      "Mỗi user truy cập dịch vụ cần account và license phù hợp.",
      "License assignment nên gắn với onboarding/offboarding của nhân sự.",
      "Admin role cần theo nhu cầu công việc, không theo chức danh chung chung.",
    ],
    sources: [sources.m365AdminUsers, sources.m365AdminRoles, sources.m365AppsLicensing],
    sections: [
      {
        heading: "Thiết kế một license register tối thiểu",
        paragraphs: [
          "Bảng theo dõi nên có email user, tên gói, ngày cấp, manager, department, trạng thái active/inactive và ghi chú ngoại lệ. Thông tin này cần khớp với danh sách trong Microsoft 365 admin center, không phải một bảng tài chính tách rời.",
          "Bổ sung owner cho từng subscription, ngày gia hạn và người chịu trách nhiệm phê duyệt seat mới. Khi có câu hỏi “ai đang dùng seat này?”, đội ngũ phải trả lời được từ register trong vài phút.",
        ],
      },
      {
        heading: "Onboarding và offboarding không được tách khỏi licensing",
        paragraphs: [
          "Trong onboarding, tạo user, gán đúng license và kiểm tra người dùng có thể truy cập dịch vụ cần thiết. Microsoft Learn hướng dẫn có thể cấp license từ Active users hoặc Licenses page; vận hành hiệu quả nên biến bước đó thành checklist nội bộ.",
          "Khi nhân sự rời đi hoặc chuyển vai trò, đánh giá account, mailbox, dữ liệu và license theo chính sách nội bộ trước khi thu hồi. Đừng chỉ nhìn seat trống; phải bảo đảm công việc bàn giao và dữ liệu đã được xử lý đúng quy trình.",
        ],
      },
      {
        heading: "Phân vai trò admin an toàn hơn",
        paragraphs: [
          "Tách người quản lý license khỏi người quản lý toàn bộ tenant khi có thể. Microsoft gọi License Administrator là vai trò có thể cấp/thu hồi license và chỉnh usage location; đây là ví dụ phù hợp cho công việc license thay vì lạm dụng Global Administrator.",
          "Định kỳ xem lại danh sách admin. Mỗi admin nên có owner, lý do cấp quyền và ngày rà soát tiếp theo; đặc biệt với các tài khoản khẩn cấp hoặc admin cũ.",
        ],
      },
    ],
  },
  {
    slug: "adobe-individual-va-adobe-teams",
    title: "Adobe Individual và Adobe Teams: khác nhau ở chỗ quản trị",
    description:
      "Phân biệt Adobe cho cá nhân và Adobe Teams theo quản lý seat, người dùng, tài sản, thay đổi nhân sự và quy trình bàn giao.",
    answer:
      "Adobe Teams phù hợp khi doanh nghiệp cần quản lý user và seat tập trung, có admin chịu trách nhiệm cấp/thu hồi quyền khi nhân sự thay đổi. Adobe Individual phù hợp nhu cầu cá nhân; nó không thay thế mô hình quản trị team trong doanh nghiệp.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Adobe",
    relatedCategory: "adobe",
    relatedProductSlugs: ["adobe-creative-cloud-teams", "acrobat-pro-teams"],
    audience: ["Creative ops", "IT admin", "Marketing/Design lead"],
    readingMinutes: 7,
    keyTakeaways: [
      "Teams tạo giá trị ở lớp quản trị seat, không chỉ ở ứng dụng Adobe.",
      "Email được gán seat và admin owner cần được lưu rõ.",
      "Offboarding phải bao gồm thu hồi/quy hoạch lại access và tài sản theo chính sách nội bộ.",
    ],
    sources: [sources.adobeTeams, sources.adobeTeamsAdmin, sources.adobeAssignTeams],
    sections: [
      {
        heading: "Khác biệt không nằm ở logo gói",
        paragraphs: [
          "Với Teams, Adobe cung cấp Admin Console để tổ chức quản lý license, user, storage và một số thao tác hỗ trợ theo plan. Điểm quan trọng với doanh nghiệp là khả năng biết ai đang có quyền dùng ứng dụng nào, thay vì để mỗi cá nhân tự nắm một subscription tách rời.",
          "Gói Individual phù hợp người dùng độc lập. Khi team có tuyển mới, chuyển vai trò hoặc cần thay thế người phụ trách, việc thiếu quản trị tập trung sẽ trở thành rủi ro vận hành hơn là vấn đề mua thêm một seat.",
        ],
      },
      {
        heading: "Khi Teams đáng để ưu tiên",
        paragraphs: [
          "Ưu tiên Teams khi tổ chức có nhiều hơn một người dùng, cần quản lý ai dùng ứng dụng nào, có yêu cầu phòng ban/manager phê duyệt hoặc cần chuẩn hóa quyền truy cập lúc nhân sự thay đổi. Nó cũng phù hợp khi bộ phận vận hành muốn theo dõi seat đang dùng và seat chưa gán.",
          "Không cần mua full suite một cách mặc định. Adobe có các lựa chọn single app và nhiều plan khác nhau; bắt đầu từ danh sách công việc và ứng dụng bắt buộc của từng vai trò.",
        ],
      },
      {
        heading: "Thông tin nên chốt trong báo giá Adobe",
        paragraphs: ["Một yêu cầu rõ giúp tránh mua nhầm suite hoặc mua dư seat."],
        bullets: [
          "Ứng dụng cụ thể hoặc nhu cầu: thiết kế ảnh, layout, video, PDF, ký duyệt",
          "Số seat ban đầu, phòng ban và email người nhận seat",
          "Team mới hay gia hạn; ngày cần có quyền truy cập",
          "Admin owner, quy trình thu hồi seat và yêu cầu hóa đơn/hợp đồng",
        ],
      },
      {
        heading: "Điều cần bàn giao sau mua",
        paragraphs: [
          "Bàn giao không nên dừng ở email thông báo. IT hoặc creative ops cần có danh sách admin, danh sách seat, plan đang dùng, ngày renewal và quy trình thêm/thu hồi user. Adobe hướng dẫn admin có thể quản lý user và license trong Admin Console hoặc, với team nhỏ theo điều kiện plan, từ ứng dụng Creative Cloud.",
          "Đối với dữ liệu/tài sản, chính sách nội bộ mới là phần quyết định: project file, library và thư mục làm việc phải có nơi lưu thuộc doanh nghiệp, không chỉ nằm trong tài khoản cá nhân của nhân viên.",
        ],
      },
    ],
  },
  {
    slug: "quan-ly-seat-adobe-teams",
    title: "Quản lý seat Adobe Teams: onboarding, thay đổi nhân sự và offboarding",
    description:
      "Checklist vận hành Adobe Teams từ thêm user, gán seat, sửa email sai, thu hồi quyền đến rà soát seat trước kỳ gia hạn.",
    answer:
      "Quản lý Adobe Teams tốt là quản lý vòng đời user: đúng email, đúng ứng dụng, đúng vai trò admin và có bước thu hồi khi người dùng không còn cần access. Adobe hướng dẫn admin có thể thêm user, gán/thu hồi license và theo dõi seat qua Admin Console.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Adobe",
    relatedCategory: "adobe",
    relatedProductSlugs: ["adobe-creative-cloud-teams", "acrobat-pro-teams"],
    audience: ["Adobe admin", "Creative operations", "IT offboarding"],
    readingMinutes: 7,
    keyTakeaways: [
      "Email sai là lỗi vận hành cần xử lý ngay trước khi user bắt đầu dùng app.",
      "Seat phải gắn với owner và role, không chỉ là số lượng tổng.",
      "Rà soát unused seat trước renewal để ra quyết định dựa trên dữ liệu.",
    ],
    sources: [sources.adobeAssignTeams, sources.adobeTeamManagement, sources.adobeTeamsAdmin],
    sections: [
      {
        heading: "Onboarding một seat mới",
        paragraphs: [
          "Bắt đầu bằng email chính xác của người dùng, ứng dụng cần cấp và manager phê duyệt. Adobe hướng dẫn admin vào Users trong Admin Console để thêm người dùng và gán sản phẩm; nếu gán nhầm email, thu hồi rồi gán lại cho đúng user thay vì cố xử lý bằng tài khoản dùng chung.",
          "Ghi nhận seat trong register ngay khi gán: email, app/plan, department, ngày cấp, admin thao tác và mục đích sử dụng. Đây là nền tảng cho việc kiểm tra seat còn trống hoặc chốt số lượng gia hạn.",
        ],
      },
      {
        heading: "Khi người dùng đổi vai trò hoặc nghỉ việc",
        paragraphs: [
          "Không nên chỉ xóa email khỏi danh sách nhân sự. Xác định ứng dụng nào cần giữ, tài sản nào thuộc công ty, người tiếp nhận là ai và thời điểm thu hồi access. Adobe nêu license của user sẽ được unassign khi user bị remove; quy trình nội bộ vẫn cần xác nhận dữ liệu và công việc đã bàn giao.",
          "Với team nhỏ, Adobe cũng mô tả khả năng quản lý user/license trực tiếp trong Creative Cloud desktop app cho một số plan. Dù dùng giao diện nào, doanh nghiệp vẫn cần giữ Admin Console là nguồn quản trị chính và register là nguồn đối chiếu nội bộ.",
        ],
      },
      {
        heading: "Rà soát hàng tháng hoặc trước renewal",
        paragraphs: ["Lập một cuộc rà soát ngắn cùng leader mỗi tháng hoặc trước kỳ gia hạn."],
        bullets: [
          "Seat nào không có người dùng hoặc user đã rời team?",
          "Có user nào được gán sai app hoặc sai email?",
          "Có bao nhiêu seat cần thêm trong kỳ tiếp theo, theo nhu cầu đã được duyệt?",
          "Danh sách admin có còn đúng người, đúng quyền và có phương án dự phòng?",
        ],
      },
    ],
  },
  {
    slug: "acrobat-pro-va-creative-cloud-teams",
    title: "Acrobat Pro for teams và Creative Cloud for teams: đừng mua sai phạm vi",
    description:
      "Cách tách nhu cầu PDF/document workflow khỏi nhu cầu thiết kế, hình ảnh và video trước khi chọn Adobe cho team.",
    answer:
      "Acrobat Pro for teams tập trung vào quy trình PDF và tài liệu; Creative Cloud for teams phục vụ công việc sáng tạo với các ứng dụng Adobe. Cả hai đều có mô hình quản lý seat, nhưng phạm vi công việc và số app cần dùng là hai quyết định khác nhau.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Adobe",
    relatedCategory: "adobe",
    relatedProductSlugs: ["acrobat-pro-teams", "adobe-creative-cloud-teams"],
    audience: ["Admin mua Adobe", "Pháp chế/HR/Finance", "Design/Marketing lead"],
    readingMinutes: 5,
    keyTakeaways: [
      "PDF workflow và creative workflow là hai use case riêng.",
      "Không cần mua Creative Cloud chỉ để giải quyết PDF cơ bản.",
      "Danh sách ứng dụng theo vai trò giúp báo giá chính xác hơn số lượng seat chung chung.",
    ],
    sources: [sources.adobeAcrobat, sources.adobeTeams, sources.adobeTeamsAdmin],
    sections: [
      {
        heading: "Bắt đầu bằng công việc, không bắt đầu bằng tên plan",
        paragraphs: [
          "Nếu team chủ yếu tạo, sửa, chuyển đổi, review và quản lý PDF, hãy khởi đầu với Acrobat Pro for teams. Nếu team cần thiết kế ảnh, minh họa, layout, video hoặc nhiều ứng dụng sáng tạo, Creative Cloud for teams mới là nhánh cần đánh giá.",
          "Nhiều doanh nghiệp mua full suite theo thói quen dù phần lớn seat chỉ cần PDF, hoặc ngược lại mua Acrobat khi team cần nhiều app design. Tách nhu cầu theo vai trò là cách tránh dư chi phí và giảm rắc rối khi quản lý seat.",
        ],
      },
      {
        heading: "Mẫu phân loại theo phòng ban",
        paragraphs: ["Dùng bảng này làm đầu vào cho procurement trước khi hỏi giá."],
        bullets: [
          "Pháp chế, tài chính, hành chính, sales: mô tả PDF workflow cụ thể trước.",
          "Design, marketing, media: liệt kê từng app cần dùng và có cần full suite hay không.",
          "Manager/approver: có cần tạo/sửa nội dung hay chỉ review tài liệu?",
          "Admin: ai cấp seat, ai thu hồi và ai sở hữu ngày renewal?",
        ],
      },
      {
        heading: "Khi cần cả hai loại seat",
        paragraphs: [
          "Một tổ chức có thể có cả Acrobat và Creative Cloud trong cùng danh mục, vì các nhóm làm công việc khác nhau. Điều quan trọng là báo giá và register phải thể hiện seat nào thuộc plan nào, gán cho email nào và được phê duyệt bởi ai.",
          "Đừng dùng một login chia sẻ để “tiết kiệm seat”. Mô hình Teams được thiết kế để admin quản lý user và license theo người dùng; tài khoản chia sẻ làm mất dữ liệu audit, offboarding và tính liên tục của công việc.",
        ],
      },
    ],
  },
  {
    slug: "ho-so-mua-license-doanh-nghiep",
    title: "Hồ sơ mua license doanh nghiệp: từ yêu cầu kỹ thuật đến chứng từ",
    description:
      "Mẫu checklist cho IT, mua hàng và kế toán để yêu cầu báo giá Windows, Office, Microsoft 365 hoặc Adobe có thể duyệt và bàn giao.",
    answer:
      "Hồ sơ mua license tốt phải nối được ba lớp: nhu cầu sử dụng, sản phẩm/SKU và chứng từ thương mại. Nếu thiếu một trong ba, báo giá có thể đúng giá nhưng không đủ để IT triển khai hoặc kế toán đối chiếu sau này.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Procurement",
    relatedCategory: "windows",
    relatedProductSlugs: ["windows-ggwa", "microsoft-365-business-standard"],
    audience: ["IT", "Procurement", "Kế toán", "Người phê duyệt ngân sách"],
    readingMinutes: 7,
    keyTakeaways: [
      "Tách yêu cầu kỹ thuật khỏi yêu cầu thương mại, nhưng chốt chúng trong cùng một hồ sơ.",
      "SKU, số lượng, thời hạn và người nhận phải khớp trên báo giá/bàn giao.",
      "Yêu cầu chứng từ cần nêu trước khi phát hành báo giá cuối cùng.",
    ],
    sources: [sources.ggwaTerms, sources.m365AdminUsers, sources.adobeTeamsAdmin],
    sections: [
      {
        heading: "Phần IT cần mô tả",
        paragraphs: [
          "IT không cần viết một specification dài, nhưng phải xác định đúng đối tượng cấp phép: thiết bị hay người dùng; máy mới hay máy hiện hữu; app/plan nào; và môi trường đã có tenant/admin hay chưa. Đây là dữ liệu quyết định sản phẩm phù hợp.",
          "Với subscription, thêm danh sách email, ngày cần cấp quyền và người sở hữu tenant/Admin Console. Với Windows hoặc Office mua theo thiết bị, thêm asset tag, platform và trạng thái hiện có nếu cần rà soát.",
        ],
        bullets: [
          "Sản phẩm/phiên bản hoặc mô tả use case",
          "Số thiết bị hoặc số user/seat; danh sách email khi cần",
          "Platform, ngôn ngữ, tình trạng máy mới/máy hiện hữu",
          "Ngày cần triển khai, người nhận bàn giao và yêu cầu hỗ trợ",
        ],
      },
      {
        heading: "Phần procurement và kế toán cần chốt",
        paragraphs: [
          "Mua hàng cần nêu tên pháp nhân, MST, yêu cầu hợp đồng, hóa đơn VAT, PO và người duyệt. Những yêu cầu này không nên được thêm vào phút cuối sau khi đã so sánh báo giá, vì chúng có thể ảnh hưởng cách phát hành hồ sơ.",
          "Kế toán nên yêu cầu thông tin SKU/tên hàng, số lượng, thời hạn subscription nếu có và đầu mối xác nhận bàn giao để đối chiếu với hóa đơn. Đừng để hóa đơn, báo giá và danh sách user nằm ở ba nơi khác nhau.",
        ],
      },
      {
        heading: "Mẫu yêu cầu ngắn có thể dùng ngay",
        paragraphs: [
          "“Cần báo giá [tên sản phẩm/use case] cho [số lượng] [thiết bị/user], triển khai từ [ngày]. Hiện trạng: [máy mới/máy hiện hữu/tenant đã có]. Yêu cầu: [hóa đơn/hợp đồng/chứng từ]. IT nhận bàn giao: [đầu mối].”",
          "Mẫu này không thay thế việc xác nhận điều kiện sản phẩm, nhưng giúp cuộc trao đổi đầu tiên đủ dữ liệu để tư vấn không phải đoán nhu cầu.",
        ],
      },
    ],
  },
  {
    slug: "checklist-ban-giao-license-it-ke-toan",
    title: "Checklist bàn giao license: IT và kế toán cần lưu gì?",
    description:
      "Cách tổ chức hồ sơ sau mua để IT quản lý việc dùng license, kế toán đối chiếu giao dịch và người tiếp quản không mất dấu quyền sử dụng.",
    answer:
      "Bộ bàn giao license cần liên kết sản phẩm/SKU, người dùng hoặc thiết bị áp dụng và hồ sơ thương mại. Chỉ lưu product key hoặc email kích hoạt là chưa đủ: khi nhân sự thay đổi hoặc gia hạn, doanh nghiệp sẽ thiếu dữ liệu để quyết định.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Procurement",
    relatedCategory: "microsoft-365",
    relatedProductSlugs: ["microsoft-365-apps-for-business", "acrobat-pro-teams"],
    audience: ["IT asset management", "Kế toán", "Procurement operations"],
    readingMinutes: 6,
    keyTakeaways: [
      "Một sổ license phải nối hồ sơ tài chính với người dùng/thiết bị thực tế.",
      "Subscription cần có owner và ngày gia hạn; perpetual cần có SKU/thiết bị áp dụng.",
      "Tài khoản admin và dữ liệu khẩn cấp phải có người sở hữu rõ ràng.",
    ],
    sources: [sources.m365AdminUsers, sources.adobeAssignTeams, sources.officeInstall],
    sections: [
      {
        heading: "IT cần lưu theo loại license",
        paragraphs: [
          "Với Windows/Office theo thiết bị, lưu tên SKU, part number nếu có, số lượng, asset tag/máy áp dụng, cách kích hoạt và người phụ trách. Với Microsoft 365/Adobe, lưu email user, plan, ngày cấp, tenant/Admin Console và ngày renewal.",
          "Tài liệu kỹ thuật nên đặt ở nơi người tiếp quản có quyền truy cập theo chính sách nội bộ. Không nên để toàn bộ dữ liệu license trong hộp thư cá nhân của một người hoặc chỉ trong một file đính kèm cũ.",
        ],
        bullets: [
          "SKU, part number, số lượng và ngày bàn giao",
          "Thiết bị hoặc email user được áp dụng",
          "Tenant/Admin Console, owner và admin role liên quan",
          "Ngày bắt đầu/hết hạn hoặc ngày rà soát tiếp theo",
        ],
      },
      {
        heading: "Kế toán và mua hàng cần lưu",
        paragraphs: [
          "Hồ sơ thương mại gồm báo giá đã duyệt, PO/hợp đồng khi có, hóa đơn VAT và xác nhận/biên bản bàn giao. Mỗi chứng từ nên có một mã hoặc đường dẫn chung với license register để truy xuất nhanh.",
          "Với subscription, thêm lịch gia hạn, owner ngân sách và nguyên tắc duyệt tăng/giảm seat. Điều này giúp kế toán không phải suy đoán khoản chi định kỳ đang phục vụ user nào.",
        ],
      },
      {
        heading: "Kiểm tra định kỳ 15 phút",
        paragraphs: ["Mỗi quý hoặc trước kỳ gia hạn, dùng checklist này để kiểm tra nhanh."],
        bullets: [
          "Số seat đang cấp có khớp danh sách nhân sự active?",
          "Có thiết bị/user nào thiếu trong register hoặc không còn dùng?",
          "Admin owner và thông tin liên hệ hỗ trợ có còn đúng?",
          "Báo giá, hóa đơn và ngày renewal có nằm trong cùng một nơi tra cứu?",
        ],
      },
    ],
  },
  {
    slug: "gia-han-license-subscription-doanh-nghiep",
    title: "Gia hạn Microsoft 365 và Adobe: checklist trước ngày renewal",
    description:
      "Quy trình rà soát seat, user, owner, ngân sách và hồ sơ trước khi gia hạn subscription Microsoft 365 hoặc Adobe Teams.",
    answer:
      "Gia hạn tốt không bắt đầu bằng ngày hết hạn mà bắt đầu bằng dữ liệu sử dụng: ai đang có seat, seat nào không còn cần, user nào đổi vai trò và ai sở hữu ngân sách. Rà soát trước giúp doanh nghiệp không gia hạn theo một con số cũ mà không kiểm chứng.",
    publishedAt,
    reviewedAt: publishedAt,
    category: "Procurement",
    relatedCategory: "microsoft-365",
    relatedProductSlugs: ["microsoft-365-business-standard", "adobe-creative-cloud-teams"],
    audience: ["Procurement", "Finance", "IT admin", "Creative operations"],
    readingMinutes: 6,
    keyTakeaways: [
      "Rà soát user/seat trước renewal, không sau khi invoice đã phát hành.",
      "Owner của ngân sách và owner vận hành phải cùng xác nhận số lượng.",
      "Giữ lịch renewal cùng license register để tránh phụ thuộc vào trí nhớ cá nhân.",
    ],
    sources: [sources.m365AdminUsers, sources.adobeTeamManagement, sources.adobeAssignTeams],
    sections: [
      {
        heading: "Bắt đầu trước renewal bao lâu",
        paragraphs: [
          "Chọn mốc rà soát nội bộ đủ sớm để IT và các department xác nhận nhu cầu, thay vì đợi sát ngày renewal. Mốc chính xác phụ thuộc quy trình mua hàng, nhưng mục tiêu luôn giống nhau: có danh sách seat đã được xác thực trước khi yêu cầu báo giá mới.",
          "Lấy dữ liệu từ admin center và license register, không chỉ từ invoice cũ. Invoice thể hiện số đã mua, không chứng minh mọi seat vẫn đang cần hoặc được gán đúng người.",
        ],
      },
      {
        heading: "Rà soát theo ba lớp",
        paragraphs: ["Tách dữ liệu thành ba lớp để cuộc họp renewal không trở thành một cuộc tranh luận mơ hồ."],
        bullets: [
          "Vận hành: user/seat active, vacant, pending offboarding và app/plan được dùng.",
          "Quản trị: admin owner, tenant/Admin Console, quyền truy cập và người chịu trách nhiệm cập nhật register.",
          "Thương mại: thời hạn, số lượng đề xuất, ngân sách, hợp đồng/hóa đơn và đầu mối ký duyệt.",
        ],
      },
      {
        heading: "Quyết định tăng, giữ hay giảm seat",
        paragraphs: [
          "Tăng khi có nhu cầu user mới đã được phê duyệt và có owner nhận bàn giao. Giữ khi seat đang gán đúng người và vai trò còn cần. Giảm hoặc tái phân bổ khi seat không có owner, user đã chuyển vai trò hoặc không còn dùng ứng dụng trong phạm vi công việc.",
          "Adobe và Microsoft đều có cơ chế quản lý gán/thu hồi license trong admin surface của họ; doanh nghiệp vẫn cần quy trình phê duyệt riêng để việc thay đổi seat có dấu vết và khớp ngân sách.",
        ],
      },
    ],
  },
];

export function findKnowledgeArticle(slug: string) {
  return knowledgeArticles.find((article) => article.slug === slug);
}
