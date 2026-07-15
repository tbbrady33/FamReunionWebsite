import { Crest } from "@/components/crest";
import { event } from "@/lib/reunion";

export function Footer() {
  return (
    <footer className="tartan text-cream-100">
      <div className="bg-navy-900/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-12 text-center sm:px-6">
          <Crest className="h-20 w-auto" />
          <p className="font-display text-xl font-semibold tracking-wide text-gold-300">
            {event.motto}
          </p>
          <p className="text-sm text-cream-200">
            {event.venue.name} · {event.venue.address}
          </p>
          <p className="max-w-xl text-sm leading-relaxed text-cream-200/80">
            {event.mission}
          </p>
        </div>
      </div>
    </footer>
  );
}
