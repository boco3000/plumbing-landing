export default function Footer() {
  return (
    <footer className="bg-[#0f537a] border-t border-white/10 text-white/70">
      <div className="mx-auto max-w-[1400px] px-8 py-8 text-center md:px-10 xl:px-12">
        <p className="text-sm">
          © {new Date().getFullYear()} Flow Plumbing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
