"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8FAF5]/95 backdrop-blur-md border-b border-[#D4A853]/25 shadow-[0_4px_20px_-10px_rgba(30,58,20,0.25)]"
          : "bg-[#F8FAF5]/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <a href="#" className="flex items-center group">
        <img
          src="/logo.png"
          alt="Passion Growers"
          className="h-12 w-auto transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </a>
      <div className="flex items-center gap-8">
        <a
          href="#story"
          className="text-[#1E3A14] text-sm tracking-wide hover:text-[#2D4720] transition-colors duration-200 hidden md:block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4A853] after:transition-all after:duration-300 hover:after:w-full"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Our Story
        </a>
        <a
          href="#grown-right"
          className="text-[#1E3A14] text-sm tracking-wide hover:text-[#2D4720] transition-colors duration-200 hidden md:block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4A853] after:transition-all after:duration-300 hover:after:w-full"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Our Farms
        </a>
        <a
          href="#products"
          className="text-[#1E3A14] text-sm tracking-wide hover:text-[#2D4720] transition-colors duration-200 hidden md:block relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-[#D4A853] after:transition-all after:duration-300 hover:after:w-full"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Collections
        </a>
        <a
          href="#contact"
          className="px-5 py-2 bg-[#2D4720] text-[#F8FAF5] text-sm tracking-wide rounded-full hover:bg-[#1E3A14] transition-all duration-300 hover:shadow-[0_8px_20px_-10px_rgba(30,58,20,0.6)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
}
