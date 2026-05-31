import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Brain, Code, Puzzle, Sparkles, ArrowUpRight, CheckCircle2, Shield } from 'lucide-react';

interface EcosystemModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Pre-calculated particle data to keep the render function pure and resolve lint issues
const PARTICLE_DATA = [
  { x: "10%", y: "80%", scale: 0.7, opacity: 0.25, duration: 15, delay: 0.1, size: 8 },
  { x: "50%", y: "90%", scale: 0.5, opacity: 0.2, duration: 20, delay: 1, size: 6 },
  { x: "80%", y: "75%", scale: 0.85, opacity: 0.3, duration: 14, delay: 0.5, size: 10 },
  { x: "25%", y: "65%", scale: 0.6, opacity: 0.15, duration: 25, delay: 2, size: 7 },
  { x: "90%", y: "50%", scale: 0.75, opacity: 0.35, duration: 12, delay: 0.2, size: 9 },
  { x: "70%", y: "60%", scale: 0.65, opacity: 0.25, duration: 18, delay: 1.2, size: 8 },
];

const cards = [
  {
    num: '01',
    name: 'Mental Coach',
    category: 'Trading Psychology',
    description: 'AI-powered trading psychology platform focused on emotional discipline, behavioral analysis, performance improvement, journaling, CBT-inspired coaching, and intelligent decision-making.',
    features: ['AI Trading Coach', 'Emotional Analytics', 'Trading Journal', 'Performance Tracking', 'Behavioral Insights'],
    link: 'https://mentalcoach.aryamerx.com',
    icon: Brain,
    styles: {
      text: 'text-purple-400',
      border: 'border-purple-500/20 group-hover:border-purple-500/40',
      bg: 'bg-purple-500/[0.02]',
      iconBg: 'bg-purple-500/10',
      iconBorder: 'border-purple-500/20',
      glow: 'group-hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]'
    }
  },
  {
    num: '02',
    name: 'Edge',
    category: 'AI Pine Script Generator',
    description: 'Advanced AI-powered Pine Script generation platform that helps traders create, refine, debug, and optimize TradingView indicators and strategies using cutting-edge artificial intelligence.',
    features: ['Pine Script Generation', 'AI Debugging', 'Strategy Optimization', 'TradingView Integration', 'Advanced AI Workflows'],
    link: 'https://edge.aryamerx.com',
    icon: Code,
    styles: {
      text: 'text-blue-400',
      border: 'border-blue-500/20 group-hover:border-blue-500/40',
      bg: 'bg-blue-500/[0.02]',
      iconBg: 'bg-blue-500/10',
      iconBorder: 'border-blue-500/20',
      glow: 'group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]'
    }
  },
  {
    num: '03',
    name: 'AryaMerX Extensions',
    category: 'SaaS Browser Extensions',
    description: 'A growing collection of productivity and trading-focused browser extensions built to simplify workflows, improve market awareness, and enhance trader efficiency.',
    features: ['Trade Calculator Pro', 'FX Watch', 'Financial Utilities', 'Trading Productivity Tools', 'Continuous Workflows'],
    link: 'https://my.aryamerx.com',
    icon: Puzzle,
    styles: {
      text: 'text-teal-400',
      border: 'border-teal-500/20 group-hover:border-teal-500/40',
      bg: 'bg-teal-500/[0.02]',
      iconBg: 'bg-teal-500/10',
      iconBorder: 'border-teal-500/20',
      glow: 'group-hover:shadow-[0_0_30px_rgba(20,184,166,0.1)]'
    }
  }
];

const stats = [
  'Multiple AI Products',
  'Growing User Ecosystem',
  'Browser Extensions',
  'Trading Technologies'
];

export const EcosystemModal: React.FC<EcosystemModalProps> = ({ isOpen, onClose }) => {
  // Prevent background body scroll when the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 overflow-hidden selection:bg-[#B600A8]/30 selection:text-white"
        >
          {/* Background Ambient Glows */}
          <motion.div
            animate={{
              x: [0, 50, -30, 0],
              y: [0, -40, 30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/6 left-1/6 w-[400px] h-[400px] rounded-full bg-[#7621B0]/15 blur-[120px] pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -40, 50, 0],
              y: [0, 30, -40, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/6 right-1/6 w-[450px] h-[450px] rounded-full bg-[#0052B6]/15 blur-[130px] pointer-events-none"
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#00C6FF]/10 blur-[110px] pointer-events-none" />

          {/* Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLE_DATA.map((particle, i) => (
              <motion.div
                key={i}
                initial={{
                  x: particle.x,
                  y: particle.y,
                  scale: particle.scale,
                  opacity: particle.opacity,
                }}
                animate={{
                  y: ["0%", "-100%"],
                  opacity: [0, 0.5, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay,
                }}
                className="absolute text-[#00C6FF]/40"
              >
                <Sparkles size={particle.size} />
              </motion.div>
            ))}
          </div>

          {/* Modal Container with locked max-height and custom scrollbar */}
          <motion.div
            initial={{ scale: 0.95, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 30, opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 180 }}
            className="w-full max-w-6xl max-h-[92vh] bg-white/[0.01] border border-white/10 backdrop-blur-2xl rounded-[32px] p-5 sm:p-8 md:p-10 shadow-[0_0_60px_rgba(0,198,255,0.1)] relative my-4 flex flex-col z-10 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10"
          >
            {/* Top Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              title="Close modal"
              className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all select-none cursor-pointer z-20"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center mt-2 mb-8 max-w-3xl mx-auto">
              <span className="text-[#00C6FF] font-medium tracking-widest text-xs uppercase mb-2 flex items-center gap-1.5">
                <Sparkles size={12} className="animate-pulse" /> Interconnected Products
              </span>
              <h2 className="font-black uppercase tracking-tight text-white mb-3 contact-title-clamp">
                ARYAMERX ECOSYSTEM
              </h2>
              <p className="text-[#D7E2EA]/75 font-light text-xs sm:text-sm leading-relaxed max-w-2xl">
                An interconnected ecosystem of AI-powered products, trading technologies, educational resources, and intelligent tools designed to help people think better, trade smarter, and grow faster.
              </p>
            </div>

            {/* Grid of 3 Cards (3-column layout on desktop for compact height) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
              {cards.map((card) => {
                const CardIcon = card.icon;
                return (
                  <motion.div
                    key={card.num}
                    whileHover={{ scale: 1.015, y: -4 }}
                    className={`group relative rounded-[24px] border bg-white/[0.01] p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 ${card.styles.border} ${card.styles.glow}`}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[24px] bg-gradient-to-br from-white/[0.01] to-transparent" />

                    <div>
                      {/* Top bar of Card */}
                      <div className="flex justify-between items-center mb-5">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 ${card.styles.iconBg} ${card.styles.iconBorder} ${card.styles.text}`}>
                            <CardIcon size={20} />
                          </div>
                          <div className="flex flex-col text-left">
                            <span className="text-[9px] uppercase tracking-widest font-semibold text-white/30 mb-0.5">
                              {card.category}
                            </span>
                            <h3 className="font-semibold text-white text-base sm:text-lg">
                              {card.name}
                            </h3>
                          </div>
                        </div>
                        <span className="font-bold text-white/10 group-hover:text-white/20 text-2xl transition-colors duration-300">
                          {card.num}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light text-left leading-relaxed mb-5">
                        {card.description}
                      </p>
                    </div>

                    {/* Features checklist */}
                    <div className="mt-2 pt-3 border-t border-white/5">
                      <div className="flex flex-wrap gap-x-3 gap-y-1.5">
                        {card.features.map((feat, index) => (
                          <div key={index} className="flex items-center gap-1 text-[10px] sm:text-xs text-[#D7E2EA]/60 font-light">
                            <CheckCircle2 size={10} className="text-purple-400/60" />
                            {feat}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Footer Section */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-6">
              
              {/* Statistics row */}
              <div className="flex flex-wrap justify-center md:justify-between items-center gap-3 sm:gap-5 px-1">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-1.5 text-[10px] sm:text-xs font-semibold tracking-wider uppercase text-white/55 hover:text-white transition-colors duration-300"
                  >
                    <Shield size={12} className="text-[#00C6FF]/60" />
                    {stat}
                  </div>
                ))}
              </div>

              {/* Mission Statement Glass Box */}
              <div className="rounded-[18px] border border-white/5 bg-white/[0.01] p-4 sm:p-5 text-center max-w-2xl mx-auto shadow-sm">
                <p className="text-[11px] sm:text-xs text-[#D7E2EA]/65 font-light leading-relaxed italic">
                  "Every product within the AryaMerX ecosystem is designed with a single mission: empowering individuals through technology, artificial intelligence, and better decision-making."
                </p>
              </div>

              {/* Navigation Action Buttons Row */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto justify-center items-center mt-1 relative z-10">
                <a
                  href="https://mentalcoach.aryamerx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 rounded-full text-white font-medium uppercase tracking-widest text-[10px] py-3.5 transition-transform hover:scale-[1.02] text-center shadow-lg select-none contact-btn-gradient"
                >
                  Explore Mental Coach <ArrowUpRight size={12} className="inline ml-0.5" />
                </a>

                <a
                  href="https://edge.aryamerx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 rounded-full border border-[#0052B6]/40 hover:bg-[#0052B6]/15 hover:border-[#0052B6]/60 text-white font-medium uppercase tracking-widest text-[10px] py-3.5 transition-all select-none text-center ecosystem-edge-btn"
                >
                  Explore Edge <ArrowUpRight size={12} className="inline ml-0.5" />
                </a>

                <a
                  href="https://my.aryamerx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/25 text-white/80 hover:text-white font-medium uppercase tracking-widest text-[10px] py-3.5 transition-all select-none text-center"
                >
                  Visit AryaMerX
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
