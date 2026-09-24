"use client";

import { CalendarCheck2, FolderCheck, PhoneCall } from "lucide-react";
import { FadeIn } from "./fade-in";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    icon: PhoneCall,
    step: "01",
    tag: "~30 minutes",
    title: "Start with a free call",
    desc: "We talk through where your books stand, what's stressing you out, and whether we're a good fit. Zero pressure, zero jargon, and you leave with a clear next step either way.",
  },
  {
    icon: FolderCheck,
    step: "02",
    tag: "Weekly or monthly",
    title: "I take over your books",
    desc: "Securely connect your accounts — read-only bank feeds, encrypted storage, signed NDA if you'd like. Then I handle reconciliations, categorization, payroll, and bill pay on a rhythm that fits you.",
  },
  {
    icon: CalendarCheck2,
    step: "03",
    tag: "Ongoing",
    title: "Get time & clarity back",
    desc: "Each month you receive clean reports, honest insights, and a bookkeeper who actually answers the phone. That's 5+ hours a week back in your pocket — and no more 2 a.m. spreadsheet anxiety.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-mist py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="HOW IT WORKS"
          title={
            <>
              Painless from <span className="text-brand-500">day one</span>
            </>
          }
          description="Switching bookkeepers feels like a big deal, so I've made it feel like a small one. Three simple steps — most clients are fully onboarded within two weeks."
        />

        <div className="relative mt-14">
          {/* Dashed connector */}
          <div
            className="absolute left-[16%] right-[16%] top-10 hidden border-t-2 border-dashed border-brand-200 lg:block"
            aria-hidden="true"
          />

          <ol className="grid gap-6 lg:grid-cols-3">
            {STEPS.map((item, i) => (
              <FadeIn key={item.step} delay={0.1 * i} className="h-full">
                <li className="relative flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-8 shadow-[0_10px_30px_rgba(23,42,80,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(23,42,80,0.10)]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-full bg-brand-500 text-white shadow-[0_8px_20px_rgba(43,127,255,0.35)]">
                      <item.icon className="size-6" aria-hidden="true" />
                    </span>
                    <span className="text-4xl font-extrabold text-brand-100">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold tracking-tight text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-600">
                    {item.desc}
                  </p>
                  <span className="mt-6 inline-flex w-fit items-center rounded-full bg-brand-50 px-3.5 py-1.5 text-[11px] font-bold tracking-[0.14em] text-brand-700">
                    {item.tag.toUpperCase()}
                  </span>
                </li>
              </FadeIn>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
