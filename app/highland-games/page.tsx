import type { Metadata } from "next";
import Link from "next/link";
import { Crest } from "@/components/crest";
import { AddToCalendar } from "@/components/add-to-calendar";
import { Section, SectionHeading } from "@/components/section";
import { games } from "@/lib/reunion";

export const metadata: Metadata = {
  title: `${games.name} · Miller Family Reunion 2026`,
  description: `${games.when} at ${games.where}. Full rules, schedule, clan format, championships, and awards.`,
};

export default function HighlandGamesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="tartan text-cream-100">
        <div className="bg-navy-900/85">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6 sm:py-20">
            <Crest className="h-32 w-auto sm:h-40" />
            <h1 className="font-display text-4xl font-bold tracking-wide sm:text-5xl">
              {games.name}
            </h1>
            <p className="text-lg font-semibold text-gold-300">
              {games.when}
              <span className="mx-2 text-cream-200/60">·</span>
              <span className="text-cream-200">{games.where}</span>
            </p>
            <p className="max-w-2xl leading-relaxed text-cream-200">
              {games.intro}
            </p>
            <AddToCalendar which="games" />
          </div>
        </div>
        <div className="tartan-ribbon" />
      </div>

      {/* Format */}
      <Section>
        <SectionHeading eyebrow="How it works" title="The Clan Format" />
        <ol className="mx-auto max-w-3xl space-y-4">
          {games.format.map((rule, i) => (
            <li
              key={rule}
              className="flex gap-4 rounded-xl border border-navy-800/15 bg-cream-50 p-5 shadow-sm"
            >
              <span className="font-display text-3xl font-bold text-gold-500 tabular-nums">
                {i + 1}
              </span>
              <p className="self-center leading-relaxed text-ink-900">{rule}</p>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-navy-800 p-6 text-cream-100">
          <h3 className="font-display text-xl font-bold text-gold-300">
            Age Divisions
          </h3>
          <div className="mt-4 grid gap-3 text-center sm:grid-cols-5">
            {games.ageGroups.map((g) => (
              <div
                key={g.name}
                className="rounded-lg border border-gold-500/30 bg-navy-950/60 p-3"
              >
                <div className="text-sm font-semibold">{g.name}</div>
                <div className="mt-1 font-display text-lg font-bold text-gold-300">
                  {g.ages}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Official rules */}
      <Section className="bg-cream-200/50">
        <SectionHeading eyebrow="Read before you compete" title="Official Rules" />
        <ul className="mx-auto max-w-3xl space-y-3">
          {games.rules.map((rule) => (
            <li
              key={rule}
              className="flex gap-3 rounded-lg border border-gold-500/40 bg-cream-50 p-4"
            >
              <span className="text-gold-600" aria-hidden>
                ⚔
              </span>
              <p className="leading-relaxed text-ink-900">{rule}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* Run of show */}
      <Section>
        <SectionHeading eyebrow="Saturday · 10:00 AM – 3:00 PM" title="Games Schedule" />
        <ol className="relative mx-auto max-w-3xl space-y-6 border-l-2 border-gold-500/50 pl-6">
          {games.schedule.map((block) => (
            <li key={block.time} className="relative">
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 ${
                  block.allFamily
                    ? "border-gold-500 bg-gold-300"
                    : "border-navy-800 bg-cream-50"
                }`}
                aria-hidden
              />
              <div
                className={`rounded-xl border p-5 shadow-sm ${
                  block.allFamily
                    ? "border-gold-500 bg-gold-500/10"
                    : "border-navy-800/15 bg-cream-50"
                }`}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold text-navy-800">
                    {block.title}
                  </h3>
                  <span className="text-sm font-semibold text-ink-600 tabular-nums">
                    {block.time}
                  </span>
                </div>
                {block.allFamily && (
                  <p className="mt-1 text-[10px] font-bold tracking-[0.25em] uppercase text-gold-600">
                    Whole clan on the field
                  </p>
                )}
                <ul className="mt-3 flex flex-wrap gap-2">
                  {block.events.map((ev) => (
                    <li
                      key={ev}
                      className="rounded-full border border-navy-800/20 bg-cream-100 px-3 py-1 text-sm text-ink-900"
                    >
                      {ev}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* Championships & awards */}
      <Section className="bg-cream-200/50">
        <SectionHeading eyebrow="Glory awaits" title="Championships & Awards" />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          <div className="rounded-xl bg-navy-800 p-6 text-cream-100">
            <h3 className="font-display text-2xl font-bold text-gold-300">
              🏆 Championship Titles
            </h3>
            <p className="mt-1 text-sm text-cream-200/80">
              Top finishers from each age division compete head-to-head.
            </p>
            <ul className="mt-4 space-y-2">
              {games.championships.map((c) => (
                <li key={c} className="flex gap-2 text-cream-100">
                  <span className="text-gold-300" aria-hidden>
                    ✦
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl bg-forest-600 p-6 text-cream-100">
            <h3 className="font-display text-2xl font-bold text-gold-300">
              🎖 Clan Awards
            </h3>
            <p className="mt-1 text-sm text-cream-200/80">
              Presented at the 2:45 PM awards ceremony.
            </p>
            <ul className="mt-4 space-y-2">
              {games.awards.map((a) => (
                <li key={a} className="flex gap-2 text-cream-100">
                  <span className="text-gold-300" aria-hidden>
                    ✦
                  </span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/#schedule"
            className="inline-flex items-center gap-2 rounded border border-navy-800/30 px-6 py-3 font-semibold text-navy-800 transition-colors hover:bg-navy-800 hover:text-cream-100"
          >
            ← Back to the full reunion schedule
          </Link>
        </div>
      </Section>
    </>
  );
}
