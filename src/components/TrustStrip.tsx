import { Star, CheckCircle } from "lucide-react"

export default function TrustStrip() {
  return (
    <section className="border-t border-white/10 bg-slate-100 text-slate-800">
      <div className="mx-auto max-w-[1400px] px-8 py-4 md:px-10 xl:px-12">
        <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:flex-wrap sm:gap-8 sm:text-left lg:gap-12">
          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 md:text-base">
            <Star className="h-4 w-4 fill-[#ff6b35] text-[#ff6b35]" />
            <span>4.9 rating from 350+ customers</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 md:text-base">
            <CheckCircle className="h-4 w-4 text-[#0f537a]" />
            <span>Licensed &amp; insured</span>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-700 md:text-base">
            <CheckCircle className="h-4 w-4 text-[#0f537a]" />
            <span>10+ years experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}
