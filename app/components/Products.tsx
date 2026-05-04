import Reveal from "./Reveal";

const products = [
  {
    name: "Passion Petites",
    tag: "Grab & Go",
    description:
      "The perfect grab-and-go. Store-ready, rack-displayed, and sized to fit right in a car's cup holder. A proven driver of incremental sales near the register.",
    bg: "linear-gradient(135deg, #EEF5E5 0%, #8DC63F 100%)",
    img: "/product-passion-petites.png",
  },
  {
    name: "Shades of Passion",
    tag: "Fan Favorite",
    description:
      "A harmonious blend of seasonal color, curated from the finest blooms our farms have to offer. A fan favorite for over 10 years.",
    bg: "linear-gradient(135deg, #F8FAF5 0%, #EEF5E5 100%)",
    img: "/product-shades-of-passion.png",
  },
  {
    name: "Express Your Passion",
    tag: "Gift Ready",
    description:
      "Vibrant, handled, and ready to gift. Complete with a \"To and From\" tag — designed to spread joy and light up someone's day.",
    bg: "linear-gradient(135deg, #D4A853 0%, #4A7A2A 100%)",
    img: "/product-express-your-passion.png",
  },
  {
    name: "Passion Premium",
    tag: "Everyday Elegance",
    description:
      "Elegant yet approachable. Perfect for the home, as a thoughtful gift, or as a weekly ritual of self-care.",
    bg: "linear-gradient(135deg, #8DC63F 0%, #2D4720 100%)",
    img: "/product-passion-premium.png",
  },
  {
    name: "Charmed",
    tag: "Timeless",
    description:
      "Our beautiful Passion spray roses paired with gypsophila. Timeless, refined, always in season.",
    bg: "linear-gradient(135deg, #EEF5E5 0%, #4A7A2A 60%, #2D4720 100%)",
    img: "/product-charmed.png",
  },
  {
    name: "Petals of Passion",
    tag: "Luxury",
    description:
      "A celebration of love at its finest. For life's most special moments, delivered with luxury.",
    bg: "linear-gradient(135deg, #1E3A14 0%, #2D4720 50%, #4A7A2A 100%)",
    img: "/product-petals-of-passion.png",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-[#F8FAF5] py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-20">
          <p
            className="text-[#4A7A2A] text-xs tracking-[0.4em] uppercase mb-5"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Collections
          </p>
          <h2
            className="text-[#1E3A14] text-4xl md:text-5xl font-bold mb-6 tracking-tight leading-[1.1]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            A Bloom for{" "}
            <span className="italic font-normal text-[#2D4720]" style={{ fontFamily: "var(--font-cormorant)" }}>
              Every Moment
            </span>
          </h2>
          <p
            className="text-[#1E3A14]/65 text-lg leading-relaxed max-w-2xl mx-auto font-light"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            From impulse picks near the register to luxury bouquets for
            life&apos;s most special occasions — our collections are designed to
            delight every shopper and maximize every inch of your floral space.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 100}>
              <div className="group h-full rounded-2xl overflow-hidden border border-[#8DC63F]/25 bg-[#F8FAF5] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_40px_-20px_rgba(30,58,20,0.35)] hover:border-[#D4A853]/50">
                <div
                  className="w-full aspect-[4/3] relative flex items-center justify-center overflow-hidden"
                  style={{ background: product.bg }}
                >
                  {product.img ? (
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                      style={{ objectPosition: "center 15%" }}
                    />
                  ) : (
                    <span className="text-white/25 text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                      Photo: {product.name}
                    </span>
                  )}
                  <div className="absolute top-4 left-4">
                    <span
                      className="bg-[#F8FAF5]/95 text-[#1E3A14] text-[10px] tracking-[0.25em] uppercase px-3 py-1.5 rounded-full font-medium shadow-sm"
                      style={{ fontFamily: "var(--font-inter)" }}
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>

                <div className="p-7 bg-[#F8FAF5]">
                  <h3
                    className="text-[#1E3A14] text-xl font-bold mb-2.5 tracking-tight"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {product.name}
                  </h3>
                  <div className="h-px w-8 bg-[#D4A853]/70 mb-3 transition-all duration-500 group-hover:w-14 group-hover:bg-[#D4A853]" />
                  <p
                    className="text-[#1E3A14]/65 text-sm leading-relaxed font-light"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
