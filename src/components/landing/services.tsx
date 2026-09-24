"use client";

import {
  Check,
  FileText,
  Laptop,
  PieChart,
  ReceiptText,
  Sparkles,
  Users,
} from "lucide-react";
import { FadeIn } from "./fade-in";
import { SectionHeading } from "./section-heading";

const SERVICES = [
  {
    icon: FileText,
    title: "Monthly Bookkeeping",
    desc: "Transactions categorized, accounts reconciled, and your ledgers kept spotless — every single month.",
    points: [
      "Bank & credit card reconciliations",
      "Clean, categorized ledger",
      "Month-end close, on time",
    ],
  },
  {
    icon: Sparkles,
    title: "Cleanup & Catch-Up",
    desc: "Years behind? No judgment. I'll untangle the mess and get your books back on track.",
    points: [
      "Prior-year catch-up work",
      "Duplicate & error fixes",
      "Tax-season-ready tidy-up",
    ],
  },
  {
    icon: PieChart,
    title: "Financial Reporting",
    desc: "Plain-English reports that show exactly where your money goes — and where it can grow.",
    points: [
      "Monthly P&L & balance sheet",
      "Cash-flow insights",
      "Simple owner walkthroughs",
    ],
  },
  {
    icon: Users,
    title: "Payroll Support",
    desc: "Your team gets paid on time, every time, with filings handled quietly behind the scenes.",
    points: [
      "Payroll runs & direct deposit",
      "Tax filings & remittance",
      "Contractor payments",
    ],
  },
  {
    icon: ReceiptText,
    title: "Invoices & Bills",
    desc: "Money in, money out — invoices out the door fast and bills paid before they're ever late.",
    points: [
      "AR & AP management",
      "Friendly invoice follow-ups",
      "Bill-pay scheduling",
    ],
  },
  {
    icon: Laptop,
    title: "Software Setup & Training",
    desc: "Get set up right the first time. I'll configure your QuickBooks or Xero, migrate your data, and train your team—so your books are clean and ready for tax season, without the tech headaches.",
    points: [
      "QuickBooks & Xero setup",
      "Remote training & support",
      "Smooth migration from your old system",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="SERVICES"
          title={
            <>
              Bookkeeping that fits <span className="text-brand-500">your business</span>
            </>
          }
          description="Every business is different, so your bookkeeping should be too. Pick what you need today and adjust as you grow — no rigid packages, no surprise invoices."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={0.06 * i} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-200 hover:shadow-[0_18px_44px_rgba(23,42,80,0.10)]">
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                  <service.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-extrabold tracking-tight text-ink-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">
                  {service.desc}
                </p>
                <ul className="mt-5 flex flex-col gap-2.5 border-t border-brand-50 pt-5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[13.5px] font-medium text-ink-600"
                    >
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-brand-500"
                        aria-hidden="true"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
