import { SEO } from './components/SEO';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
// import { MenuGrid } from './components/MenuGrid';
import { UnifiedMandiMenu } from './components/UnifiedMandiMenu';
import { MenuAccordion } from './components/MenuAccordion';
import { Catering } from './components/Catering';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream font-sans">
        <SEO />
      <Navbar />
      <Hero />
      <About />
      <UnifiedMandiMenu />
      <MenuAccordion />
      <Catering />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;