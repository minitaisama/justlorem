import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { serviceCategories } from "@/lib/site";

export default function Services() {
  return (
    <section id="services" className="bg-[#07100d] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b9ff66]">
              AI-first capabilities
            </p>
            <h2 className="mt-4 max-w-xl font-display text-5xl leading-[0.95] text-white md:text-7xl">
              Build loops for products that cannot wait.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/68">
              We use AI to compress the path from idea to reviewed build, but
              the work still moves through human judgment, testing, and
              maintainable architecture.
            </p>
          </div>

          <div className="grid gap-4">
            {serviceCategories.map((service, index) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-4 rounded-3xl border border-white/10 bg-[#05070a] p-5 transition hover:border-[#b9ff66]/60 hover:bg-[#0b1711] md:grid-cols-[auto_1fr_auto] md:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b9ff66]/12 font-display text-xl text-[#b9ff66]">
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
                <ArrowUpRight className="hidden text-white/40 transition group-hover:text-[#b9ff66] md:block" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
