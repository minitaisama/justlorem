export type ResourceField = {
  name: string;
  purpose: string;
  example: string;
};

export type DownloadableResource = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  answer: string;
  publishedAt: string;
  reviewedAt: string;
  downloadPath: string;
  downloadFormat: string;
  fields: ResourceField[];
};

export const downloadableResources: DownloadableResource[] = [
  {
    slug: "mau-kiem-ke-license-doanh-nghiep",
    title: "Mẫu kiểm kê license doanh nghiệp",
    seoTitle: "Mẫu kiểm kê license phần mềm doanh nghiệp (CSV)",
    description:
      "Mẫu CSV giúp IT, procurement và kế toán nối thiết bị, người dùng, license, ngày gia hạn, nhà cung cấp và chứng từ bàn giao trong một sổ theo dõi.",
    answer:
      "Dùng mẫu này làm sổ nguồn cho license register: mỗi dòng đại diện một thiết bị, người dùng hoặc subscription cần quản lý. Không lưu mật khẩu hay product key đầy đủ trong file; chỉ lưu mã tham chiếu và đường dẫn đến kho hồ sơ có kiểm soát.",
    publishedAt: "2026-07-14",
    reviewedAt: "2026-07-14",
    downloadPath: "/downloads/mau-kiem-ke-license-doanh-nghiep.csv",
    downloadFormat: "text/csv",
    fields: [
      { name: "Mã tài sản", purpose: "Khóa nối với hệ thống tài sản hoặc hồ sơ mua hàng.", example: "LAP-MKT-001" },
      { name: "Thiết bị / người dùng", purpose: "Xác định license đang đi theo thiết bị hay user.", example: "Thiết bị" },
      { name: "Sản phẩm và phiên bản", purpose: "Ghi đúng product family và edition đang sử dụng.", example: "Windows 11 Pro" },
      { name: "Mô hình license", purpose: "Phân biệt device, user, perpetual, subscription hoặc trường hợp cần rà soát.", example: "Per device" },
      { name: "Tài khoản sở hữu", purpose: "Ghi email công việc hoặc owner quản trị, không ghi mật khẩu.", example: "it-admin@congty.vn" },
      { name: "Ngày bắt đầu / gia hạn", purpose: "Tạo lịch rà soát và chuẩn bị ngân sách.", example: "2027-07-01" },
      { name: "Nhà cung cấp", purpose: "Truy xuất giao dịch và đầu mối hỗ trợ.", example: "Theo PO-2026-014" },
      { name: "Hóa đơn / hợp đồng", purpose: "Dẫn đến mã chứng từ hoặc thư mục hồ sơ có kiểm soát.", example: "INV-2026-014" },
      { name: "Trạng thái bàn giao", purpose: "Theo dõi đã cấp, chờ xác nhận, thu hồi hoặc cần xử lý.", example: "Đã xác nhận" },
      { name: "Người phụ trách", purpose: "Giao owner cập nhật dữ liệu và xử lý ngoại lệ.", example: "IT Operations" },
    ],
  },
];

export function findDownloadableResource(slug: string) {
  return downloadableResources.find((resource) => resource.slug === slug);
}
