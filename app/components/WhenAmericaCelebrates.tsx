import Reveal from "./Reveal";

const events = [
  {
    name: "Kentucky Derby",
    caption: "The Run for the Roses. Our roses.",
    img: "/event-kentucky-derby.jpg",
  },
  {
    name: "Indy 500",
    caption: "Victory Lane. Every year.",
    img: "/event-indy-500.jpg",
  },
  {
    name: "Rose Bowl",
    caption: "Official Rose of the Rose Bowl Game.",
    img: "/event-rose-bowl.jpg",
  },
  {
    name: "Tony Awards",
    caption: "Where Broadway meets bloom.",
    img: "/event-tony-awards.jpg",
  },
  {
    name: "Miss America",
    caption: "She carries our flowers. We carry her story.",
    img: "/event-miss-america.jpg",
  },
];

function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2 L13.6 9.4 L21 11 L13.6 12.6 L12 20 L10.4 12.6 L3 11 L10.4 9.4 Z" />
    </svg>
  );
}

export default function WhenAmericaCelebrates() {
  return (
    <section className="relative bg-[#1E3A14] py-28 px-6 overflow-hidden">
      {/* Ambient gold haze */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(212,168,83,0.08) 0%, rgba(212,168,83,0) 55%)",
        }}
      />

      {/* Header */}
      <Reveal className="relative max-w-5xl mx-auto text-center mb-20">
        <p
          className="text-[#D4A853] text-xs tracking-[0.4em] uppercase mb-5"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Social Proof
        </p>
        <h2
          className="text-[#F8FAF5] text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          When America Celebrates,
          <br />
          <span className="italic font-normal text-[#8DC63F]" style={{ fontFamily: "var(--font-cormorant)" }}>
            Passion Flowers
          </span>{" "}
          Are There.
        </h2>
      </Reveal>

      {/* Event mosaic */}
      <div className="relative max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
        {events.map((event, i) => (
          <Reveal key={event.name} delay={i * 90} className="group">
            <div className="flex flex-col cursor-default">
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl ring-1 ring-[#8DC63F]/15 group-hover:ring-[#D4A853]/50 transition-all duration-500">
                <img
                  src={event.img}
                  alt={event.name}
                  className="w-full h-full object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(30,58,20,0.55) 100%)",
                  }}
                />
              </div>

              <div className="pt-5 px-1">
                <Sparkle className="text-[#D4A853] mb-2" />
                <p
                  className="text-[#F8FAF5] text-xl font-bold leading-tight mb-1.5 tracking-tight"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {event.name}
                </p>
                <div className="h-px w-8 bg-[#D4A853]/60 mb-2.5 transition-all duration-500 group-hover:w-14 group-hover:bg-[#D4A853]" />
                <p
                  className="text-[#EEF5E5]/75 text-sm leading-snug font-light"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  {event.caption}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Forrest Gump line */}
      <Reveal delay={200} className="relative max-w-3xl mx-auto text-center mt-20 mb-10">
        <p
          className="text-[#F8FAF5]/90 text-xl md:text-2xl leading-relaxed italic"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          From Pasadena to the Indy Speedway. From Broadway to the Winner&apos;s Circle.
          <br />
          Wherever America gathers for its greatest moments — our flowers are there.
        </p>
      </Reveal>

      {/* Brand promise */}
      <Reveal delay={300} className="relative text-center mt-8">
        <div className="inline-flex items-center gap-5">
          <span className="h-px w-10 bg-[#D4A853]/50" />
          <p
            className="text-[#D4A853] text-2xl md:text-4xl tracking-[0.3em] uppercase"
            style={{ fontFamily: "var(--font-cormorant)" }}
          >
            Passion Perfect
          </p>
          <span className="h-px w-10 bg-[#D4A853]/50" />
        </div>
      </Reveal>
    </section>
  );
}
