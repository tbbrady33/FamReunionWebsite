import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { costs, event, games } from "@/lib/reunion";

const facts = [
  {
    icon: "📅",
    label: "When",
    value: event.dates,
    sub: `Check-in ${event.checkIn}`,
    href: "/#schedule",
    external: false,
  },
  {
    icon: "📍",
    label: "Where",
    value: event.venue.name,
    sub: event.venue.address,
    href: event.venue.mapsUrl,
    external: true,
  },
  {
    icon: "💵",
    label: "Cost",
    value: `${costs.perNight.price}/night · 13 & older`,
    sub: "Kids 12 & under free · $25 day guests",
    href: "/#lodging",
    external: false,
  },
  {
    icon: "🏴",
    label: "Highland Games",
    value: "Saturday · 10:00 AM",
    sub: games.where,
    href: "/highland-games/",
    external: false,
  },
];

/** At-a-glance tiles under the hero — the four things everyone asks first. */
export function QuickFacts() {
  return (
    <div className="border-b border-navy-800/10 bg-cream-50">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-3 px-4 py-6 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {facts.map((f, i) => {
          const inner = (
            <>
              <span className="text-2xl" aria-hidden>
                {f.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[10px] font-bold tracking-[0.2em] uppercase text-clay-600">
                  {f.label}
                </span>
                <span className="block truncate font-semibold text-navy-800">
                  {f.value}
                </span>
                <span className="block truncate text-xs text-ink-600">
                  {f.sub}
                </span>
              </span>
            </>
          );
          const cls =
            "hover-lift flex items-center gap-3 rounded-lg border border-navy-800/10 bg-cream-100 px-4 py-3";
          return (
            <Reveal key={f.label} delay={i * 70}>
              {f.external ? (
                <a
                  href={f.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cls}
                >
                  {inner}
                </a>
              ) : (
                <Link href={f.href} className={cls}>
                  {inner}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
