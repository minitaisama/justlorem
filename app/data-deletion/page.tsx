import type { Metadata } from "next";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Yêu cầu xóa dữ liệu",
  description:
    "Thông tin về yêu cầu xóa dữ liệu liên quan đến các dịch vụ của LOREM Technology.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-[#eef3ff] text-[#14213d]">
      <Header />
      <section className="mx-auto w-full max-w-[900px] px-5 py-20 md:px-8">
        <h1 className="text-5xl font-extrabold tracking-[-0.02em] md:text-6xl">
          Yêu cầu xóa dữ liệu
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#4b5873]">
          {site.name} tôn trọng quyền kiểm soát dữ liệu cá nhân liên quan đến
          các dịch vụ do LOREM vận hành.
        </p>

        <div className="prose-policy mt-10 space-y-10 text-[#4b5873]">
          <section>
            <h2>1. Cách gửi yêu cầu</h2>
            <p>
              Gửi yêu cầu qua <a href={site.phoneHref}>hotline {site.phone}</a> hoặc <a href={site.zaloUrl}>Zalo chính thức</a>, với nội dung "Yêu cầu xóa dữ liệu".
            </p>
            <p>Chỉ cung cấp thông tin cần thiết để xác định dịch vụ hoặc tương tác liên quan.</p>
          </section>

          <section>
            <h2>2. Phạm vi xử lý</h2>
            <ul>
              <li>Dữ liệu gắn với dịch vụ LOREM có thể xác định được từ yêu cầu.</li>
              <li>Dữ liệu tương tác từ các dịch vụ trước đây nếu vẫn thuộc quyền kiểm soát của LOREM.</li>
              <li>Lựa chọn analytics có thể được xóa trực tiếp bằng cách xóa local storage của trình duyệt.</li>
            </ul>
          </section>

          <section>
            <h2>3. Xác minh yêu cầu</h2>
            <p>
              LOREM có thể yêu cầu thông tin xác minh phù hợp trước khi xử lý để
              tránh xóa dữ liệu theo yêu cầu của người không có quyền.
            </p>
          </section>

          <section>
            <h2>4. Thời gian xử lý</h2>
            <p>
              Thời gian xử lý phụ thuộc vào việc xác minh và hệ thống liên quan.
              LOREM sẽ phản hồi qua kênh đã dùng để tiếp nhận yêu cầu.
            </p>
          </section>

          <section>
            <h2>5. Xác nhận</h2>
            <p>Kết quả xử lý sẽ được xác nhận qua kênh tiếp nhận chính thức.</p>
          </section>

          <section>
            <h2>6. Lưu ý</h2>
            <ul>
              <li>
                Một số dữ liệu có thể cần được lưu theo nghĩa vụ pháp lý hoặc hồ sơ giao dịch.
              </li>
              <li>
                Dữ liệu do nền tảng bên thứ ba kiểm soát còn phụ thuộc chính sách của nền tảng đó.
              </li>
            </ul>
          </section>

          <section>
            <h2>Cập nhật gần nhất</h2>
            <p>10/07/2026</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
