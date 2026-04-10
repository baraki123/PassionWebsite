export default function TheStory() {
  return (
    <section id="story" className="bg-[#F8FAF5] py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Photo */}
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="/founders.jpg"
              alt="Jaime and Cheryl Peisach, founders of Passion Growers"
              className="w-full h-full object-cover object-center"
            />
          </div>
          {/* Decorative accent */}
          <div
            className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full opacity-20"
            style={{ background: "#2D4720" }}
          />
        </div>

        {/* Copy */}
        <div>
          <p
            className="text-[#8DC63F] text-sm tracking-widest uppercase mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Story
          </p>
          <h2
            className="text-[#1E3A14] text-4xl md:text-5xl font-bold leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Everything Started
            <br />
            With Roses
          </h2>
          <div
            className="space-y-5 text-[#1E3A14]/75 text-lg leading-relaxed font-light"
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
              Growers employs 20,000 people across Colombia and Ecuador and
              supplies America&apos;s leading retailers — but the promise Jaime
              and Cheryl made on day one remains the same.
            </p>
          </div>
          <div className="mt-10 pl-6 border-l-2 border-[#8DC63F]">
            <p
              className="text-[#2D4720] text-xl md:text-2xl italic"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Grown with precision. Delivered with pride. Rooted in passion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
