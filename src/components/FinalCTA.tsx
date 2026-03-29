import { Phone, Mail } from "lucide-react";

type FinalCTAProps = {
  onRequestClick: () => void;
};

export default function FinalCTA({ onRequestClick }: FinalCTAProps) {
  return (
    <section className="bg-[#0f537a] text-white">
      <div className="mx-auto max-w-[1400px] px-8 py-14 text-center md:px-10 md:py-16 xl:px-12">
        <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] md:text-4xl">
          Need a plumber now?
        </h2>

        <p className="mt-4 text-base leading-7 text-white/82 md:text-lg">
          Call now for fast, reliable service.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <a
            href="tel:+16145551234"
            className="inline-flex min-h-[60px] items-center justify-center gap-2 rounded-2xl bg-[#ff6b35] px-10 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#e85a2a] md:text-xl"
          >
            <Phone className="h-5 w-5" />
            <span>Call Now (614) 555-0123</span>
          </a>

          <button
            type="button"
            onClick={onRequestClick}
            className="inline-flex min-h-[60px] items-center justify-center gap-2 rounded-2xl bg-white px-10 text-lg font-semibold text-slate-900 transition-colors duration-200 hover:bg-slate-100 md:text-xl"
          >
            <Mail className="h-5 w-5" />
            <span>Request Service</span>
          </button>
        </div>
      </div>
    </section>
  );
}
