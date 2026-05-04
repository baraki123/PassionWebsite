import Reveal from "./Reveal";

const pillars = [
  {
    label: "Our Farms",
    headline: "Rooted in Rich Soil",
    body: "200+ rose varieties. 400+ flowers. Grown and harvested every day in the highlands of Colombia and Ecuador.",
    img: "/grown-farms.jpg",
    accent: "#2D4720",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M12 21V11" />
        <path d="M12 11c-3 0-5-2.5-5-5 3 0 5 2 5 5z" />
        <path d="M12 11c3 0 5-2.5 5-5-3 0-5 2-5 5z" />
        <path d="M12 14c-2.2 0-4-1.8-4-4 2.2 0 4 1.8 4 4z" />
        <path d="M12 14c2.2 0 4-1.8 4-4-2.2 0-4 1.8-4 4z" />
        <path d="M4 21h16" />
      </svg>
    ),
  },
  {
    label: "Our People",
    headline: "20,000 Cultivators Strong",
    body: "The only flower farm in Colombia recognized as a Great Place to Work since 2011 — and awarded Best Place to Work for Women.",
    img: "/grown-people.jpg",
    accent: "#4A7A2A",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="9" cy="8" r="3.2" />
        <circle cx="17" cy="9.5" r="2.4" />
        <path d="M3 20c.6-3.4 3.1-5.5 6-5.5s5.4 2.1 6 5.5" />
        <path d="M14.5 20c.4-2.4 2-4 4-4s2.5 1 2.5 1" />
      </svg>
    ),
  },
  {
    label: "Our Planet",
    headline: "Beautiful Flowers, Beautiful Process",
    body: "Carbon Neutral. Florverde Certified. Climate Change Award recipient. Doing right by the earth is doing right by everyone.",
    img: "/grown-planet.jpg",
    accent: "#D4A853",
    icon: (props: { className?: string }) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
];

export default function GrownRight() {
  return (
    <section id="grown-right" className="bg-[#EEF5E5] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-20">
          <p
            className="text-[#4A7A2A] text-xs tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Doing Right By
          </p>
          <h2
            className="text-[#1E3A14] text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Grown Right —{" "}
            <span className="italic font-normal text-[#2D4720]" style={{ fontFamily: "var(--font-cormorant)" }}>
              from the ground up.
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.label} delay={i * 120}>
                <div className="group relative bg-[#F8FAF5] rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(30,58,20,0.35)]">
                  {/* Top accent line */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                    style={{ background: pillar.accent }}
                  />

                  <div className="w-full aspect-[4/3] bg-[#EEF5E5] overflow-hidden">
                    <img
                      src={pillar.img}
                      alt={pillar.label}
                      className="w-full h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full"
                        style={{ background: `${pillar.accent}15`, color: pillar.accent }}
                      >
                        <Icon className="w-5 h-5" />
                      </span>
                      <p
                        className="text-xs tracking-[0.3em] uppercase"
                        style={{ color: pillar.accent, fontFamily: "var(--font-inter)" }}
                      >
                        {pillar.label}
                      </p>
                    </div>
                    <h3
                      className="text-[#1E3A14] text-2xl font-bold mb-4 leading-snug tracking-tight"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {pillar.headline}
                    </h3>
                    <p
                      className="text-[#1E3A14]/70 text-base leading-relaxed font-light"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {pillar.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
