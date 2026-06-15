import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import { findService, projects, serviceCategories, site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceCategories.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    return {};
  }

  return pageMetadata({
    title: service.title,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = findService(slug);

  if (!service) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (project) => project.serviceSlug === service.slug
  );

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
              {service.eyebrow}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-6xl leading-[0.95] md:text-8xl">
              {service.title}
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-white/70">
              {service.description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={site.calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#030712] transition hover:bg-[#9fc2ff]"
              >
                Discuss this service <ArrowUpRight size={16} />
              </Link>
              <Link
                href="/#work"
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/45"
              >
                View related work
              </Link>
            </div>
          </div>

          <aside className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Outcomes
            </h2>
            <div className="mt-5 space-y-4">
              {service.outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#9fc2ff]" />
                  <p className="text-sm leading-7 text-white/72">{outcome}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
          <h2 className="font-display text-4xl text-white md:text-6xl">
            Related work
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {(relatedProjects.length ? relatedProjects : projects.slice(0, 3)).map(
              (project) => (
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
              )
            )}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
