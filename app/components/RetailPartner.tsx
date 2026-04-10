const facilities = [
  { city: "Vista", state: "CA" },
  { city: "Calexico", state: "CA" },
  { city: "Houston", state: "TX" },
  { city: "Xenia", state: "OH" },
  { city: "Miami", state: "FL" },
];

const awards = [
  {
    logo: "/logo-kroger.png",
    name: "Kroger",
    award: "Produce & Floral Community Partner of the Year",
    year: "2025",
  },
  {
    logo: "/logo-heb.png",
    name: "HEB",
    award: "Vendor of the Year",
    year: "2024",
  },
];

export default function RetailPartner() {
  return (
    <section className="bg-[#2D4720] py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#8DC63F] text-sm tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Built for Retail
          </p>
          <h2
            className="text-[#F8FAF5] text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Partner, Coast to Coast
          </h2>
          <p
            className="text-[#F8FAF5]/75 text-lg leading-relaxed max-w-2xl mx-auto font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            When you partner with Passion Growers, you are partnering with a
            team that has made it their life&apos;s mission to deliver the
            finest flowers, at the right time, every time.
          </p>
        </div>

        {/* Facilities */}
        <div className="mb-16">
          <p
            className="text-[#8DC63F] text-xs tracking-widest uppercase text-center mb-6"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Distribution Centers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {facilities.map((f) => (
              <div
                key={`${f.city}-${f.state}`}
                className="px-5 py-3 rounded-full border border-[#F8FAF5]/20 bg-[#F8FAF5]/10"
              >
                <span
                  className="text-[#F8FAF5] text-sm font-medium"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {f.city},{" "}
                  <span className="text-[#D4A853]">{f.state}</span>
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-[#F8FAF5]/50 text-sm text-center mt-6 font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Positioned to serve your stores efficiently — wherever they are.
          </p>
        </div>

        {/* Divider */}
        <div className="w-24 h-px bg-[#8DC63F]/30 mx-auto mb-16" />

        {/* Awards */}
        <div>
          <p
            className="text-[#8DC63F] text-xs tracking-widest uppercase text-center mb-8"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Partners Say It Best
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {awards.map((award) => (
              <div
                key={award.logo}
                className="bg-[#F8FAF5]/10 border border-[#F8FAF5]/15 rounded-2xl p-8 text-center flex flex-col items-center gap-4"
              >
                <img
                  src={award.logo}
                  alt={award.name}
                  className="h-12 w-auto object-contain"
                />
                <div>
                  <p
                    className="text-[#D4A853] text-2xl font-bold mb-2"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {award.year}
                  </p>
                  <p
                    className="text-[#F8FAF5] text-lg font-semibold leading-snug"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {award.award}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p
            className="text-[#F8FAF5]/50 text-sm text-center mt-8 italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            We earn our partners&apos; trust by delivering on our promises, season after season.
          </p>
        </div>
      </div>
    </section>
  );
}
