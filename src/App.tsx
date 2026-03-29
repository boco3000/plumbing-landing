import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FinalCTA from "./components/FinalCTA";
import StickyCallButton from "./components/StickyCallButton";
import RequestModal from "./components/RequestModal";
import Footer from "./components/Footer"

function App() {
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f537a] text-white pb-24 sm:pb-0">
      <Navbar />
      <Hero onRequestClick={() => setIsRequestModalOpen(true)} />
      <TrustStrip />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <FinalCTA onRequestClick={() => setIsRequestModalOpen(true)} />
      <Footer />
      <RequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />
      <StickyCallButton />
    </div>
  );
}

export default App;
