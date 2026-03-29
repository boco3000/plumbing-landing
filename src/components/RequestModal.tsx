import { useEffect } from "react"
import { X } from "lucide-react"

type RequestModalProps = {
  isOpen: boolean
  onClose: () => void
}

export default function RequestModal({
  isOpen,
  onClose,
}: RequestModalProps) {
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleEscape)

    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-white p-6 text-slate-900 shadow-2xl md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-500 transition-colors duration-200 hover:bg-slate-100 hover:text-slate-900"
          aria-label="Close request service form"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="pr-10">
          <h2 className="text-3xl font-semibold tracking-[-0.025em] text-[#0f537a]">
            Request Service
          </h2>
          <p className="mt-3 text-base leading-7 text-slate-600">
            Tell us what’s going on and we’ll follow up as soon as possible.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-[#ff6b35]"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="(614) 555-0123"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-[#ff6b35]"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Service Needed
            </label>
            <select
              id="service"
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base outline-none transition focus:border-[#ff6b35]"
              defaultValue=""
            >
              <option value="" disabled>
                Select a service
              </option>
              <option>Drain Cleaning</option>
              <option>Leak Repair</option>
              <option>Water Heater</option>
              <option>Emergency Service</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="details"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Issue Details
            </label>
            <textarea
              id="details"
              rows={4}
              placeholder="Briefly describe the issue"
              className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-[#ff6b35]"
            />
          </div>

          <button
            type="submit"
            className="flex min-h-[56px] w-full items-center justify-center rounded-2xl bg-[#ff6b35] px-6 text-lg font-semibold text-white transition-colors duration-200 hover:bg-[#e85a2a]"
          >
            Submit Request
          </button>
        </form>
      </div>
    </div>
  )
}