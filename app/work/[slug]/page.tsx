import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import { pageMetadata } from "@/lib/seo";
import {
  aiPositioning,
  findProject,
  findService,
  projects,
  site,
} from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    return {};
  }

  return pageMetadata({
    title: `${project.title} Case Study`,
    description: project.summary,
    path: `/work/${project.slug}`,
    image: project.image,
  });
}

export default async function WorkPage({ params }: PageProps) {
  const { slug } = await params;
  const project = findProject(slug);

  if (!project) {
    notFound();
  }

  const service = findService(project.serviceSlug);

  return (
    <main className="min-h-screen bg-[#030712] text-white">
      <Header />
      <section className="border-b border-white/10 py-20 md:py-28">
        <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
              {project.category}
            </p>
            <h1 className="mt-4 font-display text-6xl leading-none md:text-8xl">
              {project.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-white/70">
              {project.summary}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#030712] transition hover:bg-[#9fc2ff]"
              >
                Open live product <ArrowUpRight size={16} />
              </Link>
              {service ? (
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/45"
                >
                  View {service.title}
                </Link>
              ) : null}
            </div>
          </div>

          <div className="relative aspect-[1.28] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1a]">
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/55 to-transparent" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid w-full max-w-[1400px] gap-6 px-5 md:px-8 lg:grid-cols-3">
          <article className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6">
            <h2 className="font-display text-3xl text-white">Problem</h2>
            <p className="mt-4 text-sm leading-7 text-white/66">{project.problem}</p>
          </article>
          <article className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6">
            <h2 className="font-display text-3xl text-white">Scope</h2>
            <div className="mt-4 space-y-3">
              {project.scope.map((item) => (
                <p key={item} className="flex gap-3 text-sm text-white/72">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#9fc2ff]" />
                  {item}
                </p>
              ))}
            </div>
          </article>
          <article className="rounded-3xl border border-white/10 bg-[#0a0f1a] p-6">
            <h2 className="font-display text-3xl text-white">Deliverables</h2>
            <div className="mt-4 space-y-3">
              {project.deliverables.map((item) => (
                <p key={item} className="flex gap-3 text-sm text-white/72">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#9fc2ff]" />
                  {item}
                </p>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#0a0f1a] py-16">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Work with {site.name}
            </p>
            <h2 className="mt-3 font-display text-4xl text-white md:text-6xl">
              Need a similar product surface?
            </h2>
          </div>
          <Link
            href={site.calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#030712] transition hover:bg-[#9fc2ff]"
          >
            {aiPositioning.primaryCta} <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
