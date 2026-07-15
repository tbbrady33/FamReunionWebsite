import Link from "next/link";
import { SectionHeading } from "@/components/section";
import { games } from "@/lib/reunion";

export function HighlandPreview() {
  return (
    <section id="highland-games" className="tartan scroll-mt-24 text-cream-100">
      <div className="bg-navy-900/85">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <SectionHeading
            eyebrow={games.when}
            title="The Great Douglas Miller Highland Games"
            onDark
          />

          <p className="mx-auto mb-10 max-w-3xl text-center text-lg leading-relaxed text-cream-200">
            {games.intro}
          </p>

          <div className="mb-10 grid gap-4 sm:grid-cols-3">
            <PreviewCard
              stat="8"
              label="Clans"
              detail="Age-balanced teams of 21–22, every generation represented"
            />
            <PreviewCard
              stat="3"
              label="All-Family Challenges"
              detail="Clan tug-of-war, the generations relay, and the signature crest-carry finale"
            />
            <PreviewCard
              stat="5"
              label="Championship Divisions"
              detail="From Wee Highland Champion to Highland Champion — glory for every age"
            />
          </div>

          <div className="text-center">
            <Link
              href="/highland-games/"
              className="inline-flex items-center gap-2 rounded bg-gold-500 px-6 py-3 font-semibold text-navy-950 transition-colors hover:bg-gold-300"
            >
              Full Rules & Games Schedule
              <span aria-hidden>→</span>
            </Link>
            <p className="mt-3 text-sm text-cream-200/80">{games.where}</p>
          </div>
        </div>
      </div>
      <div className="tartan-ribbon" />
    </section>
  );
}

function PreviewCard({
  stat,
  label,
  detail,
}: {
  stat: string;
  label: string;
  detail: string;
}) {
  return (
    <div className="rounded-xl border border-gold-500/40 bg-navy-950/60 p-6 text-center">
      <div className="font-display text-5xl font-bold text-gold-300">{stat}</div>
      <div className="mt-1 font-semibold tracking-wide uppercase text-cream-100">
        {label}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-cream-200/80">{detail}</p>
    </div>
  );
}
