import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Legal Company Information",
  description:
    "Official company and tax reference information for Lorem Technology, registered as CÔNG TY TNHH CÔNG NGHỆ LOREM with tax ID 0315880407.",
  path: "/legal",
});

export default function LegalPage() {
  const rows = [
    ["Vietnamese legal name", site.legalName],
    ["International name", site.internationalName],
    ["Short name", site.shortName],
    ["Tax ID", site.taxId],
    ["Phone", site.phone],
    ["Email", site.email],
    ["Address", site.address],
  ];

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="py-20 md:py-28">
        <div className="mx-auto w-full max-w-[1100px] px-5 md:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
            Legal reference
          </p>
          <h1 className="mt-4 font-display text-6xl leading-none md:text-8xl">
            Official company information.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-9 text-white/70">
            This page exists to make Lorem Technology's legal identity clear for
            customers, search systems, and AI answer engines. Masothue is linked
            as a public tax reference for entity verification.
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1a]">
            {rows.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-2 border-b border-white/10 px-5 py-4 last:border-b-0 md:grid-cols-[240px_1fr]"
              >
                <dt className="text-sm font-semibold text-white/45">{label}</dt>
                <dd className="text-sm leading-7 text-white">{value}</dd>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={site.masothueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#030712] transition hover:bg-[#9fc2ff]"
            >
              Open Masothue record <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/45"
            >
              Read about Lorem Technology
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
