const pillars = [
  {
    label: "Our Farms",
    headline: "Rooted in Rich Soil",
    body: "200+ rose varieties. 400+ flowers. Grown and harvested every day in the highlands of Colombia and Ecuador.",
    img: "/grown-farms.jpg",
    accent: "#2D4720",
  },
  {
    label: "Our People",
    headline: "20,000 Cultivators Strong",
    body: "The only flower farm in Colombia recognized as a Great Place to Work since 2011 — and awarded Best Place to Work for Women by the Colombian government.",
    img: "/grown-people.jpg",
    accent: "#4A7A2A",
  },
  {
    label: "Our Planet",
    headline: "Beautiful Flowers, Beautiful Process",
    body: "Carbon Neutral. Florverde Certified. Climate Change Award recipient. Because doing right by the earth is doing right by everyone.",
    img: "/grown-planet.jpg",
    accent: "#D4A853",
  },
];

export default function GrownRight() {
  return (
    <section id="grown-right" className="bg-[#EEF5E5] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#4A7A2A] text-sm tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Doing Right By
          </p>
          <h2
            className="text-[#1E3A14] text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Grown Right —{" "}
            <span className="text-[#2D4720]">From the Ground Up</span>
          </h2>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.label}
              className="bg-[#F8FAF5] rounded-2xl overflow-hidden flex flex-col"
            >
              {/* Photo */}
              <div className="w-full aspect-[4/3] bg-[#EEF5E5] overflow-hidden">
                <img
                  src={pillar.img}
                  alt={pillar.label}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="p-8 flex flex-col flex-1">
                <p
                  className="text-xs tracking-widest uppercase mb-3"
                  style={{ color: pillar.accent, fontFamily: "var(--font-inter)" }}
                >
                  {pillar.label}
                </p>
                <h3
                  className="text-[#1E3A14] text-2xl font-bold mb-4"
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
          ))}
        </div>
      </div>
    </section>
  );
}
