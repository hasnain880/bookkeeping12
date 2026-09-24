"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap } from "lucide-react";
import { FadeIn } from "./fade-in";

export function About() {
  return (
    <section id="about" className="about-section scroll-mt-24 bg-white py-20 lg:py-28">
      <div className="about-container">
        {/* ---------- Left column: photo ----------
             Swap public/images/owner/nicole-headshot.jpg to update
             (see public/images/owner/README.md for specs).          */}
        <FadeIn className="about-image">
          <div className="about-image-frame">
            <Image
              src="/images/owner/nicole-headshot.jpg"
              alt="Professional headshot of Nicole, owner of NW's Not Just Bookkeeping"
              fill
              sizes="(min-width: 1024px) 520px, 100vw"
              className="object-cover"
            />
          </div>
          <div className="about-image-chip">
            <span className="about-image-chip-icon">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <span className="about-image-chip-text">
              <strong>Bookkeeping &amp; Tax</strong> certification in progress
            </span>
          </div>
        </FadeIn>

        {/* ---------- Right column: text ---------- */}
        <div className="about-text">
          <FadeIn>
            <span className="about-eyebrow">MEET YOUR BOOKKEEPER</span>
            <h2 className="bio-heading">
              Hi, I&apos;m Nicole — the human behind the{" "}
              <span className="accent">numbers</span>.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p>
              I started NW&apos;s Not Just Bookkeeping for my family. Due to
              physical limitations, working in a traditional office isn&apos;t
              an option for me, so I decided to build a career from home doing
              what I love.
            </p>
            <p>
              Coming from a background in healthcare, I spent years managing
              billing, insurance, payments, and back-office financials.
              I&apos;ve always loved numbers and puzzles, and in February, I
              took the leap into bookkeeping — and fell in love instantly.
            </p>
            <p>
              I&apos;m currently pursuing my Universal Accounting
              certifications in both bookkeeping and tax preparation.
            </p>
          </FadeIn>

          <FadeIn delay={0.16}>
            <h3 className="subheading">My ideal clients</h3>
            <p>
              I specialize in helping small-to-medium businesses, particularly
              in the healthcare and blue-collar fields.
            </p>

            <h3 className="subheading">Beyond the books</h3>
            <p>
              When I&apos;m not crunching numbers, you can find me reading,
              cross-stitching, or doing puzzles. But my biggest motivation is
              my family.
            </p>
            <p className="mission-statement">
              My ultimate goal is to grow this business enough to bring my
              husband home — he currently works 80 hours a week in a highly
              dangerous job. Every client I help get their books in order
              helps me get one step closer to getting him back home to me and
              our two kids (16 and 7).
            </p>
          </FadeIn>

          <FadeIn delay={0.24}>
            <Link href="#contact" className="about-cta">
              Book a free call
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
