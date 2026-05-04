import Reveal from "./Reveal";

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
    <section className="relative bg-[#2D4720] py-28 px-6 overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 80% 0%, rgba(212,168,83,0.10) 0%, rgba(212,168,83,0) 55%), radial-gradient(ellipse at 0% 100%, rgba(141,198,63,0.10) 0%, rgba(141,198,63,0) 50%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <Reveal className="text-center mb-20">
          <p
            className="text-[#8DC63F] text-xs tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Built for Retail
          </p>
          <h2
            className="text-[#F8FAF5] text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Partner,{" "}
            <span className="italic font-normal text-[#D4A853]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Coast to Coast
            </span>
          </h2>
          <p
            className="text-[#F8FAF5]/80 text-lg leading-relaxed max-w-2xl mx-auto font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            When you partner with Passion Growers, you are partnering with a
            team that has made it their life&apos;s mission to deliver the
            finest flowers, at the right time, every time.
          </p>
        </Reveal>

        <Reveal delay={120} className="mb-20">
          <p
            className="text-[#8DC63F] text-xs tracking-[0.4em] uppercase text-center mb-7"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Distribution Centers
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {facilities.map((f) => (
              <div
                key={`${f.city}-${f.state}`}
                className="px-5 py-3 rounded-full border border-[#F8FAF5]/20 bg-[#F8FAF5]/5 backdrop-blur-sm transition-all duration-300 hover:border-[#D4A853]/60 hover:bg-[#F8FAF5]/10 hover:-translate-y-0.5"
              >
                <span
                  className="text-[#F8FAF5] text-sm font-medium tracking-wide"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {f.city},{" "}
                  <span className="text-[#D4A853]">{f.state}</span>
                </span>
              </div>
            ))}
          </div>
          <p
            className="text-[#F8FAF5]/55 text-sm text-center mt-7 font-light italic"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Positioned to serve your stores efficiently — wherever they are.
          </p>
        </Reveal>

        <div className="w-24 h-px bg-[#D4A853]/40 mx-auto mb-20" />

        <div>
          <Reveal>
            <p
              className="text-[#8DC63F] text-xs tracking-[0.4em] uppercase text-center mb-10"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Our Partners Say It Best
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {awards.map((award, i) => (
              <Reveal key={award.logo} delay={i * 120}>
                <div className="group relative bg-[#F8FAF5]/[0.06] border border-[#F8FAF5]/15 rounded-2xl p-10 text-center flex flex-col items-center gap-5 backdrop-blur-sm transition-all duration-500 hover:border-[#D4A853]/50 hover:bg-[#F8FAF5]/[0.09] hover:-translate-y-1">
                  <img
                    src={award.logo}
                    alt={award.name}
                    className="h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                  <div>
                    <p
                      className="text-[#D4A853] text-3xl font-bold mb-1 tracking-tight"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {award.year}
                    </p>
                    <div className="h-px w-10 bg-[#D4A853]/60 mx-auto mb-3 transition-all duration-500 group-hover:w-16" />
                    <p
                      className="text-[#F8FAF5] text-base md:text-lg font-medium leading-snug"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {award.award}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={250}>
            <p
              className="text-[#F8FAF5]/55 text-base text-center mt-10 italic"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              We earn our partners&apos; trust by delivering on our promises, season after season.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
