import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { FadeIn } from '../ui/FadeIn';

const projects = [
  {
    num: '01',
    name: 'AryaMerX AI Platform',
    category: 'AI Platform',
    description: 'AryaMerX: Advanced AI-powered analysis and seamless trading integration.',
    img: 'https://res.cloudinary.com/dk4jmsecq/image/upload/v1780248927/Screenshot_2026-05-31_at_21.03.55_xlwob0.png',
    link: 'https://my.aryamerx.com'
  },
  {
    num: '02',
    name: 'AryaMerX Mental Coach',
    category: 'Trading Psychology',
    description: 'AryaMerX Mental Coach: Your dedicated psychology companion in trading.',
    img: 'https://res.cloudinary.com/dk4jmsecq/image/upload/v1780248927/Screenshot_2026-05-31_at_21.04.13_mb4vor.png',
    link: 'https://mentalcoach.aryamerx.com'
  },
  {
    num: '03',
    name: 'AryaMerX Edge',
    category: 'Trading Journal',
    description: 'AryaMerX Edge: Transforming your trading ideas into code for TradingView.',
    img: 'https://res.cloudinary.com/dk4jmsecq/image/upload/v1780248928/Screenshot_2026-05-31_at_21.04.42_k7xb91.png',
    link: 'https://edge.aryamerx.com'
  }
];

interface CardProps {
  index: number;
  project: typeof projects[0];
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

const ProjectCard: React.FC<CardProps> = ({ index, project, progress, range, targetScale }) => {
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div className="h-screen flex items-start justify-center sticky top-0 pt-24 md:pt-32">
      <motion.div 
        style={{ 
          scale,
          top: `calc(10vh + ${index * 28}px)`,
          transformOrigin: 'top center'
        }}
        className="w-full max-w-7xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col gap-6 md:gap-8 h-[85vh] sticky"
      >
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full">
          <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-8 w-full md:w-auto">
            <span className="font-black leading-none text-[#D7E2EA]" style={{ fontSize: 'clamp(3rem, 10vw, 100px)' }}>
              {project.num}
            </span>
            <div className="flex flex-col mb-1 md:mb-3">
              <span className="uppercase tracking-widest text-xs sm:text-sm text-[#D7E2EA] opacity-60 mb-1 font-medium">{project.category}</span>
              <h3 className="font-medium uppercase text-[#D7E2EA] leading-none mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
                {project.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#D7E2EA]/75 font-light max-w-xl hidden sm:block">
                {project.description}
              </p>
            </div>
          </div>
          <div className="mb-1 md:mb-3 hidden sm:block">
            <LiveProjectButton href={project.link} />
          </div>
        </div>

        {/* Bottom Row - Single Product Screenshot */}
        <div className="flex-1 w-full rounded-[30px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden relative border border-[#D7E2EA]/10 bg-[#121212] min-h-0">
          <img src={project.img} alt={project.name} className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
        
        {/* Mobile button visible at bottom */}
        <div className="sm:hidden w-full flex justify-center mt-2">
          <LiveProjectButton href={project.link} />
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  });

  return (
    <section 
      id="projects" 
      ref={containerRef} 
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 relative px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2 className="hero-heading font-black uppercase text-center mb-10" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Products
        </h2>
      </FadeIn>

      <div className="relative mt-10 w-full max-w-7xl mx-auto">
        {projects.map((project, index) => {
          const targetScale = 1 - (projects.length - 1 - index) * 0.03;
          // Calculate when this card should start scaling down. 
          // It starts scaling when the *next* card hits the top.
          const startProgress = index * (1 / projects.length);
          
          return (
            <ProjectCard 
              key={project.num}
              index={index}
              project={project}
              progress={scrollYProgress}
              range={[startProgress, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
};
