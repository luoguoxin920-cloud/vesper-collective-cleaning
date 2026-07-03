export default function PageHero({ eyebrow, title, children }) {
  return (
    <section className="bg-linen">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-harbor">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        {children ? <div className="mt-5 max-w-3xl text-lg leading-8 text-ink/70">{children}</div> : null}
      </div>
    </section>
  );
}
