export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24 xl:max-w-[1400px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
          {/* Left Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold leading-tight md:text-5xl">
              24/7 Emergency Plumbing
              <br />
              in Columbus
            </h1>

            <p className="mt-4 text-lg text-slate-300 md:text-xl">
              Fast, reliable service for leaks, clogs, and repairs
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* Primary CTA */}
              <a
                href="tel:+16145551234"
                className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-orange-500 px-6 text-base font-semibold text-white shadow hover:bg-orange-600"
              >
                Call Now — 24/7 Service
              </a>

              {/* Secondary CTA */}
              <button className="inline-flex min-h-[56px] items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-slate-900">
                Request Service
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full max-w-md md:max-w-lg">
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
