"use client";

import { buildICS, calendarEvents, googleCalendarUrl } from "@/lib/reunion";

/** Download an .ics built in the browser — no backend needed. */
function downloadICS(which: keyof typeof calendarEvents) {
  const ev = calendarEvents[which];
  const blob = new Blob([buildICS(ev)], {
    type: "text/calendar;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `${which === "reunion" ? "miller-family-reunion-2026" : "douglas-miller-highland-games"}.ics`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

export function AddToCalendar({
  which,
  variant = "gold",
}: {
  which: keyof typeof calendarEvents;
  variant?: "gold" | "outline";
}) {
  const base =
    "inline-flex items-center gap-2 rounded px-4 py-2 text-sm font-semibold transition-colors";
  const styles =
    variant === "gold"
      ? "bg-gold-500 text-navy-950 hover:bg-gold-300"
      : "border border-gold-500/60 text-gold-300 hover:bg-gold-500/10";

  return (
    <span className="inline-flex flex-wrap items-center justify-center gap-2">
      <button type="button" onClick={() => downloadICS(which)} className={`${base} ${styles}`}>
        <CalendarIcon />
        Add to Calendar (.ics)
      </button>
      <a
        href={googleCalendarUrl(calendarEvents[which])}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} border border-gold-500/60 text-gold-300 hover:bg-gold-500/10`}
      >
        Google Calendar
      </a>
    </span>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" />
      <path d="M1.5 6h13M5 1v3M11 1v3" />
    </svg>
  );
}
