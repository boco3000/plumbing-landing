export default function Navbar() {
  return (
    <nav className="top-0 z-40 bg-gradient-to-r from-[#0f537a]/95 to-[#0e4f74]/95 text-white backdrop-blur sm:sticky">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-10 xl:px-12">
        <div className="flex items-center gap-3">
          <img
            src="/images/flow-logo.jpg"
            alt="Flow Plumbing logo"
            className="h-10 w-auto rounded-md"
          />
          <span className="text-sm font-semibold tracking-wide text-white/95 sm:text-base">
            Flow Plumbing
          </span>
        </div>

        <a
          href="tel:+16145551234"
          className="hidden items-center gap-2 text-sm font-semibold text-white transition-colors duration-200 hover:text-[#ff6b35] sm:inline-flex"
        >
          <span>📞</span>
          <span>(614) 555-0123</span>
        </a>
      </div>
    </nav>
  );
}
