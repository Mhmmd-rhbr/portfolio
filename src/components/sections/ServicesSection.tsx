import React from 'react';
import { FadeIn } from '../ui/FadeIn';

const services = [
  {
    num: '01',
    name: 'AI PRODUCT DEVELOPMENT',
    description: 'Designing and building AI-powered web applications, platforms, and digital products from concept to launch, with a focus on real-world impact and scalability.'
  },
  {
    num: '02',
    name: 'TRADING TECHNOLOGY',
    description: 'Creating intelligent tools for traders, including trading journals, performance analytics, decision-support systems, and psychology-driven trading solutions.'
  },
  {
    num: '03',
    name: 'AI & AUTOMATION SYSTEMS',
    description: 'Developing advanced AI workflows, intelligent assistants, automation pipelines, and custom solutions that streamline complex processes and improve productivity.'
  },
  {
    num: '04',
    name: 'WEB & MOBILE APPLICATIONS',
    description: 'Building modern, responsive web platforms, SaaS products, browser extensions, and mobile applications with a strong focus on user experience and performance.'
  },
  {
    num: '05',
    name: 'DIGITAL PRODUCT STRATEGY',
    description: 'Transforming ideas into successful products through product planning, system architecture, UX design, market positioning, and long-term growth strategies.'
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 text-[#0C0C0C]">
      
      <FadeIn delay={0} y={40}>
        <h2 className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, index) => (
          <FadeIn key={service.num} delay={index * 0.1} y={30}>
            <div className="flex flex-col md:flex-row md:items-start border-t border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 group">
              <div className="font-black leading-none mb-4 md:mb-0 md:w-1/3 md:pr-8 transition-transform group-hover:translate-x-2 duration-300" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {service.num}
              </div>
              <div className="md:w-2/3 flex flex-col justify-center h-full pt-1 md:pt-4">
                <h3 className="font-medium uppercase mb-3 sm:mb-4 transition-colors duration-300" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.name}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
        {/* Bottom border for the last item */}
        <div className="border-t border-[rgba(12,12,12,0.15)] w-full"></div>
      </div>
      
    </section>
  );
};
