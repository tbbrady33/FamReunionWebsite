"use client";

import { useSyncExternalStore } from "react";
import { event } from "@/lib/reunion";

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function partsUntil(target: number, now: number): Parts | null {
  const diff = target - now;
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor(diff / 3_600_000) % 24,
    minutes: Math.floor(diff / 60_000) % 60,
    seconds: Math.floor(diff / 1_000) % 60,
  };
}

function subscribe(onTick: () => void) {
  const id = setInterval(onTick, 1000);
  return () => clearInterval(id);
}

// Whole-second timestamp so the snapshot only changes once per tick.
const getNow = () => Math.floor(Date.now() / 1000) * 1000;
// Server (and first hydration render) sees 0 → placeholder → no mismatch.
const getServerNow = () => 0;

export function Countdown() {
  const target = new Date(event.startISO).getTime();
  const now = useSyncExternalStore(subscribe, getNow, getServerNow);

  if (now === 0) {
    // static placeholder keeps layout stable before hydration
    return (
      <CountdownFrame parts={{ days: 0, hours: 0, minutes: 0, seconds: 0 }} dim />
    );
  }

  const parts = partsUntil(target, now);

  if (parts === null) {
    return (
      <p className="font-display text-2xl font-semibold text-gold-300">
        The reunion is here — welcome to Bear Lake!
      </p>
    );
  }

  return <CountdownFrame parts={parts} />;
}

function CountdownFrame({ parts, dim = false }: { parts: Parts; dim?: boolean }) {
  const cells: { value: number; label: string }[] = [
    { value: parts.days, label: "Days" },
    { value: parts.hours, label: "Hours" },
    { value: parts.minutes, label: "Minutes" },
    { value: parts.seconds, label: "Seconds" },
  ];
  return (
    <div
      className={`flex justify-center gap-3 sm:gap-5 ${dim ? "opacity-0" : ""}`}
      aria-label="Countdown to the reunion"
    >
      {cells.map((c) => (
        <div
          key={c.label}
          className="w-16 rounded-lg border border-gold-500/40 bg-navy-950/60 py-3 sm:w-20"
        >
          <div className="font-display text-2xl font-bold text-gold-300 tabular-nums sm:text-3xl">
            {String(c.value).padStart(2, "0")}
          </div>
          <div className="mt-1 text-[10px] font-semibold tracking-[0.2em] uppercase text-cream-200/80">
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
