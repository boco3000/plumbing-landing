const steps = [
  {
    number: "1",
    title: "Call or request service",
    description: "Reach out via phone or our contact form.",
  },
  {
    number: "2",
    title: "We diagnose",
    description: "Our expert assesses the issue on-site.",
  },
  {
    number: "3",
    title: "We fix it",
    description: "Quick, professional repair with warranty.",
  },
]

export default function Process() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-10 md:py-20 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] text-[#0f537a] md:text-[2.5rem]">
            How It Works
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3 md:gap-6">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#ff6b35] text-2xl font-semibold text-white">
                {step.number}
              </div>

              <h3 className="mt-5 text-xl font-semibold tracking-[-0.015em] text-[#0f537a] md:text-[1.35rem]">
                {step.title}
              </h3>

              <p className="mt-3 text-base leading-7 text-slate-600 md:text-[1.05rem]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
