import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F8FAF5 0%, #EEF5E5 50%, #F8FAF5 100%)",
      }}
    >
      {/* Subtle ornamental gold rules */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 hidden lg:block">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-[#D4A853]/40" />
        </div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 hidden lg:block">
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-[#D4A853]/40" />
        </div>
      </div>

      <Reveal className="relative z-10 max-w-3xl mx-auto text-center">
        <p
          className="text-[#4A7A2A] text-xs tracking-[0.4em] uppercase mb-5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Partner With Us
        </p>
        <h2
          className="text-[#1E3A14] text-4xl md:text-6xl font-bold mb-7 leading-[1.05] tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Let&apos;s Grow{" "}
          <span className="italic font-normal text-[#2D4720]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Together
          </span>
        </h2>
        <p
          className="text-[#1E3A14]/70 text-lg leading-relaxed mb-12 font-light max-w-2xl mx-auto"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Whether you&apos;re looking to elevate your floral department, drive
          incremental sales, or bring a Passion Perfect moment to your shoppers
          — we&apos;d love to be your partner.
        </p>
        <a
          href="mailto:info@passiongrowers.com"
          className="group inline-flex items-center gap-3 px-9 py-4 bg-[#2D4720] text-[#F8FAF5] text-sm tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-[#1E3A14] hover:gap-4 hover:shadow-[0_14px_30px_-15px_rgba(30,58,20,0.6)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <span>Get in Touch</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </a>

        <p
          className="text-[#1E3A14]/45 text-sm mt-14 tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Headquartered in Miami, FL &nbsp;·&nbsp; Growing in Colombia and
          Ecuador &nbsp;·&nbsp; Delivering Across America
        </p>
      </Reveal>
    </section>
  );
}
