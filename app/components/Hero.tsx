export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — full-bleed farm photography with slow Ken Burns */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat ken-burns"
          style={{ backgroundImage: "url('/farm-hero.jpg')" }}
        />
      </div>

      {/* Layered vignette: top fade for navbar, bottom fade for text legibility, soft green tone */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,58,20,0.55) 0%, rgba(30,58,20,0.25) 35%, rgba(30,58,20,0.35) 60%, rgba(30,58,20,0.7) 100%)",
        }}
      />
      {/* Subtle radial spotlight on copy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 55%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-20">
        <p
          className="text-[#8DC63F] text-sm tracking-[0.4em] uppercase mb-7 reveal is-visible"
          style={{ fontFamily: "var(--font-inter)", animation: "fade-in 1.1s ease-out both" }}
        >
          Live Life with Passion
        </p>

        <h1
          className="text-[#F8FAF5] text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.05] tracking-tight mb-7"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "0 2px 24px rgba(0,0,0,0.35)",
            animation: "fade-in-up 1.1s 0.15s ease-out both",
          }}
        >
          Grown with Passion
          <br />
          <span className="italic font-normal" style={{ fontFamily: "var(--font-cormorant)" }}>
            Shipped with
          </span>{" "}
          Precision
        </h1>

        <p
          className="text-[#F8FAF5]/95 text-lg md:text-2xl leading-relaxed max-w-2xl mx-auto mb-14 font-light"
          style={{
            fontFamily: "var(--font-inter)",
            animation: "fade-in-up 1.1s 0.35s ease-out both",
          }}
        >
          From our lush farms in Ecuador and Colombia, delivered fresh to your stores
        </p>

        {/* Scroll prompt — gold accent, more elegant */}
        <div
          className="flex flex-col items-center gap-4"
          style={{ animation: "fade-in 1.1s 0.7s ease-out both" }}
        >
          <p
            className="text-[#F8FAF5]/85 text-base md:text-lg tracking-widest"
            style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
          >
            Trusted by the nation&apos;s most iconic moments
          </p>
          <svg
            className="scroll-cue text-[#D4A853]"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
