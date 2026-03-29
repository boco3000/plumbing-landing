export default function Hero() {
  return (
    <section className="text-white">
      <div className="mx-auto max-w-[1400px] px-8 py-20 md:px-10 md:py-24 xl:px-12">
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
                className="flex w-full sm:w-auto min-h-[56px] items-center justify-center rounded-2xl bg-[#ff6b35] px-8 text-lg font-semibold text-white shadow-lg transition hover:bg-[#e85a2a]"
              >
                Call Now
              </a>

              <button className="flex w-full sm:w-auto min-h-[56px] items-center justify-center rounded-2xl bg-white px-8 text-lg font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100">
                Request Service
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
