"use client";

import { Star } from "lucide-react";
import { FadeIn } from "./fade-in";
import { SectionHeading } from "./section-heading";

const TESTIMONIALS = [
  {
    quote:
      "Nicole took my books from a shoebox of receipts to reports I actually understand. Tax season was boring this year — in the best possible way.",
    name: "Marisol R.",
    role: "Bloom & Co. Florist",
    initials: "MR",
  },
  {
    quote:
      "I got five hours a week back. That's a whole extra day with my kids every month. Worth every penny, and then some.",
    name: "Derrick T.",
    role: "T&R Plumbing",
    initials: "DT",
  },
  {
    quote:
      "She caught a double-billed vendor I'd been paying for eight months. Honestly, she paid for herself before lunch on day one.",
    name: "Priya S.",
    role: "Studio North Design",
    initials: "PS",
  },
];

export function Testimonials() {
  return (
    <section className="bg-mist py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="KIND WORDS"
          title={
            <>
              Owners who got their <span className="text-brand-500">evenings back</span>
            </>
          }
          description="Real words from real small-business owners who handed over the receipts — literally — and never looked back."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <FadeIn key={t.name} delay={0.08 * i} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-[0_10px_30px_rgba(23,42,80,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(23,42,80,0.10)]">
                <div
                  className="flex items-center gap-1"
                  role="img"
                  aria-label="Rated 5 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className="size-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-brand-50 pt-5">
                  <span className="grid size-11 place-items-center rounded-full bg-brand-100 text-[13px] font-extrabold text-brand-700">
                    {t.initials}
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-extrabold text-ink-900">{t.name}</span>
                    <span className="text-xs font-medium text-ink-500">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
