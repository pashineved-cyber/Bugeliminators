import { ScrollReveal } from './components/ScrollReveal';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import UploadSection from "./components/UploadSection";

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <ScrollReveal />
      <Navbar />
      <HeroSection />
      <UploadSection />
      <AboutSection/>
      <Footer />
    </div>
  );
}

export default App;