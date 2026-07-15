import { Section, SectionHeading } from "@/components/section";
import { familyLeads } from "@/lib/reunion";

export function FamilyLeads() {
  return (
    <Section id="family-leads">
      <SectionHeading eyebrow="Your first point of contact" title="Family Leads" />

      <p className="mx-auto mb-10 max-w-2xl text-center text-ink-600">
        Each family branch coordinates payments, questions, and sign-ups
        through its Family Lead. Find your branch below.
      </p>

      <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
        {familyLeads.map((fl) => (
          <div
            key={fl.branch}
            className="flex items-center justify-between rounded-lg border border-navy-800/15 bg-cream-50 px-5 py-4 shadow-sm"
          >
            <div>
              <div className="text-xs font-semibold tracking-[0.2em] uppercase text-clay-600">
                {fl.branch} branch
              </div>
              <div className="font-display text-xl font-bold text-navy-800">
                {fl.lead}
              </div>
            </div>
            <span className="text-gold-500" aria-hidden>
              ✦
            </span>
          </div>
        ))}
      </div>
    </Section>
  );
}
