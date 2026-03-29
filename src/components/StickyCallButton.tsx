import { Phone } from "lucide-react"

export default function StickyCallButton() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 p-2 shadow-[0_-6px_20px_rgba(0,0,0,0.18)] sm:hidden">
  <a
    href="tel:+16145551234"
    className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-2xl bg-[#ff6b35] px-6 text-base font-semibold text-white"
        aria-label="Call now at 614-555-0123"
      >
        <Phone className="h-5 w-5" />
        <span>Call Now - (614) 555-0123</span>
      </a>
    </div>
  )
}