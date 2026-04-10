export default function Footer() {
  return (
    <footer className="bg-[#1E3A14] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <img
            src="/logo.png"
            alt="Passion Growers"
            className="h-10 w-auto brightness-0 invert opacity-90"
          />
        </div>
        <p
          className="text-[#F8FAF5]/25 text-xs"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          © {new Date().getFullYear()} Passion Growers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
