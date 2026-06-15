import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#030712] py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9fc2ff]">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none text-white md:text-7xl">
            Practical answers before the call.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/64">
            These answers stay visible in the HTML so users, search crawlers,
            and AI answer systems can understand the company without relying on
            client-side animation.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 open:border-[#9fc2ff]/45"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:hidden">
                <span className="flex items-center justify-between gap-5">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-white/70 group-open:bg-[#2F5FB3] group-open:text-white">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/66">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
