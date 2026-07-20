"use client";

import { useEffect, useRef, type CSSProperties } from "react";

/**
 * Fades + slides children in when they scroll into view.
 *
 * Robustness: reveals immediately if already on screen at mount, uses an
 * IntersectionObserver when available, and keeps a passive scroll/resize
 * fallback so content can never stay hidden in environments where observer
 * callbacks are throttled or unavailable. The matching styles (and the
 * prefers-reduced-motion escape hatch) live in globals.css.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let revealed = false;
    let io: IntersectionObserver | null = null;

    // Reveal once the element's top has crossed the reveal line — including
    // elements already scrolled past, so fast scrolling (or scrolling back
    // up) never leaves a blank card behind.
    const inView = () =>
      el.getBoundingClientRect().top < window.innerHeight * 0.95;

    const cleanup = () => {
      io?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      el.classList.add("is-visible");
      cleanup();
    };

    function onScroll() {
      if (inView()) reveal();
    }

    if (inView()) {
      reveal();
      return;
    }

    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) reveal();
          }
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
      );
      io.observe(el);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return cleanup;
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
