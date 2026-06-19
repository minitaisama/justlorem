import { faqs } from "@/lib/site";

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#05070a] py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-[1400px] gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b9ff66]">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-5xl leading-none text-white md:text-7xl">
            AI speed with human control.
          </h2>
          <p className="mt-6 max-w-md text-base leading-8 text-white/64">
            The cockpit is animated, but the operating model is practical:
            scoped work, human review, data boundaries, and deployable output.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-white/10 bg-white/[0.035] p-5 open:border-[#b9ff66]/45"
              open={index === 0}
            >
              <summary className="cursor-pointer list-none text-lg font-semibold text-white marker:hidden">
                <span className="flex items-center justify-between gap-5">
                  {faq.question}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-lg text-white/70 group-open:bg-[#b9ff66] group-open:text-[#05070a]">
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
