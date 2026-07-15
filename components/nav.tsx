import Link from "next/link";
import { Crest } from "@/components/crest";

const links = [
  { href: "/#schedule", label: "Schedule" },
  { href: "/highland-games/", label: "Highland Games" },
  { href: "/#lodging", label: "Lodging & Costs" },
  { href: "/#family-leads", label: "Family Leads" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/30 bg-navy-900/95 text-cream-100 backdrop-blur">
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <Link href="/" className="flex items-center gap-3">
          <Crest className="h-10 w-auto" />
          <span className="font-display text-lg font-semibold tracking-wide sm:text-xl">
            Miller Family Reunion
            <span className="ml-2 text-gold-400">2026</span>
          </span>
        </Link>
        <ul className="hidden items-center gap-6 text-sm font-medium sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-cream-200 transition-colors hover:text-gold-300"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile: just the games link — the page itself scrolls */}
        <Link
          href="/highland-games/"
          className="rounded border border-gold-500/60 px-3 py-1.5 text-xs font-semibold tracking-wide text-gold-300 sm:hidden"
        >
          Highland Games
        </Link>
      </nav>
    </header>
  );
}
