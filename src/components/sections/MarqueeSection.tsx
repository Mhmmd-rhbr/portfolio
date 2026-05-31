import React, { useEffect, useRef } from 'react';

const row1Images = [
  "https://res.cloudinary.com/dk4jmsecq/image/upload/v1780246828/ezgif.com-video-to-gif-converter_1_rjss3a.gif",
  "https://res.cloudinary.com/dk4jmsecq/image/upload/v1780246700/ezgif.com-video-to-gif-converter_eq5qw8.gif",
  "https://res.cloudinary.com/dk4jmsecq/image/upload/v1780246460/ScreenRecording2026-05-31at20.18.53-ezgif.com-cut_jrysyt.gif"
];

const row2Images = [
  "https://res.cloudinary.com/dk4jmsecq/image/upload/v1780246460/ScreenRecording2026-05-31at20.18.53-ezgif.com-cut_jrysyt.gif",
  "https://res.cloudinary.com/dk4jmsecq/image/upload/v1780246700/ezgif.com-video-to-gif-converter_eq5qw8.gif",
  "https://res.cloudinary.com/dk4jmsecq/image/upload/v1780246828/ezgif.com-video-to-gif-converter_1_rjss3a.gif"
];

// Since we have 3 images now, repeat them 6 times to ensure no gaps are shown on wide screens
const row1Repeated = Array(6).fill(row1Images).flat();
const row2Repeated = Array(6).fill(row2Images).flat();

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrameId: number;
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      if (!sectionRef.current || !row1Ref.current || !row2Ref.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const scrollY = window.scrollY;
      
      const offset = (scrollY - sectionTop + window.innerHeight) * 0.3;
      
      row1Ref.current.style.transform = `translate3d(${offset - 200}px, 0, 0)`;
      row2Ref.current.style.transform = `translate3d(${-(offset - 200)}px, 0, 0)`;
    };

    const handleScroll = () => {
      if (Math.abs(window.scrollY - lastScrollY) > 0) {
        lastScrollY = window.scrollY;
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(updateScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col gap-6"
    >
      <div 
        ref={row1Ref} 
        className="flex gap-6 whitespace-nowrap w-max ml-[-100vw]"
        style={{ willChange: 'transform', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {row1Repeated.map((src, i) => (
          <img 
            key={`r1-${i}`}
            src={src} 
            alt={`Marquee item ${i}`}
            loading="lazy"
            className="w-[280px] sm:w-[340px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </div>
      
      <div 
        ref={row2Ref} 
        className="flex gap-6 whitespace-nowrap w-max ml-[-100vw]"
        style={{ willChange: 'transform', transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)' }}
      >
        {row2Repeated.map((src, i) => (
          <img 
            key={`r2-${i}`}
            src={src} 
            alt={`Marquee item ${i}`}
            loading="lazy"
            className="w-[280px] sm:w-[340px] md:w-[420px] h-[180px] sm:h-[220px] md:h-[270px] rounded-2xl object-cover shrink-0"
          />
        ))}
      </div>
    </section>
  );
};
