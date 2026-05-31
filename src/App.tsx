
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';

function App() {
  return (
    <main className="bg-[#0C0C0C] w-full min-h-screen overflow-x-clip text-[#D7E2EA]">
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}

export default App;
