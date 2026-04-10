export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F8FAF5 0%, #EEF5E5 50%, #F8FAF5 100%)",
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-15"
        style={{ background: "#2D4720" }}
      />
      <div
        className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-10"
        style={{ background: "#8DC63F" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className="text-[#4A7A2A] text-sm tracking-widest uppercase mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Partner With Us
        </p>
        <h2
          className="text-[#1E3A14] text-4xl md:text-6xl font-bold mb-6"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Let&apos;s Grow Together
        </h2>
        <p
          className="text-[#1E3A14]/70 text-lg leading-relaxed mb-10 font-light"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Whether you&apos;re looking to elevate your floral department, drive
          incremental sales, or bring a Passion Perfect moment to your shoppers
          — we&apos;d love to be your partner.
        </p>
        <a
          href="mailto:info@passiongrowers.com"
          className="inline-block px-10 py-4 bg-[#2D4720] text-[#F8FAF5] text-sm tracking-widest uppercase rounded-full hover:bg-[#1E3A14] transition-colors duration-300"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Get in Touch
        </a>

        {/* Trust closer */}
        <p
          className="text-[#1E3A14]/40 text-sm mt-12 tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Headquartered in Miami, FL &nbsp;·&nbsp; Growing in Colombia and
          Ecuador &nbsp;·&nbsp; Delivering Across America
        </p>
      </div>
    </section>
  );
}
