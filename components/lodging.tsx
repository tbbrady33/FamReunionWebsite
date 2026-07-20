import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { costs, event, homes, lodgingNote, resortAmenities } from "@/lib/reunion";

export function Lodging() {
  return (
    <Section id="lodging" className="bg-cream-200/50">
      <Reveal>
        <SectionHeading eyebrow={event.venue.name} title="Lodging & Costs" />
      </Reveal>

      {/* Reunion homes */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {homes.map((home, i) => (
          <Reveal key={home.name} delay={(i % 3) * 100} className="h-full">
          <div className="hover-lift flex h-full flex-col rounded-xl border border-navy-800/15 bg-cream-50 p-6 text-center shadow-sm">
            <h3 className="font-display text-2xl font-bold text-navy-800">
              {home.name}
            </h3>
            <p className="mt-1 font-semibold text-gold-600">
              Sleeps {home.sleeps}
            </p>
            <p className="mt-1 text-xs font-medium text-ink-600">{home.specs}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-600">
              {home.detail}
            </p>
            <a
              href={home.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto pt-3 text-sm font-semibold text-navy-800 underline decoration-gold-500/60 underline-offset-4 hover:text-gold-600"
            >
              View this home →
            </a>
          </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p className="mb-12 rounded-lg border border-gold-500/50 bg-gold-500/10 p-4 text-center text-sm font-medium text-ink-900">
          📅 {lodgingNote}
        </p>
      </Reveal>

      {/* Costs */}
      <div className="mb-12 grid gap-6 sm:grid-cols-2">
        <Reveal className="h-full">
        <div className="hover-lift h-full rounded-xl bg-navy-800 p-8 text-center text-cream-100">
          <div className="font-display text-5xl font-bold text-gold-300">
            {costs.perNight.price}
          </div>
          <div className="mt-1 text-sm font-semibold tracking-wide uppercase text-cream-200">
            {costs.perNight.unit}
          </div>
          <p className="mt-4 text-sm text-cream-200">
            Includes: {costs.perNight.includes.join(" · ")}
          </p>
          <p className="mt-3 font-display text-lg font-semibold text-gold-300">
            {costs.perNight.note}
          </p>
        </div>
        </Reveal>
        <Reveal delay={120} className="h-full">
        <div className="hover-lift h-full rounded-xl bg-forest-600 p-8 text-center text-cream-100">
          <div className="font-display text-5xl font-bold text-gold-300">
            {costs.dayGuest.price}
          </div>
          <div className="mt-1 text-sm font-semibold tracking-wide uppercase text-cream-200">
            {costs.dayGuest.unit}
          </div>
          <p className="mt-4 text-sm text-cream-200">
            Includes: {costs.dayGuest.includes.join(" · ")}
          </p>
        </div>
        </Reveal>
      </div>

      {/* Amenities + assistance */}
      <div className="grid gap-6 sm:grid-cols-2">
        <Reveal className="h-full">
        <div className="h-full rounded-xl border border-navy-800/15 bg-cream-50 p-6">
          <h3 className="font-display text-xl font-bold text-navy-800">
            Resort Amenities
          </h3>
          <ul className="mt-3 space-y-1.5 text-sm text-ink-600">
            {resortAmenities.map((a) => (
              <li key={a} className="flex gap-2">
                <span className="text-gold-600" aria-hidden>
                  ✦
                </span>
                {a}
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
        <Reveal delay={120} className="h-full">
        <div className="h-full rounded-xl border border-forest-600/30 bg-forest-600/5 p-6">
          <h3 className="font-display text-xl font-bold text-forest-700">
            Payments & Assistance
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-600">
            {costs.payment}
          </p>
          <p className="mt-3 text-sm leading-relaxed font-medium text-forest-700">
            💚 {costs.assistance}
          </p>
        </div>
        </Reveal>
      </div>
    </Section>
  );
}
