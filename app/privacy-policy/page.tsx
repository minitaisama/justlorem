import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Chính sách quyền riêng tư",
  description:
    "Cách LOREM Technology sử dụng dữ liệu phân tích website và bảo vệ thông tin khi người dùng truy cập justlorem.com.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#f9fafb] text-[#14213d]">
      <Header />
      <section className="mx-auto w-full max-w-[900px] px-5 py-16 md:px-8 md:py-20">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Privacy</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Chính sách quyền riêng tư.
        </h1>
        <p className="mt-4 text-sm text-[#4b5873]">
          <strong>Cập nhật:</strong> 10/07/2026
        </p>

        <div className="prose-policy mt-10 space-y-10 text-[#4b5873]">
          <section>
            <p>
              {site.name} vận hành website <Link href="/" className="font-bold text-[#2f5bff]">{site.url}</Link> để cung cấp thông tin về sản phẩm, giá tham khảo và giải pháp bản quyền phần mềm doanh nghiệp.
            </p>
            <p>Website hiện không có form đăng ký, tài khoản người dùng hoặc checkout.</p>
          </section>

          <section>
            <h2>1. Dữ liệu phân tích</h2>
            <ul>
              <li><strong>Cloudflare Web Analytics:</strong> có thể được dùng để đo traffic hạ tầng theo cơ chế không sử dụng cookie phân tích.</li>
              <li><strong>Google Analytics 4:</strong> chỉ được tải sau khi người dùng chọn đồng ý analytics.</li>
              <li><strong>Google Search Console:</strong> được dùng để theo dõi trạng thái index và hiệu quả tìm kiếm ở cấp website.</li>
            </ul>
          </section>

          <section>
            <h2>2. Event được ghi nhận</h2>
            <p>
              Khi analytics được cho phép, website có thể ghi nhận việc xem bảng giá, mở trang sản phẩm, xem bảng so sánh, nhấp CTA Zalo, gọi hotline hoặc mở nguồn pháp lý.
            </p>
            <p>
              Event không gửi tên, số điện thoại, địa chỉ email, nội dung cuộc gọi, nội dung tin nhắn hoặc thông tin nhập trong ứng dụng Zalo.
            </p>
          </section>

          <section>
            <h2>3. Tùy chọn analytics</h2>
            <p>
              Lựa chọn đồng ý hoặc từ chối được lưu trong local storage của trình duyệt. Nếu chưa có lựa chọn, Google Analytics không được tải.
            </p>
          </section>

          <section>
            <h2>4. Liên kết bên thứ ba</h2>
            <p>
              Website có liên kết đến Zalo, Masothue, Microsoft, Adobe và các nguồn tham khảo khác. Khi rời justlorem.com, chính sách của website hoặc nền tảng đích được áp dụng.
            </p>
          </section>

          <section>
            <h2>5. Liên hệ và yêu cầu dữ liệu</h2>
            <p>
              Gửi yêu cầu qua <a href={site.phoneHref} className="font-bold text-[#2f5bff]">hotline {site.phone}</a> hoặc <a href={site.zaloUrl} className="font-bold text-[#2f5bff]">Zalo chính thức</a>. Hướng dẫn xử lý yêu cầu dữ liệu được nêu tại trang <Link href="/data-deletion" className="font-bold text-[#2f5bff]">Data Deletion</Link>.
            </p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
