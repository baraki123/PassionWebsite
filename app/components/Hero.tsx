export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — full-bleed farm photography */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/farm-hero.jpg')",
        }}
      />
      {/* Dark green overlay for readability */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(30, 58, 20, 0.65)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p
          className="text-[#8DC63F] text-sm tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Live Life with Passion
        </p>

        {/* Headline */}
        <h1
          className="text-[#F8FAF5] text-5xl md:text-7xl font-bold leading-tight mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Grown with Passion
          <br />
          Shipped with Precision
        </h1>

        {/* Sub-headline */}
        <p
          className="text-[#F8FAF5] text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12 font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          From our lush farms in Ecuador and Colombia, delivered fresh to your stores
        </p>

        {/* Scroll prompt */}
        <div className="flex flex-col items-center gap-3">
          <p
            className="text-[#8DC63F] text-xl md:text-2xl font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Trusted by the nation&apos;s most iconic moments
          </p>
          <div className="w-px h-12 bg-[#8DC63F]/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
