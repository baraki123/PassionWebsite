import Reveal from "./Reveal";

export default function TheStory() {
  return (
    <section id="story" className="relative bg-[#F8FAF5] py-28 px-6 overflow-hidden">
      {/* Faint background script */}
      <p
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 right-4 md:right-12 text-[#2D4720]/[0.04] text-[10rem] md:text-[16rem] leading-none select-none"
        style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic" }}
      >
        Roses
      </p>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <Reveal>
          <div className="relative group">
            {/* Gold corner frame */}
            <span className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-[#D4A853]" aria-hidden="true" />
            <span className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-[#D4A853]" aria-hidden="true" />
            <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="/founders.jpg"
                alt="Jaime and Cheryl Peisach, founders of Passion Growers"
                className="w-full h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
              />
            </div>
            <p
              className="absolute bottom-5 left-5 right-5 text-[#F8FAF5] text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ fontFamily: "var(--font-inter)", textShadow: "0 1px 6px rgba(0,0,0,0.6)" }}
            >
              Jaime &amp; Cheryl Peisach · Founders
            </p>
          </div>
        </Reveal>

        {/* Copy */}
        <Reveal delay={150}>
          <p
            className="text-[#8DC63F] text-xs tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Story
          </p>
          <h2
            className="text-[#1E3A14] text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-10"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Everything Started{" "}
            <span className="italic font-normal text-[#2D4720]" style={{ fontFamily: "var(--font-cormorant)" }}>
              with
            </span>
            <br />
            Roses
          </h2>
          <div
            className="space-y-5 text-[#1E3A14]/80 text-lg leading-relaxed font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            <p>
              When Jaime and Cheryl started, they simply followed their passion.
              The allure of being surrounded by beautiful flowers — and growing
              something that delivers happiness. Flowers that show up in
              life&apos;s most intimate moments, its biggest celebrations, its
              most beautiful memories.
            </p>
            <p>
              That love for what they do has never changed. Today, Passion
              Growers employs 20,000 Cultivators across Colombia and Ecuador and
              supplies America&apos;s leading retailers — but the promise Jaime
              and Cheryl made on day one remains the same.
            </p>
          </div>
          <div className="mt-12 pl-6 border-l-2 border-[#D4A853]">
            <p
              className="text-[#2D4720] text-2xl md:text-3xl italic leading-snug"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Grown with precision. Delivered with pride.
              <br />
              Rooted in passion.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
