"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeIn } from "./fade-in";
import { FAQS } from "@/lib/site-data";

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left intro */}
          <div>
            <FadeIn>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/70 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-brand-700">
                FAQ
              </span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-[40px] sm:leading-[1.15]">
                Questions? <span className="text-brand-500">Good.</span> I love
                those.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-ink-600">
                Handing your books to someone new is a trust exercise, so you
                should ask plenty before you do. Here are the answers I give
                most often — and if yours isn&apos;t here, the fastest way to
                get it is to just ask.
              </p>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="mt-8 rounded-3xl border border-brand-100 bg-mist p-6">
                <p className="text-[15px] font-bold text-ink-900">
                  Still on the fence?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                  The discovery call is free, friendly, and there&apos;s no
                  commitment — worst case, you leave with free advice.
                </p>
                <Link
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-[15px] font-bold text-brand-600 transition-colors hover:text-brand-700"
                >
                  Ask me anything
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </FadeIn>
          </div>

          {/* Right accordion */}
          <FadeIn delay={0.1}>
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  value={`faq-${i}`}
                  className="border-brand-100"
                >
                  <AccordionTrigger className="text-left text-[15.5px] font-bold text-ink-900 hover:no-underline hover:text-brand-600">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[14.5px] leading-relaxed text-ink-600">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
