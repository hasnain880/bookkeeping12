"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b bg-white/85 backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-brand-100 shadow-[0_8px_30px_rgba(23,42,80,0.08)]"
          : "border-transparent bg-white/60"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link href="#top" className="group flex min-w-0 items-center gap-3" aria-label="NW's Not Just Bookkeeping — back to top">
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-500 text-lg font-extrabold text-white shadow-[0_6px_16px_rgba(43,127,255,0.35)] transition-transform duration-300 group-hover:scale-105">
            NW
          </span>
          <span className="flex min-w-0 flex-col leading-tight">
            <span className="truncate text-[17px] font-extrabold tracking-tight text-ink-900">
              NW&apos;s Not Just Bookkeeping
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-ink-400">
              Accurate Books · Better Business
            </span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-[15px] font-semibold text-ink-600 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2.5px] after:w-0 after:rounded-full after:bg-brand-500 after:transition-all after:duration-300 hover:text-brand-600 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="hidden rounded-full bg-brand-500 px-5 py-2.5 text-[15px] font-bold text-white shadow-[0_8px_20px_rgba(43,127,255,0.3)] transition-all hover:bg-brand-600 hover:shadow-[0_10px_24px_rgba(43,127,255,0.4)] sm:inline-flex"
          >
            <Link href="#contact">
              Let&apos;s Connect
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-brand-100 text-ink-700 md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 border-brand-100">
              <SheetTitle className="text-base font-extrabold text-ink-900">
                NW&apos;s Not Just Bookkeeping
              </SheetTitle>
              <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-[15px] font-semibold text-ink-700 transition-colors hover:bg-mist hover:text-brand-600"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-4 rounded-full bg-brand-500 font-bold text-white hover:bg-brand-600">
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Let&apos;s Connect
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
