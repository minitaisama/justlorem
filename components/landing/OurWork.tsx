import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/site";

export default function OurWork() {
  return (
    <section id="work" className="bg-[#05070a] py-20 md:py-28">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b9ff66]">
              Selected work
            </p>
            <h2 className="mt-4 font-display text-5xl leading-none text-white md:text-7xl">
              Product surfaces ready for the AI era.
            </h2>
          </div>
          <p className="max-w-md text-base leading-8 text-white/64">
            These projects show the kind of product clarity, responsive UI, and
            implementation discipline we now pair with AI-assisted delivery
            systems.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0b1013] transition hover:border-[#b9ff66]/55"
            >
              <div className="relative aspect-[1.35] overflow-hidden bg-[#111827]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-1 text-xs font-semibold text-white">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl text-white">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/42 transition group-hover:text-[#b9ff66]" />
                </div>
                <p className="mt-3 text-sm leading-7 text-white/64">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
