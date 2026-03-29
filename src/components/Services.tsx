import { Droplets, Wrench, Flame, Clock3 } from "lucide-react"

const services = [
  {
    title: "Drain Cleaning",
    description: "Clear stubborn clogs quickly and safely.",
    icon: Droplets,
  },
  {
    title: "Leak Repair",
    description: "Stop leaks before they cause costly damage.",
    icon: Wrench,
  },
  {
    title: "Water Heater",
    description: "Repair or replace units with expert care.",
    icon: Flame,
  },
  {
    title: "Emergency Service",
    description: "24/7 response when plumbing issues can't wait.",
    icon: Clock3,
  },
]

export default function Services() {
  return (
    <section className="bg-white text-slate-900">
      <div className="mx-auto max-w-[1400px] px-8 py-14 md:px-10 md:py-[4.5rem] xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] text-[#0f537a] md:text-[2.5rem]">
            Our Services
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">
            Fast, reliable plumbing solutions for urgent repairs and everyday needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ff7a4d] hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0f537a]/8">
                  <Icon className="h-6 w-6 text-[#0f537a]" />
                </div>

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.015em] text-slate-900 md:text-xl">
                  {service.title}
                </h3>

                <p className="mt-3 text-base leading-7 text-slate-600">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
