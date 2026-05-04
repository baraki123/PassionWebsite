import Reveal from "./Reveal";

const partners = [
  { logo: "/logo-kroger.png", name: "Kroger" },
  { logo: "/logo-heb.png", name: "HEB" },
];

export default function TrustBar() {
  return (
    <section className="bg-[#F8FAF5] border-y border-[#8DC63F]/15 py-10 px-6">
      <Reveal className="max-w-5xl mx-auto flex flex-col items-center gap-7">
        <p
          className="text-[#4A7A2A] text-[10px] tracking-[0.45em] uppercase font-medium"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Trusted by America&apos;s Leading Retailers
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6">
          {partners.map((p) => (
            <img
              key={p.name}
              src={p.logo}
              alt={p.name}
              className="h-9 w-auto object-contain opacity-70 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
