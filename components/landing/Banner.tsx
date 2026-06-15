import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { projects, serviceCategories, site } from "@/lib/site";

const proofPoints = [
  { value: "50+", label: "Delivered product and web projects" },
  { value: "35+", label: "Partners and founder teams supported" },
  { value: "2019", label: "Registered technology company" },
];

export default function Banner() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#030712]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(96,165,250,0.16),transparent_28%),radial-gradient(circle_at_82%_20%,rgba(47,95,179,0.2),transparent_30%),linear-gradient(180deg,transparent,#030712_86%)]" />
      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] w-full max-w-[1400px] items-center gap-10 px-5 py-16 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:py-20">
        <div className="max-w-4xl">
          <p className="mb-5 max-w-full text-xs font-semibold uppercase tracking-[0.22em] text-[#9fc2ff] sm:text-sm">
            Ho Chi Minh City software, web, app, and product studio
          </p>
          <h1 className="text-balance font-display text-[3.2rem] leading-[0.92] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-[8.5rem]">
            Lorem Technology builds digital products that ship.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
            We design and develop websites, app interfaces, game-facing web
            experiences, and scalable software architecture for teams that need
            clarity before launch.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#030712] transition hover:bg-[#9fc2ff]"
            >
              Book Discovery Call <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
            >
              See selected work
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {proofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <div className="font-display text-3xl text-[#9fc2ff]">
                  {item.value}
                </div>
                <p className="mt-2 text-sm leading-5 text-white/68">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside className="rounded-3xl border border-white/10 bg-[#0a0f1a]/90 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.3)] md:p-6">
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/45">
                Registered entity
              </p>
              <p className="mt-2 font-semibold text-white">
                {site.internationalName}
              </p>
            </div>
            <Link
              href={site.masothueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-[#2F5FB3] px-3 py-1.5 text-xs font-bold text-white"
            >
              MST {site.taxId}
            </Link>
          </div>

          <div className="space-y-4">
            {serviceCategories.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4 transition hover:border-[#9fc2ff]/50 hover:bg-[#2F5FB3]/12"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9fc2ff]" />
                <span>
                  <span className="block font-semibold text-white">
                    {service.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/62">
                    {service.summary}
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              Current portfolio
            </p>
            <p className="mt-2 text-sm leading-6 text-white/70">
              {projects.map((project) => project.title).join(", ")}.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
