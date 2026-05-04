export default function Footer() {
  return (
    <footer className="bg-[#1E3A14] py-12 px-6 border-t border-[#D4A853]/15">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Passion Growers"
            className="h-10 w-auto brightness-0 invert opacity-90"
          />
        </div>

        <nav className="flex items-center gap-7 text-sm">
          <a
            href="#story"
            className="text-[#F8FAF5]/70 hover:text-[#D4A853] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Story
          </a>
          <a
            href="#grown-right"
            className="text-[#F8FAF5]/70 hover:text-[#D4A853] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Our Farms
          </a>
          <a
            href="#products"
            className="text-[#F8FAF5]/70 hover:text-[#D4A853] transition-colors duration-200"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Collections
          </a>
          <a
            href="https://instagram.com/passiongrowers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Passion Growers on Instagram"
            className="text-[#F8FAF5]/70 hover:text-[#D4A853] transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="3.8" />
              <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
            </svg>
          </a>
        </nav>

        <p
          className="text-[#F8FAF5]/35 text-xs tracking-wide"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Passion Growers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
