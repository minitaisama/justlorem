import { ArrowDownRight, CheckCircle2 } from "lucide-react";
import { aiDeliverySteps } from "@/lib/site";

export default function DeliveryProcess() {
  return (
    <section
      id="ai-delivery-process"
      className="border-b border-white/10 bg-[#f8ffe8] text-[#05070a]"
    >
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-14 md:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:py-16">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.24em] text-[#365314]">
            How AI-first delivery works
          </p>
          <h2 className="mt-4 max-w-lg font-display text-5xl leading-[0.92] md:text-7xl">
            Fast does not mean unreviewed.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[#1f2937]">
            AI accelerates the loop. Senior engineering judgment decides what
            ships.
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-5">
          {aiDeliverySteps.map((step, index) => (
            <article
              key={step.label}
              className="group relative min-h-[220px] overflow-hidden rounded-3xl border border-[#05070a]/12 bg-white p-4 shadow-[0_20px_60px_rgba(5,7,10,0.08)]"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-4xl text-[#05070a]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < aiDeliverySteps.length - 1 ? (
                  <ArrowDownRight className="h-5 w-5 text-[#65a30d] transition group-hover:translate-x-1 group-hover:translate-y-1" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-[#65a30d]" />
                )}
              </div>
              <h3 className="mt-8 text-lg font-bold">{step.label}</h3>
              <p className="mt-3 text-sm leading-6 text-[#374151]">
                {step.detail}
              </p>
              <p className="absolute bottom-4 left-4 rounded-full bg-[#05070a] px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-[#b9ff66]">
                {step.status}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
