export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  onDark = false,
}: {
  eyebrow: string;
  title: string;
  onDark?: boolean;
}) {
  return (
    <div className="mb-10 text-center">
      <p
        className={`mb-2 text-xs font-semibold tracking-[0.3em] uppercase ${
          onDark ? "text-gold-300" : "text-clay-600"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`heading-rule font-display text-3xl font-bold sm:text-4xl ${
          onDark ? "text-cream-100" : "text-navy-800"
        }`}
      >
        <span className="px-3">{title}</span>
      </h2>
    </div>
  );
}
