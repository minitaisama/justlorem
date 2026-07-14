import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, CheckCircle2, Download, FileSpreadsheet, ShieldCheck } from "lucide-react";
import Breadcrumbs from "@/components/catalog/Breadcrumbs";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import JsonLd from "@/components/JsonLd";
import { downloadableResources, findDownloadableResource } from "@/lib/resources";
import { breadcrumbsJsonLd, pageMetadata, resourceJsonLd } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return downloadableResources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = findDownloadableResource(slug);
  if (!resource) return {};

  return pageMetadata({
    title: resource.seoTitle,
    description: resource.description,
    path: `/tai-nguyen/${resource.slug}`,
  });
}

export default async function DownloadableResourcePage({ params }: PageProps) {
  const { slug } = await params;
  const resource = findDownloadableResource(slug);
  if (!resource) notFound();

  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#0a1b33] print:bg-white">
      <div className="print:hidden"><Header /></div>
      <JsonLd
        data={[
          breadcrumbsJsonLd([
            { name: "Trang chủ", path: "/" },
            { name: resource.title, path: `/tai-nguyen/${resource.slug}` },
          ]),
          resourceJsonLd(resource),
        ]}
      />

      <article className="px-5 py-10 md:px-8 md:py-16 print:px-0 print:py-0">
        <div className="mx-auto w-full max-w-[1120px]">
          <div className="print:hidden">
            <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: resource.title }]} />
          </div>

          <header className="mt-8 grid gap-8 border-b border-slate-200 pb-10 lg:grid-cols-[1fr_340px] print:mt-0">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#2457d6]">
                <FileSpreadsheet size={16} aria-hidden="true" /> Tài nguyên thực hành
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl print:text-4xl">
                {resource.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base font-medium leading-8 text-slate-600">{resource.description}</p>
              <p className="mt-5 flex items-center gap-2 text-xs font-semibold text-slate-500">
                <CalendarDays size={14} aria-hidden="true" /> Xuất bản {resource.publishedAt} · Kiểm tra {resource.reviewedAt}
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-blue-200 bg-blue-50 p-6 print:border-slate-300 print:bg-white">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-blue-700">Tải mẫu</p>
              <p className="mt-3 text-sm font-semibold leading-7 text-[#18345f]">
                CSV mở được bằng Excel, Google Sheets hoặc công cụ quản lý dữ liệu nội bộ.
              </p>
              <a
                href={resource.downloadPath}
                download
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0a152d] px-5 text-sm font-bold text-white transition hover:bg-[#18345f] print:hidden"
              >
                <Download size={17} aria-hidden="true" /> Tải mẫu CSV
              </a>
              <p className="mt-3 text-xs leading-5 text-slate-500">Định dạng: CSV UTF-8 · Không chứa macro · Không gửi dữ liệu về LOREM.</p>
            </div>
          </header>

          <div className="grid gap-12 py-12 lg:grid-cols-[1fr_300px] print:block print:py-8">
            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Dùng mẫu này để giải quyết việc gì?</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  <p>{resource.answer}</p>
                  <p>
                    Vấn đề phổ biến không phải doanh nghiệp hoàn toàn không có dữ liệu, mà dữ liệu nằm rải rác: danh sách máy ở IT, invoice ở kế toán, email user ở admin center và ngày gia hạn trong lịch của một cá nhân. Mẫu kiểm kê tạo một lớp chỉ mục chung để các bộ phận biết hồ sơ nào tồn tại, ai đang chịu trách nhiệm và ngoại lệ nào cần xử lý.
                  </p>
                  <p>
                    File không thay thế hệ thống asset management hoặc password manager. Hãy dùng nó như register cấp quản trị, còn product key, mật khẩu, recovery code và tài liệu nhạy cảm phải nằm trong kho được kiểm soát quyền. Cột hóa đơn/hợp đồng chỉ cần lưu mã tham chiếu hoặc đường dẫn nội bộ, không nhúng dữ liệu tài chính nhạy cảm vào bản chia sẻ rộng.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Ý nghĩa từng nhóm dữ liệu</h2>
                <div className="mt-5 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-white">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead className="bg-slate-50 text-[10px] uppercase tracking-[0.14em] text-slate-500">
                      <tr>
                        <th className="px-4 py-4">Trường</th>
                        <th className="px-4 py-4">Mục đích</th>
                        <th className="px-4 py-4">Ví dụ</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {resource.fields.map((field) => (
                        <tr key={field.name}>
                          <th scope="row" className="px-4 py-4 font-bold text-[#0a1b33]">{field.name}</th>
                          <td className="px-4 py-4 leading-6 text-slate-600">{field.purpose}</td>
                          <td className="px-4 py-4 font-mono text-xs text-slate-500">{field.example}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Quy trình kiểm kê bốn bước</h2>
                <ol className="mt-5 grid gap-4">
                  {[
                    ["01", "Chốt phạm vi", "Tách thiết bị, user subscription và ứng dụng theo seat. Ghi rõ văn phòng, phòng ban hoặc dự án nằm trong đợt kiểm kê."],
                    ["02", "Nhập dữ liệu từ nguồn gốc", "Đối chiếu asset list, Microsoft/Adobe admin surface, hợp đồng, hóa đơn và email bàn giao; không nhập theo trí nhớ."],
                    ["03", "Gắn trạng thái và owner", "Mỗi dòng phải có trạng thái hiện tại, người chịu trách nhiệm và hành động tiếp theo nếu thiếu hồ sơ, dư seat hoặc chưa rõ quyền sử dụng."],
                    ["04", "Khóa mốc rà soát", "Đặt ngày review theo quý hoặc trước renewal. Sau mỗi onboarding/offboarding, cập nhật register trong cùng ticket bàn giao."],
                  ].map(([number, title, body]) => (
                    <li key={number} className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[48px_1fr]">
                      <span className="text-sm font-bold text-[#2457d6]">{number}</span>
                      <div>
                        <h3 className="font-bold">{title}</h3>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Các dấu hiệu cần xử lý sau kiểm kê</h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    "Thiết bị đang hoạt động nhưng không có mã tài sản hoặc owner.",
                    "Tên sản phẩm trên file không khớp SKU/hóa đơn hoặc không rõ mô hình license.",
                    "Subscription còn seat nhưng user đã nghỉ hoặc chuyển vai trò.",
                    "Tài khoản quản trị thuộc email cá nhân hay chỉ có một admin.",
                    "Ngày gia hạn không có owner ngân sách và mốc phê duyệt.",
                    "Hồ sơ bàn giao chỉ có product key hoặc ảnh chụp màn hình kích hoạt.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 rounded-2xl bg-blue-50 p-4 text-sm font-semibold leading-7 text-[#18345f]">
                      <CheckCircle2 size={18} className="mt-1 shrink-0 text-[#2457d6]" aria-hidden="true" /> {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Từ register đến yêu cầu báo giá</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate-700">
                  <p>
                    Khi dữ liệu đã sạch, tạo một bản tổng hợp không chứa thông tin nhạy cảm: số thiết bị cần Windows, số user cần email/Office, số seat Adobe, thời điểm triển khai, yêu cầu hóa đơn/hợp đồng và người nhận bàn giao. Đơn vị tư vấn có thể dựa trên đó để làm rõ SKU hoặc gói phù hợp mà không phải đoán hiện trạng.
                  </p>
                  <p>
                    Không gửi toàn bộ register cho nhà cung cấp nếu không cần. Chỉ chia sẻ phần phục vụ báo giá, ẩn email cá nhân, đường dẫn chứng từ và dữ liệu nội bộ. Sau giao dịch, cập nhật lại register bằng SKU, số lượng, mốc gia hạn và mã hồ sơ vừa được bàn giao.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Đọc tiếp trong LOREM Knowledge Base</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {[
                    ["Rà soát Windows GGWA", "/kien-thuc/windows-ggwa-la-gi"],
                    ["Triển khai Microsoft 365", "/kien-thuc/trien-khai-microsoft-365-cho-doanh-nghiep"],
                    ["Hồ sơ mua license", "/kien-thuc/ho-so-mua-license-doanh-nghiep"],
                    ["Checklist bàn giao IT và kế toán", "/kien-thuc/checklist-ban-giao-license-it-ke-toan"],
                  ].map(([label, href]) => (
                    <Link key={href} href={href} className="inline-flex min-h-14 items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 text-sm font-bold transition hover:border-blue-300 hover:text-[#2457d6]">
                      {label} <span aria-hidden="true">→</span>
                    </Link>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-4 lg:sticky lg:top-28 lg:self-start print:mt-8">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                <ShieldCheck size={20} className="text-[#2457d6]" aria-hidden="true" />
                <h2 className="mt-3 text-base font-bold">Nguyên tắc dữ liệu</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Không lưu mật khẩu, recovery code hoặc product key đầy đủ. Dùng mã tham chiếu đến kho hồ sơ có phân quyền.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 print:hidden">
                <h2 className="text-base font-bold">Cần bản giấy?</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">Trang này có bố cục in riêng để dùng làm hướng dẫn nội bộ cùng file CSV.</p>
              </div>
            </aside>
          </div>
        </div>
      </article>

      <div className="print:hidden"><Footer /></div>
    </main>
  );
}
