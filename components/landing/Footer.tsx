import Image from "next/image";
import Link from "next/link";
import CallCta from "@/components/CallCta";
import QuoteCta from "@/components/QuoteCta";
import { productCategories } from "@/lib/catalog";
import { navLinks, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-slate-200/70 bg-[#f9fafb]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1fr_1.25fr]">
        <div>
          <Image
            src={site.logo}
            alt="Lorem Technology logo"
            width={500}
            height={500}
            className="h-20 w-20 object-contain"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-[#4b5873]">
            {site.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <CallCta
              location="footer"
              label="Gọi hotline"
              className="border border-slate-200 bg-white text-[#0a1b33] hover:border-slate-300"
            />
            <QuoteCta
              location="footer"
              label="Báo giá Zalo"
              className="bg-[#0a152d] text-white hover:bg-[#13264c]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Điều hướng
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 transition hover:text-[#0a1b33]"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/privacy-policy" className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 transition hover:text-[#0a1b33]">
                Privacy Policy
              </Link>
              <Link href="/data-deletion" className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 transition hover:text-[#0a1b33]">
                Data Deletion
              </Link>
              <Link href="/brand-assets" className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 transition hover:text-[#0a1b33]">
                Brand assets
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Giải pháp
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {productCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/giai-phap/${category.slug}`}
                  className="inline-flex min-h-11 items-center text-sm font-semibold text-slate-600 transition hover:text-[#0a1b33]"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
