"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Cloud,
  DollarSign,
  FileText,
  GraduationCap,
  Heart,
  Mail,
} from "lucide-react";
import { FadeIn } from "./fade-in";

const HERO_FEATURES = [
  {
    icon: FileText,
    title: "Monthly Reconciliations",
    desc: "Accurate and up-to-date",
  },
  {
    icon: BarChart3,
    title: "Bookkeeping Cleanup",
    desc: "Get organized and back on track",
  },
  {
    icon: DollarSign,
    title: "Financial Reporting",
    desc: "Clear reports to understand your business",
  },
  {
    icon: Cloud,
    title: "Remote & Reliable",
    desc: "Professional support you can count on",
  },
];

function Sparks({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 27C10 22.5 12 19.5 15 15.5"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M17.5 24.5C19 19.5 20 15.5 20.5 11"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path
        d="M26.5 21.5C27.5 17.5 28 14.5 28 11.5"
        stroke="currentColor"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HandUnderline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 10" fill="none" className={className} aria-hidden="true">
      <path
        d="M3 6.5C30 2.5 58 8.5 90 5C122 1.5 150 7.5 177 4"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft background accents */}
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] size-[540px] rounded-full bg-brand-50 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/2 left-[-12%] size-[420px] rounded-full bg-mist blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
          {/* ---------- Left column ---------- */}
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/70 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-brand-700">
                BOOKKEEPING THAT GIVES YOU
              </span>
            </FadeIn>

            <FadeIn delay={0.08}>
              <h1 className="mt-5 text-[44px] font-extrabold leading-[1.02] tracking-tight text-ink-900 sm:text-6xl xl:text-[76px]">
                More time to
                <br />
                <span className="relative inline-block text-brand-500">
                  grow.
                  <HandUnderline className="absolute -bottom-1 left-1 h-2.5 w-[86%] text-brand-200" />
                </span>
                <Sparks className="ml-2 inline-block h-8 w-8 align-top text-brand-500 sm:h-10 sm:w-10" />
              </h1>
            </FadeIn>

            <FadeIn delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
                I help small business owners save 5+ hours a week by taking
                bookkeeping completely off their plate — so they can focus on
                what they do best.
              </p>
            </FadeIn>

            <FadeIn delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-500 px-7 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(43,127,255,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_14px_30px_rgba(43,127,255,0.45)]"
                >
                  How I Can Help
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-7 py-3.5 text-[15px] font-bold text-brand-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-200"
                >
                  View Services
                </Link>
              </div>
            </FadeIn>

            {/* Feature mini-grid */}
            <FadeIn delay={0.32}>
              <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-brand-100 pt-8 xl:grid-cols-4">
                {HERO_FEATURES.map((feature) => (
                  <li key={feature.title} className="group">
                    <span className="grid size-11 place-items-center rounded-xl bg-brand-100 text-brand-600 transition-colors duration-300 group-hover:bg-brand-500 group-hover:text-white">
                      <feature.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-3 text-[15px] font-bold leading-snug text-ink-900">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-ink-500">
                      {feature.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>

          {/* ---------- Right column: photo blob ---------- */}
          <FadeIn delay={0.15} className="relative">
            <div className="relative mx-auto w-full max-w-[500px] pb-10 pt-6 lg:pb-14">
              {/* Handwritten note */}
              <div className="absolute -top-1 right-0 z-10 hidden rotate-[-4deg] text-center sm:block">
                <p className="font-hand text-[26px] font-semibold leading-[1.15] text-brand-600">
                  Small business
                  <br />
                  is my business
                  <Heart
                    className="ml-1 inline size-4 -translate-y-1 fill-brand-500 text-brand-500"
                    aria-hidden="true"
                  />
                </p>
                <HandUnderline className="mx-auto mt-1 h-2 w-32 text-brand-400" />
              </div>

              {/* Blob photo */}
              <div className="animate-blob relative aspect-[10/11] w-full overflow-hidden bg-blob shadow-[0_30px_70px_rgba(27,58,110,0.18)]">
                <Image
                  src="/images/owner/hero-lifestyle.jpg"
                  alt="Nicole, owner and bookkeeper of NW's Not Just Bookkeeping, smiling at her desk with her laptop and a coffee"
                  fill
                  priority
                  loading="eager"
                  fetchPriority="high"
                  sizes="(min-width: 1024px) 500px, 100vw"
                  className="object-cover object-[center_20%]"
                />
              </div>

              {/* Certification chip */}
              <div className="animate-float absolute bottom-16 left-0 z-10 hidden items-center gap-2 rounded-full border border-brand-100 bg-white/95 px-4 py-2 shadow-[0_12px_30px_rgba(23,42,80,0.12)] backdrop-blur sm:flex">
                <GraduationCap className="size-4 text-brand-500" aria-hidden="true" />
                <span className="text-[13px] font-bold text-ink-800">
                  Bookkeeping &amp; Tax certification in progress
                </span>
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-1 right-0 z-10 flex max-w-[290px] items-center gap-3 rounded-3xl border border-brand-100 bg-white/95 p-4 pr-6 shadow-[0_20px_50px_rgba(23,42,80,0.16)] backdrop-blur sm:-right-4 sm:p-5 sm:pr-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-500">
                  <Heart className="size-5 fill-brand-500" aria-hidden="true" />
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-bold tracking-[0.18em] text-ink-400">
                    YOUR BUSINESS.
                  </span>
                  <span className="text-[16px] font-extrabold leading-snug text-ink-900 sm:text-[17px]">
                    You run it. I&apos;ll handle the books.
                  </span>
                </span>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ---------- Contact strip ---------- */}
        <FadeIn delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-4 rounded-[28px] border border-brand-100 bg-mist/80 p-4 sm:p-5 md:flex-row md:justify-between lg:mt-16">
            <div className="flex items-center gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-full border border-brand-100 bg-white text-brand-500">
                <Mail className="size-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-ink-900 sm:text-base">
                  Let&apos;s talk about how I can help your business grow.
                </span>
                <span className="text-[11px] font-bold tracking-[0.18em] text-ink-400">
                  EMAIL ME TODAY
                </span>
              </div>
            </div>
            <a
              href="mailto:nwnotjustbookkeeping23@gmail.com"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-brand-500 px-6 py-3.5 text-[15px] font-bold text-white shadow-[0_10px_24px_rgba(43,127,255,0.3)] transition-all duration-300 hover:bg-brand-600 md:w-auto"
            >
              <Mail className="size-4" aria-hidden="true" />
              nwnotjustbookkeeping23@gmail.com
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
