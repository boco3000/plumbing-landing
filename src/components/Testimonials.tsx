import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Mike R.",
    text: "Showed up in 30 minutes and fixed everything. Super professional.",
  },
  {
    name: "Jessica T.",
    text: "Fair pricing and great communication. Will definitely use again.",
  },
  {
    name: "David L.",
    text: "Best plumber I've worked with. Fast, clean, and reliable.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-[1400px] px-8 py-16 md:px-10 md:py-20 xl:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-medium leading-tight tracking-[-0.02em] text-[#0f537a] md:text-[2.5rem]">
            What Customers Say
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-1 text-[#ff6b35]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#ff6b35] text-[#ff6b35]" />
                ))}
              </div>

              <p className="mt-4 text-base leading-7 text-slate-700 md:text-[1.05rem]">
                "{review.text}"
              </p>

              <p className="mt-5 text-sm font-semibold text-slate-900">
                - {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
