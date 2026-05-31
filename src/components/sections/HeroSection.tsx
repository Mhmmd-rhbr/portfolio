import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ContactButton } from '../ui/ContactButton';
import { Magnet } from '../ui/Magnet';

interface HeroSectionProps {
  onContactClick?: () => void;
  onEcosystemClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick, onEcosystemClick }) => {
  return (
    <section className="h-screen flex flex-col overflow-x-clip relative w-full">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} className="w-full">
        <nav className="flex justify-between items-center w-full px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
          <a 
            href="#ecosystem" 
            onClick={(e) => {
              e.preventDefault();
              onEcosystemClick?.();
            }}
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Ecosystem
          </a>
          <a href="#projects" className="hover:opacity-70 transition-opacity duration-200">Projects</a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              onContactClick?.();
            }}
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="flex-1 flex items-center justify-center overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} className="w-full text-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10.5vw] sm:text-[11.5vw] md:text-[12vw] lg:text-[12.5vw] xl:text-[13vw]">
            Hi, i&apos;m Mamad!
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait */}
      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
      >
        <Magnet>
          <img
            src="https://res.cloudinary.com/dk4jmsecq/image/upload/v1780181606/mamad%DB%B2-Photoroom_zpq9ky.png"
            alt="Jack Portrait"
            className="w-full h-auto object-contain scale-[1.15]"
          />
        </Magnet>
      </FadeIn>

      {/* Bottom Bar */}
      <div className="flex justify-between items-end w-full px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 relative z-20">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
            AI Builder
            Entrepreneur
            Product Creator
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
