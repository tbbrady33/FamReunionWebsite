import type { Metadata } from "next";
import Link from "next/link";
import { Crest } from "@/components/crest";
import { AddToCalendar } from "@/components/add-to-calendar";
import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { games } from "@/lib/reunion";

export const metadata: Metadata = {
  title: `${games.name} · Miller Family Reunion 2026`,
  description: `${games.when} at ${games.where}. Full rules, schedule, clan format, events, and awards.`,
};

export default function HighlandGamesPage() {
  return (
    <>
      {/* Page hero */}
      <div className="tartan text-cream-100">
        <div className="bg-navy-900/85">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 px-4 py-14 text-center sm:px-6 sm:py-20">
            <div className="anim-crest">
              <Crest className="h-36 w-auto sm:h-44" />
            </div>
            <div className="anim-rise" style={{ "--d": "150ms" } as React.CSSProperties}>
              <h1 className="font-display text-4xl font-bold tracking-wide sm:text-5xl">
                {games.name}
              </h1>
              <p className="mt-3 text-lg font-semibold text-gold-300">
                {games.when}
                <span className="mx-2 text-cream-200/60">·</span>
                <span className="text-cream-200">{games.where}</span>
              </p>
            </div>
            <p
              className="anim-rise max-w-2xl leading-relaxed text-cream-200"
              style={{ "--d": "300ms" } as React.CSSProperties}
            >
              {games.intro}
            </p>
            <div className="anim-rise" style={{ "--d": "450ms" } as React.CSSProperties}>
              <AddToCalendar which="games" />
            </div>
          </div>
        </div>
        <div className="tartan-ribbon" />
      </div>

      {/* Clan format */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow="How it works" title="The Clan Format" />
        </Reveal>
        <ol className="mx-auto max-w-3xl space-y-4">
          {games.format.map((rule, i) => (
            <li key={rule}>
              <Reveal
                delay={i * 80}
                className="flex gap-4 rounded-xl border border-navy-800/15 bg-cream-50 p-5 shadow-sm"
              >
                <span className="font-display text-3xl font-bold text-gold-500 tabular-nums">
                  {i + 1}
                </span>
                <p className="self-center leading-relaxed text-ink-900">{rule}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        {/* The ten clans */}
        <Reveal>
        <div className="mx-auto mt-8 max-w-3xl rounded-xl bg-navy-800 p-6 text-cream-100">
          <h3 className="font-display text-xl font-bold text-gold-300">
            The Ten Clans
          </h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {games.clanNames.map((clan) => (
              <li
                key={clan}
                className="rounded-full border border-gold-500/40 bg-navy-950/60 px-4 py-1.5 font-display text-lg font-semibold"
              >
                {clan}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm text-cream-200/80">
            Which clan you land in is the luck of the draw — the bandana makes
            it official.
          </p>
        </div>
        </Reveal>

        {/* Who's competing */}
        <Reveal>
        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-navy-800/15 bg-cream-50 p-6">
          <h3 className="font-display text-xl font-bold text-navy-800">
            Who&apos;s Competing — 173 Millers
          </h3>
          <div className="mt-4 grid gap-3 text-center sm:grid-cols-5">
            {games.ageCounts.map((g) => (
              <div
                key={g.group}
                className="rounded-lg border border-navy-800/15 bg-cream-100 p-3"
              >
                <div className="font-display text-2xl font-bold text-navy-800">
                  {g.count}
                </div>
                <div className="mt-1 text-xs font-semibold text-ink-600">
                  {g.group}
                </div>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </Section>

      {/* General rules */}
      <Section className="bg-cream-200/50">
        <Reveal>
          <SectionHeading eyebrow="Read before you compete" title="General Rules" />
        </Reveal>
        <ul className="mx-auto max-w-3xl space-y-3">
          {games.generalRules.map((rule, i) => (
            <li key={rule}>
              <Reveal
                delay={Math.min(i * 60, 240)}
                className="flex gap-3 rounded-lg border border-gold-500/40 bg-cream-50 p-4"
              >
                <span className="text-gold-600" aria-hidden>
                  ⚔
                </span>
                <p className="leading-relaxed text-ink-900">{rule}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Section>

      {/* Day schedule */}
      <Section>
        <Reveal>
          <SectionHeading
            eyebrow="Saturday · shotgun start"
            title="Games Day Schedule"
          />
        </Reveal>
        <ol className="relative mx-auto max-w-3xl space-y-4 border-l-2 border-gold-500/50 pl-6">
          {games.schedule.map((block) => (
            <li key={block.time} className="relative">
              <span
                className={`absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 ${
                  block.highlight
                    ? "border-gold-500 bg-gold-300"
                    : "border-navy-800 bg-cream-50"
                }`}
                aria-hidden
              />
              <Reveal
                className={`rounded-xl border p-4 shadow-sm ${
                  block.highlight
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
                {"detail" in block && block.detail && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {block.detail}
                  </p>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-6 max-w-3xl text-center text-sm text-ink-600">
          Each round, every clan is at a different one of the ten stations below
          — by the Grand Finale, everyone has played everything.
        </p>
      </Section>

      {/* The ten events */}
      <Section className="bg-cream-200/50">
        <Reveal>
          <SectionHeading eyebrow="The stations" title="The Ten Events" />
        </Reveal>
        <div className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2">
          {games.events.map((ev, i) => (
            <Reveal key={ev.name} delay={(i % 2) * 100} className="h-full">
            <article className="hover-lift h-full rounded-xl border border-navy-800/15 bg-cream-50 p-5 shadow-sm">
              <h3 className="flex items-baseline gap-3">
                <span className="font-display text-3xl font-bold text-gold-500 tabular-nums">
                  {i + 1}
                </span>
                <span className="font-display text-2xl font-bold text-navy-800">
                  {ev.name}
                </span>
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {ev.description}
              </p>
            </article>
            </Reveal>
          ))}
        </div>

        {/* Grand finale */}
        <Reveal>
        <div className="mx-auto mt-8 max-w-5xl rounded-xl border-2 border-gold-500 bg-navy-800 p-6 text-cream-100 shadow-md">
          <h3 className="font-display text-2xl font-bold text-gold-300">
            🏴 {games.finale.name}
          </h3>
          <p className="mt-2 leading-relaxed text-cream-200">
            {games.finale.description}
          </p>
        </div>
        </Reveal>
      </Section>

      {/* Awards */}
      <Section>
        <Reveal>
          <SectionHeading eyebrow="Glory awaits" title="Awards" />
        </Reveal>
        <Reveal>
        <div className="mx-auto max-w-3xl rounded-xl bg-forest-600 p-6 text-cream-100">
          <ul className="grid gap-3 text-center sm:grid-cols-3">
            {games.awards.map((a) => (
              <li
                key={a}
                className="rounded-lg border border-gold-500/40 bg-forest-700/60 p-4"
              >
                <span className="text-2xl" aria-hidden>
                  🏆
                </span>
                <div className="mt-2 font-display text-lg font-bold">{a}</div>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-center text-sm text-cream-200/90">
            {games.awardsNote}
          </p>
        </div>
        </Reveal>

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
