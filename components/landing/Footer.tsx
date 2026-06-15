import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navLinks, serviceCategories, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-[#0a0f1a]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 py-12 md:px-8 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        <div>
          <Image
            src={site.logo}
            alt="Lorem Technology logo"
            width={240}
            height={82}
            className="h-20 w-auto object-contain"
          />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/66">
            {site.description}
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#030712] transition hover:bg-[#9fc2ff]"
            >
              Book a Call <ArrowUpRight size={16} />
            </Link>
            <Link
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            >
              {site.email}
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Navigate
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/72 transition hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/privacy-policy" className="text-sm text-white/72 transition hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/data-deletion" className="text-sm text-white/72 transition hover:text-white">
                Data Deletion
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
              Services
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              {serviceCategories.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="text-sm text-white/72 transition hover:text-white"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#030712] p-5">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-white/45">
            Legal entity
          </h2>
          <p className="mt-4 font-semibold text-white">{site.legalName}</p>
          <p className="mt-2 text-sm text-white/66">{site.internationalName}</p>
          <dl className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between gap-4">
              <dt className="text-white/45">Tax ID</dt>
              <dd className="font-semibold text-white">{site.taxId}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-white/45">Phone</dt>
              <dd>
                <a href={`tel:${site.phone}`} className="text-white hover:text-[#9fc2ff]">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
          <Link
            href={site.masothueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9fc2ff] hover:text-white"
          >
            View official Masothue reference <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
