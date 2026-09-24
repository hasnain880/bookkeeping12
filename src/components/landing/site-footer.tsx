import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "@/lib/site-data";

const QUICK_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink-950 text-white">
      <div className="mx-auto w-full max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_0.8fr_1fr]">
          {/* Brand */}
          <div>
            <Link href="#top" className="flex items-center gap-3" aria-label="Back to top">
              <span className="grid size-11 place-items-center rounded-full bg-brand-500 text-lg font-extrabold text-white">
                NW
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-[17px] font-extrabold tracking-tight">
                  NW&apos;s Not Just Bookkeeping
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">
                  Accurate Books · Better Business
                </span>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Bookkeeping that gives you more time to grow. Friendly, accurate,
              and completely off your plate — so you can get back to the work
              you actually love.
            </p>
            <a
              href="mailto:nwnotjustbookkeeping23@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:border-brand-400 hover:text-brand-300"
            >
              <Mail className="size-4" aria-hidden="true" />
              nwnotjustbookkeeping23@gmail.com
            </a>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer">
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/40">
              EXPLORE
            </p>
            <ul className="mt-4 flex flex-col gap-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-semibold text-white/70 transition-colors hover:text-brand-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA */}
          <div>
            <p className="text-[11px] font-bold tracking-[0.18em] text-white/40">
              READY WHEN YOU ARE
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Your books, handled. Your evenings, back. It starts with one
              free, zero-pressure call.
            </p>
            <Link
              href="#contact"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-brand-500 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(43,127,255,0.35)] transition-all hover:bg-brand-600"
            >
              Let&apos;s Connect
              <ArrowRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/40">
            © 2026 NW&apos;s Not Just Bookkeeping. All rights reserved.
          </p>
          <p className="text-xs font-semibold tracking-[0.14em] text-white/40">
            ACCURATE BOOKS · BETTER BUSINESS
          </p>
          <p className="text-xs text-white/30">
            {SITE.owner.name} — Owner &amp; Bookkeeper
          </p>
        </div>
      </div>
    </footer>
  );
}
