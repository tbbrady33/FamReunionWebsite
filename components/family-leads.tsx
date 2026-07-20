import { Reveal } from "@/components/reveal";
import { Section, SectionHeading } from "@/components/section";
import { familyLeads } from "@/lib/reunion";

export function FamilyLeads() {
  return (
    <Section id="family-leads">
      <Reveal>
        <SectionHeading eyebrow="Your first point of contact" title="Family Leads" />

        <p className="mx-auto mb-10 max-w-2xl text-center text-ink-600">
          Each family branch coordinates payments, questions, and sign-ups
          through its Family Lead. Tap your branch below for contact details.
        </p>
      </Reveal>

      <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
        {familyLeads.map((fl, i) => (
          <Reveal key={fl.branch} delay={(i % 2) * 90} className="self-start">
          <details
            className="group rounded-lg border border-navy-800/15 bg-cream-50 shadow-sm transition-colors open:border-gold-500/60 hover:border-gold-500/40"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-5 py-4 [&::-webkit-details-marker]:hidden">
              <div>
                <div className="text-xs font-semibold tracking-[0.2em] uppercase text-clay-600">
                  {fl.branch} branch
                </div>
                <div className="font-display text-xl font-bold text-navy-800">
                  {fl.lead}
                </div>
              </div>
              <span
                className="text-gold-500 transition-transform duration-200 group-open:rotate-180"
                aria-hidden
              >
                ▾
              </span>
            </summary>

            <div className="border-t border-navy-800/10 px-5 py-4">
              {fl.phone || fl.email ? (
                <ul className="space-y-2 text-sm">
                  {fl.phone && (
                    <li>
                      <a
                        href={`tel:${fl.phone.replace(/[^+\d]/g, "")}`}
                        className="font-semibold text-navy-800 underline-offset-2 hover:underline"
                      >
                        ☎ {fl.phone}
                      </a>
                    </li>
                  )}
                  {fl.email && (
                    <li>
                      <a
                        href={`mailto:${fl.email}`}
                        className="font-semibold text-navy-800 underline-offset-2 hover:underline"
                      >
                        ✉ {fl.email}
                      </a>
                    </li>
                  )}
                </ul>
              ) : (
                <p className="text-sm leading-relaxed text-ink-600">
                  Contact details coming soon — in the meantime, reach out
                  through your branch&apos;s family group.
                </p>
              )}
            </div>
          </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
