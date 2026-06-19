import type { CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Code2,
  GitPullRequestArrow,
  Radar,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { aiDeliverySteps, aiPositioning, aiProofPoints, site } from "@/lib/site";

const terminalLines = [
  "intake.review(goal='launch-ready AI product')",
  "agent.plan -> scope, interface, data boundaries",
  "build.ui --human-review --static-export",
  "pnpm lint && pnpm typecheck && pnpm build",
  "deploy.ready: Cloudflare Pages pipeline green",
];

const diffLines = [
  { mark: "+", text: "agentic workflow map" },
  { mark: "+", text: "reviewable product UI" },
  { mark: "+", text: "tests before launch" },
  { mark: "-", text: "unclear handoff risk" },
];

export default function Banner() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#05070a]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(20,184,166,0.24),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(163,230,53,0.18),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.05),transparent_34%),linear-gradient(180deg,transparent,#05070a_86%)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:78px_78px]" />
      <div className="signal-sweep absolute left-0 right-0 top-20 h-px bg-gradient-to-r from-transparent via-[#a3e635] to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] w-full max-w-[1440px] items-center gap-6 px-5 py-9 md:gap-10 md:px-8 md:py-14 lg:grid-cols-[0.95fr_1.05fr] lg:py-14">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#b9ff66] shadow-[0_0_40px_rgba(163,230,53,0.08)] sm:text-xs md:mb-6">
            <span className="h-2 w-2 rounded-full bg-[#b9ff66] shadow-[0_0_18px_#b9ff66]" />
            {aiPositioning.eyebrow}
          </div>

          <h1 className="max-w-5xl text-balance font-display text-[2.75rem] leading-[0.9] tracking-normal text-white sm:text-7xl md:text-[5.9rem] xl:text-[6.7rem]">
            {aiPositioning.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#d8dee9]/82 md:mt-6 md:text-lg md:leading-8">
            {aiPositioning.subheadline}
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row md:mt-7">
            <Link
              href={site.calendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#f8ffe8] px-6 py-3 text-sm font-display uppercase tracking-[0.16em] text-[#05070a] transition hover:bg-[#b9ff66]"
            >
              {aiPositioning.primaryCta} <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#ai-delivery-process"
              className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/18 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#b9ff66]/70 hover:text-[#b9ff66]"
            >
              {aiPositioning.secondaryCta}
            </Link>
          </div>

          <div className="mt-9 hidden gap-3 sm:grid sm:grid-cols-3">
            {aiProofPoints.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-4"
              >
                <div className="font-display text-3xl text-[#b9ff66]">
                  {item.value}
                </div>
                <p className="mt-2 text-sm leading-5 text-white/68">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <aside
          aria-label={aiPositioning.cockpitLabel}
          className="cockpit-frame relative rounded-[2rem] border border-white/12 bg-[#070b10]/88 p-4 shadow-[0_30px_120px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-5"
        >
          <div className="mb-4 flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-white/38">
                {aiPositioning.cockpitLabel}
              </p>
              <p className="mt-2 text-sm font-semibold text-white">
                Human-reviewed AI build loop
              </p>
            </div>
            <div className="deploy-pulse flex h-12 w-12 items-center justify-center rounded-full border border-[#b9ff66]/45 bg-[#b9ff66]/10 text-[#b9ff66]">
              <Radar size={21} />
            </div>
          </div>

          <div className="grid gap-4 xl:grid-cols-[0.86fr_1.14fr]">
            <div className="grid gap-3">
              {aiDeliverySteps.map((step, index) => (
                <div
                  key={step.label}
                  className="workflow-card rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  style={{ "--delay": `${index * 0.18}s` } as CSSProperties}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#b9ff66]/12 text-[#b9ff66]">
                        {index === 0 ? <Sparkles size={17} /> : null}
                        {index === 1 ? <Bot size={17} /> : null}
                        {index === 2 ? <Code2 size={17} /> : null}
                        {index === 3 ? <ShieldCheck size={17} /> : null}
                        {index === 4 ? <GitPullRequestArrow size={17} /> : null}
                      </span>
                      <div>
                        <h2 className="text-sm font-bold text-white">
                          {step.label}
                        </h2>
                        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-white/34">
                          {step.status}
                        </p>
                      </div>
                    </div>
                    <CheckCircle2 className="h-5 w-5 text-[#b9ff66]" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    {step.detail}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-white/10 bg-[#030507] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7dd3fc]">
                    <Terminal size={15} />
                    Agent console
                  </div>
                  <span className="rounded-full bg-[#b9ff66]/12 px-2.5 py-1 text-xs font-semibold text-[#b9ff66]">
                    live
                  </span>
                </div>
                <div className="space-y-2 font-mono text-[0.72rem] leading-5 text-[#d7fbe8] sm:text-xs">
                  {terminalLines.map((line, index) => (
                    <p
                      key={line}
                      className="terminal-line"
                      style={{ "--delay": `${index * 0.22}s` } as CSSProperties}
                    >
                      <span className="text-[#b9ff66]">$</span> {line}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                    Reviewed diff
                  </p>
                  <div className="mt-4 space-y-2 font-mono text-xs">
                    {diffLines.map((line) => (
                      <div
                        key={line.text}
                        className="flex items-center gap-2 rounded-lg bg-black/30 px-3 py-2"
                      >
                        <span
                          className={
                            line.mark === "+"
                              ? "text-[#b9ff66]"
                              : "text-[#fb7185]"
                          }
                        >
                          {line.mark}
                        </span>
                        <span className="text-white/72">{line.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-[#b9ff66]/20 bg-[#b9ff66]/8 p-4">
                  <div className="progress-sweep absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#b9ff66] to-transparent" />
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b9ff66]">
                    Deploy gate
                  </p>
                  <p className="mt-3 text-2xl font-display text-white">
                    Ready after review
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/64">
                    Scope, code, tests, and launch notes move through one
                    visible system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
