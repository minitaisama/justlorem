import Image from "next/image";

const partners = [
  { name: "Avocado DAO", href: "https://www.avocadodao.io/", logo: "/partners/avocado-logo.png" },
  { name: "SEI", href: "https://www.sei.io/", logo: "/partners/sei-logo.png" },
  { name: "B3", href: "https://www.b3.fun/", logo: "/partners/b3-logo.png" },
  { name: "IOTA", href: "https://www.iota.org/", logo: "/partners/iota-logo.png" },
  { name: "DDC Holdings", href: "https://ddcholdings.co/", logo: "/partners/ddc-logo.png" },
];

export default function Partners() {
  return (
    <section className="border-y border-white/10 bg-[#030712] py-10">
      <div className="mx-auto w-full max-w-[1400px] px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.22em] text-white/45">
          Selected collaborations and ecosystems
        </p>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-24 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.035] px-5 transition hover:border-white/35 hover:bg-white/[0.06]"
              aria-label={`Open ${partner.name}`}
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={180}
                height={64}
                className={`max-h-11 w-auto object-contain opacity-85 ${
                  partner.name === "B3"
                    ? ""
                    : "[filter:brightness(0)_invert(1)]"
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
