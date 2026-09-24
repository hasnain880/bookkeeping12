import type { ReactNode } from "react";
import { FadeIn } from "./fade-in";

interface SectionHeadingProps {
  kicker: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <FadeIn
      className={`flex flex-col gap-4 ${
        centered ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-100/70 px-4 py-1.5 text-[11px] font-bold tracking-[0.18em] text-brand-700">
        {kicker}
      </span>
      <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-ink-900 sm:text-[40px] sm:leading-[1.15]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-[16px] leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeIn>
  );
}
