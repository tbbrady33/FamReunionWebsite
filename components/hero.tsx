import { Crest } from "@/components/crest";
import { Countdown } from "@/components/countdown";
import { AddToCalendar } from "@/components/add-to-calendar";
import { event } from "@/lib/reunion";

export function Hero() {
  return (
    <div className="tartan text-cream-100">
      <div className="bg-navy-900/85">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6 sm:py-24">
          <Crest className="h-44 w-auto drop-shadow-lg sm:h-56" />

          <div>
            <p className="mb-3 text-sm font-semibold tracking-[0.35em] uppercase text-gold-300">
              {event.family}
            </p>
            <h1 className="font-display text-5xl font-bold tracking-wide sm:text-6xl">
              Family Reunion
            </h1>
            <p className="mt-3 font-display text-xl text-cream-200 sm:text-2xl">
              {event.subtitle} · {event.year}
            </p>
          </div>

          <div className="flex flex-col items-center gap-1 text-cream-200">
            <p className="text-lg font-semibold text-gold-300">{event.dates}</p>
            <p>
              {event.venue.name} ·{" "}
              <a
                href={event.venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-gold-500/60 underline-offset-4 hover:text-gold-300"
              >
                {event.venue.address}
              </a>
            </p>
            <p className="text-sm text-cream-200/80">
              Check-in {event.checkIn} · Check-out {event.checkOut}
            </p>
          </div>

          <Countdown />

          <AddToCalendar which="reunion" />

          <p className="max-w-2xl font-display text-lg italic text-cream-200/90">
            {event.tagline}
          </p>
        </div>
      </div>
      <div className="tartan-ribbon" />
    </div>
  );
}
