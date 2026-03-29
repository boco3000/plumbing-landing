import { Phone, Mail } from "lucide-react";

type HeroProps = {
  onRequestClick: () => void;
};

export default function Hero({ onRequestClick }: HeroProps) {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-[1400px] px-8 pt-14 pb-20 md:px-10 md:pt-[4.5rem] md:pb-24 xl:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-[620px]">
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-[-0.025em] md:text-6xl lg:text-7xl">
              24/7 Emergency
              <br />
              Plumbing in
              <br />
              Columbus
            </h1>

            <p className="mt-6 text-xl text-white/90 leading-relaxed md:text-2xl">
              Fast, reliable service for leaks, clogs, and repairs
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:+16145551234"
                className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-[#ff6b35] px-8 text-lg font-semibold text-white shadow-lg transition-colors duration-200 hover:bg-[#e85a2a] sm:w-auto"
              >
                <Phone className="h-5 w-5" />
                <span>Call Now 24/7 Service</span>
              </a>

              <button
                type="button"
                onClick={onRequestClick}
                className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-white px-8 text-lg font-semibold text-slate-900 shadow-sm transition-colors duration-200 hover:bg-slate-100 sm:w-auto"
              >
                <Mail className="h-5 w-5" />
                <span>Request Service</span>
              </button>
            </div>
          </div>

          <div className="w-full">
            <img
              src="public/images/Hero.jpg"
              alt="Plumber working under sink"
              className="w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
