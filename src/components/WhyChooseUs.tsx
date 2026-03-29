import { Clock3, BadgeDollarSign, MapPin, ShieldCheck } from "lucide-react"

const reasons = [
  {
    title: "Same-day service",
    description: "We respond quickly and get the job done fast.",
    icon: Clock3,
  },
  {
    title: "Upfront pricing",
    description: "No hidden fees or surprise charges.",
    icon: BadgeDollarSign,
  },
  {
    title: "Local technicians",
    description: "Columbus-based pros who know the area.",
    icon: MapPin,
  },
  {
    title: "Warranty-backed work",
    description: "All repairs come with our quality guarantee.",
    icon: ShieldCheck,
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-10 md:py-20 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] text-[#0f537a] md:text-[2.5rem]">
            Why Choose Us
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-x-12 gap-y-8 sm:grid-cols-2">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff6b35] text-white">
                  <Icon className="h-5 w-5" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold tracking-[-0.015em] text-[#0f537a] md:text-[1.35rem]">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-slate-600 md:text-[1.05rem]">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
