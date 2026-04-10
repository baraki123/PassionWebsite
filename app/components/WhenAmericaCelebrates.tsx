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

export default function WhenAmericaCelebrates() {
  return (
    <section className="bg-[#1E3A14] py-24 px-6">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2
          className="text-[#F8FAF5] text-4xl md:text-6xl font-bold leading-tight mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          When America Celebrates,
          <br />
          <span className="text-[#8DC63F]">Passion Growers Are There</span>
        </h2>
      </div>

      {/* Event mosaic */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {events.map((event) => (
          <div
            key={event.name}
            className="rounded-2xl overflow-hidden cursor-default flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <img
                src={event.img}
                alt={event.name}
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Text below image */}
            <div className="pt-4 px-1">
              <p
                className="text-[#D4A853] text-xs tracking-widest mb-1"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                ✦
              </p>
              <p
                className="text-[#F8FAF5] text-xl font-bold leading-tight mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {event.name}
              </p>
              <p
                className="text-[#EEF5E5]/75 text-sm leading-snug font-light"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {event.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Forrest Gump line */}
      <div className="max-w-3xl mx-auto text-center mt-16 mb-10">
        <p
          className="text-[#F8FAF5]/90 text-xl md:text-2xl leading-relaxed italic"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          From Pasadena to the Indy Speedway. From Broadway to the Winner&apos;s Circle.
          <br />
          Wherever America gathers for its greatest moments — our flowers are there.
        </p>
      </div>

      {/* Brand promise */}
      <div className="text-center mt-6">
        <p
          className="text-[#D4A853] text-2xl md:text-4xl tracking-[0.2em] uppercase"
          style={{ fontFamily: "var(--font-cormorant)" }}
        >
          Passion Perfect
        </p>
      </div>
    </section>
  );
}
