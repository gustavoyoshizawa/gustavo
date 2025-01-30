import Header from "./components/Header";
import HeroSection from "./components/_HeroSection";
import Sidebar from "./components/Sidebar";
import SectionIndicators from "./components/SectionIndicators";
import AboutSection from "./components/_AboutSection";
import ExpProj from "./components/_ExpProj";
import ContactSection from "./components/_ContactSection";
import PokemonSection from "./components/_PokemonSection";
import Footer from "./components/_Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <HeroSection />
      <SectionIndicators />
      <AboutSection />
      <ExpProj />
      <ContactSection />
      <PokemonSection />
      <Footer />
    </div>
  );
}

export default App;
