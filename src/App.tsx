import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TrustStrip from "./components/TrustStrip"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import FinalCTA from "./components/FinalCTA"
import StickyCallButton from "./components/StickyCallButton"
import RequestModal from "./components/RequestModal"

function App() {
  return (
    <div className="min-h-screen bg-[#0f537a] text-white">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA />
      <RequestModal />
      <StickyCallButton />
    </div>
  )
}

export default App