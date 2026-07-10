import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs font-semibold text-slate-500">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {item.href ? (
              <Link href={item.href} className="inline-flex min-h-11 items-center transition hover:text-[#0a1b33]">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#0a1b33]">
                {item.label}
              </span>
            )}
            {index < items.length - 1 ? (
              <ChevronRight size={13} aria-hidden="true" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
