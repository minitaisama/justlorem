import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { projects, serviceCategories, site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Learn about Lorem Technology, a Ho Chi Minh City product studio building web, app, game, and software architecture work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
              About Lorem Technology
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
              A software studio for launch-ready digital products.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/70">
              Lorem Technology works with founders and digital teams to turn
              product ideas into websites, app interfaces, game-facing
              experiences, and scalable implementation plans. We keep the work
              practical: clear scope, strong UI, and architecture that can keep
              moving after launch.
            </p>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Registered company
            </p>
            <dl className="mt-5 space-y-4 text-sm">
              <div>
                <dt className="text-white/45">Legal name</dt>
                <dd className="mt-1 font-semibold text-white">{site.legalName}</dd>
              </div>
              <div>
                <dt className="text-white/45">International name</dt>
                <dd className="mt-1 text-white/80">{site.internationalName}</dd>
              </div>
              <div>
                <dt className="text-white/45">Tax ID</dt>
                <dd className="mt-1 font-semibold text-white">{site.taxId}</dd>
              </div>
              <div>
                <dt className="text-white/45">Address</dt>
                <dd className="mt-1 leading-6 text-white/80">{site.address}</dd>
              </div>
            </dl>
            <Link
              href={site.masothueUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#9fc2ff] hover:text-white"
            >
              Verify tax record on Masothue <ArrowUpRight size={15} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-[#0a0f1a] py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-4 px-5 md:grid-cols-4 md:px-8">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="rounded-3xl border border-white/10 bg-[#030712] p-5 transition hover:border-[#9fc2ff]/45"
            >
              <CheckCircle2 className="h-6 w-6 text-[#9fc2ff]" />
              <h2 className="mt-5 text-lg font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/62">
                {service.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
              Selected proof
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none md:text-7xl">
              Work across launch, product, and game surfaces.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#9fc2ff]/45"
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  {project.category}
                </p>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  {project.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
