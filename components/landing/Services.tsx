import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-[#0a0f1a] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
              Services
            </p>
            <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
              Built for launch, not just presentation.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/68">
              Every engagement connects strategy, interface, and implementation
              so the final product is clear for users and maintainable for the
              team behind it.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceCategories.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-4 rounded-3xl border border-white/10 bg-[#030712] p-5 transition hover:border-[#9fc2ff]/50 hover:bg-[#071225] md:grid-cols-[auto_1fr_auto] md:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2F5FB3]/20 font-display text-xl text-[#9fc2ff]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/40">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-white/64">
                    {service.summary}
                  </p>
                </div>
                <ArrowUpRight className="hidden text-white/40 transition group-hover:text-[#9fc2ff] md:block" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
