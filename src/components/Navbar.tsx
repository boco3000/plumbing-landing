export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-[#0f537a] to-[#0c4668] text-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-8 py-5 md:px-10 xl:px-12">
        <div className="text-sm font-semibold tracking-wide text-white/90">
          Flow Plumbing
        </div>

        <a
          href="tel:+16145551234"
          className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-white"
          aria-label="Call Flow Plumbing at 614-555-0123"
        >
          <span aria-hidden="true">📞</span>
          <span>(614) 555-0123</span>
        </a>
      </div>
    </nav>
  );
}
