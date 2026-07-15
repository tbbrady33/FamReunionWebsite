import Link from "next/link";
import { Section, SectionHeading } from "@/components/section";
import { schedule, type ScheduleItem } from "@/lib/reunion";

const kindStyles: Record<NonNullable<ScheduleItem["kind"]>, string> = {
  meal: "border-forest-600/40 bg-forest-600/5",
  activity: "border-navy-800/20 bg-white/60",
  program: "border-clay-600/40 bg-clay-600/5",
  highland: "border-gold-500 bg-gold-500/10",
};

const kindLabels: Record<NonNullable<ScheduleItem["kind"]>, string> = {
  meal: "Meal",
  activity: "Activity",
  program: "Program",
  highland: "Highland Games",
};

const kindLabelStyles: Record<NonNullable<ScheduleItem["kind"]>, string> = {
  meal: "text-forest-600",
  activity: "text-navy-600",
  program: "text-clay-600",
  highland: "text-gold-600",
};

export function Schedule() {
  return (
    <Section id="schedule">
      <SectionHeading eyebrow="August 13–16, 2026" title="Reunion Schedule" />

      <div className="grid gap-8 lg:grid-cols-2">
        {schedule.map((day) => (
          <article
            key={day.id}
            className="overflow-hidden rounded-xl border border-navy-800/15 bg-cream-50 shadow-sm"
          >
            <header className="bg-navy-800 px-5 py-4 text-cream-100">
              <h3 className="font-display text-2xl font-bold">
                {day.name}{" "}
                <span className="text-base font-medium text-gold-300">
                  {day.date}
                </span>
              </h3>
              <p className="text-sm text-cream-200/90">{day.headline}</p>
            </header>

            <ol className="space-y-3 p-5">
              {day.items.map((item) => (
                <li
                  key={`${day.id}-${item.time}-${item.title}`}
                  className={`rounded-lg border p-3 ${kindStyles[item.kind ?? "activity"]}`}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <span className="font-semibold text-navy-800">
                      {item.title}
                    </span>
                    <span className="shrink-0 text-sm font-semibold text-ink-600 tabular-nums">
                      {item.time}
                    </span>
                  </div>
                  {item.detail && (
                    <p className="mt-1 text-sm leading-relaxed text-ink-600">
                      {item.detail}
                    </p>
                  )}
                  <p
                    className={`mt-1 text-[10px] font-bold tracking-[0.2em] uppercase ${kindLabelStyles[item.kind ?? "activity"]}`}
                  >
                    {kindLabels[item.kind ?? "activity"]}
                    {item.kind === "highland" && (
                      <>
                        {" · "}
                        <Link
                          href="/highland-games/"
                          className="underline underline-offset-2 hover:text-gold-500"
                        >
                          Full rules & schedule →
                        </Link>
                      </>
                    )}
                  </p>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>
    </Section>
  );
}
