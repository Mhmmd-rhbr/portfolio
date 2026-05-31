import { useState } from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactModal } from './components/ui/ContactModal';
import { EcosystemModal } from './components/ui/EcosystemModal';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isEcosystemOpen, setIsEcosystemOpen] = useState(false);

  return (
    <main className="bg-[#0C0C0C] w-full min-h-screen overflow-x-clip text-[#D7E2EA]">
      <HeroSection 
        onContactClick={() => setIsContactOpen(true)} 
        onEcosystemClick={() => setIsEcosystemOpen(true)} 
      />
      <MarqueeSection />
      <AboutSection onContactClick={() => setIsContactOpen(true)} />
      <ServicesSection />
      <ProjectsSection />
      
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <EcosystemModal isOpen={isEcosystemOpen} onClose={() => setIsEcosystemOpen(false)} />
    </main>
  );
}

export default App;
