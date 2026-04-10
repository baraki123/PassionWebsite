export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 bg-[#F8FAF5]/95 backdrop-blur-sm border-b border-[#8DC63F]/30">
      <div className="flex items-center">
        <img
          src="/logo.png"
          alt="Passion Growers"
          className="h-12 w-auto"
        />
      </div>
      <div className="flex items-center gap-8">
        <a
          href="#story"
          className="text-[#1E3A14] text-sm tracking-wide hover:text-[#2D4720] transition-colors hidden md:block"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Our Story
        </a>
        <a
          href="#grown-right"
          className="text-[#1E3A14] text-sm tracking-wide hover:text-[#2D4720] transition-colors hidden md:block"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Our Farms
        </a>
        <a
          href="#products"
          className="text-[#1E3A14] text-sm tracking-wide hover:text-[#2D4720] transition-colors hidden md:block"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Collections
        </a>
        <a
          href="#contact"
          className="px-5 py-2 bg-[#2D4720] text-[#F8FAF5] text-sm tracking-wide rounded-full hover:bg-[#8DC63F] hover:text-[#1E3A14] transition-colors"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
