"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crest } from "@/components/crest";

const links = [
  { href: "/#schedule", section: "schedule", label: "Schedule" },
  { href: "/highland-games/", section: null, label: "Highland Games" },
  { href: "/#lodging", section: "lodging", label: "Lodging & Costs" },
  { href: "/#family-leads", section: "family-leads", label: "Family Leads" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const onGamesPage = pathname.startsWith("/highland-games");

  // Shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollspy: highlight the section currently in view (home page only).
  useEffect(() => {
    if (onGamesPage) return;
    const ids = links.map((l) => l.section).filter(Boolean) as string[];

    const onScroll = () => {
      const probe = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= probe && r.bottom > probe) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onGamesPage]);

  const isActive = (l: (typeof links)[number]) =>
    l.section === null ? onGamesPage : !onGamesPage && active === l.section;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gold-500/30 bg-navy-900/95 text-cream-100 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-lg shadow-navy-950/40" : ""
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Crest className="h-10 w-auto" />
          <span className="font-display text-lg font-semibold tracking-wide sm:text-xl">
            Miller Family Reunion
            <span className="ml-2 text-gold-400">2026</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`border-b-2 pb-1 transition-colors ${
                  isActive(l)
                    ? "border-gold-400 text-gold-300"
                    : "border-transparent text-cream-200 hover:text-gold-300"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded border border-gold-500/40 sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`h-0.5 w-5 bg-gold-300 transition-transform duration-200 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-gold-300 transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-gold-300 transition-transform duration-200 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out sm:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <ul className="min-h-0 border-t border-gold-500/20 px-4 [&>li]:border-b [&>li]:border-navy-700/60">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base font-medium ${
                  isActive(l) ? "text-gold-300" : "text-cream-200"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
