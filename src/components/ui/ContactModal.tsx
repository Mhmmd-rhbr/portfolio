import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Mail, Globe, Sparkles } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Pre-calculated particle data to keep the render function pure and resolve lint issues
const PARTICLES = [
  { x: "15%", y: "85%", scale: 0.8, opacity: 0.3, duration: 12, delay: 0.5, size: 10 },
  { x: "45%", y: "70%", scale: 0.6, opacity: 0.2, duration: 18, delay: 2, size: 8 },
  { x: "75%", y: "90%", scale: 0.9, opacity: 0.4, duration: 15, delay: 1, size: 12 },
  { x: "30%", y: "60%", scale: 0.5, opacity: 0.25, duration: 22, delay: 3, size: 6 },
  { x: "85%", y: "40%", scale: 0.7, opacity: 0.35, duration: 14, delay: 0.2, size: 9 },
  { x: "60%", y: "55%", scale: 0.75, opacity: 0.3, duration: 16, delay: 1.5, size: 11 },
];

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copied1, setCopied1] = useState(false);
  const [copied2, setCopied2] = useState(false);

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

  const copyToClipboard = (text: string, setCopied: React.Dispatch<React.SetStateAction<boolean>>) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto selection:bg-[#B600A8]/30 selection:text-white"
        >
          {/* Animated Ambient Glows */}
          <motion.div
            animate={{
              x: [0, 40, -20, 0],
              y: [0, -30, 20, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-[#7621B0]/20 blur-[100px] pointer-events-none"
          />
          <motion.div
            animate={{
              x: [0, -30, 40, 0],
              y: [0, 40, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#0052B6]/25 blur-[120px] pointer-events-none"
          />

          {/* Interactive Floating Sparkles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {PARTICLES.map((particle, i) => (
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
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: particle.delay,
                }}
                className="absolute text-purple-400"
              >
                <Sparkles size={particle.size} />
              </motion.div>
            ))}
          </div>

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="w-full max-w-lg bg-white/[0.02] border border-white/10 backdrop-blur-2xl rounded-[32px] p-6 sm:p-10 shadow-[0_0_50px_rgba(118,33,176,0.15)] relative overflow-hidden flex flex-col z-10"
          >
            {/* Top Close Icon */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              title="Close modal"
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all select-none cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Header */}
            <div className="flex flex-col items-center text-center mt-4 mb-8">
              <span className="text-purple-400 font-medium tracking-widest text-xs uppercase mb-2 flex items-center gap-1.5">
                <Sparkles size={12} className="animate-pulse" /> Get In Touch
              </span>
              <h2 className="font-black uppercase tracking-tight text-white mb-3 contact-title-clamp">
                CONTACT
              </h2>
              <p className="text-[#D7E2EA]/75 font-light text-sm sm:text-base max-w-[280px] sm:max-w-[320px] leading-relaxed">
                Let's build something extraordinary together.
              </p>
            </div>

            {/* Content Cards */}
            <div className="flex flex-col gap-4 mb-6">
              {/* Card 1: Primary Email */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => copyToClipboard('info@aryamerx.com', setCopied1)}
                className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] p-5 transition-all duration-300 flex items-center justify-between overflow-hidden shadow-sm"
              >
                {/* Glow border on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-white/40 mb-1">
                      Primary Email
                    </span>
                    <a
                      href="mailto:info@aryamerx.com"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white transition-colors"
                    >
                      info@aryamerx.com
                    </a>
                  </div>
                </div>

                {/* Copy Status Trigger */}
                <div className="relative z-10 text-white/40 hover:text-white w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-white/15 transition-all">
                  {copied1 ? (
                    <motion.div initial={{ scale: 0.6 }} animate={{ scale: 1 }} className="text-green-400">
                      <Check size={16} />
                    </motion.div>
                  ) : (
                    <Copy size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                {/* Dynamic popup for feedback */}
                <AnimatePresence>
                  {copied1 && (
                    <motion.span
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="absolute right-16 top-1/2 -translate-y-1/2 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Card 2: Alternative Email */}
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => copyToClipboard('aryamerx@gmail.com', setCopied2)}
                className="group relative cursor-pointer rounded-2xl border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] p-5 transition-all duration-300 flex items-center justify-between overflow-hidden shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Mail size={20} />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest font-semibold text-white/40 mb-1">
                      Alternative Email
                    </span>
                    <a
                      href="mailto:aryamerx@gmail.com"
                      onClick={(e) => e.stopPropagation()}
                      className="text-sm sm:text-base font-medium text-white/90 group-hover:text-white transition-colors"
                    >
                      aryamerx@gmail.com
                    </a>
                  </div>
                </div>

                <div className="relative z-10 text-white/40 hover:text-white w-9 h-9 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center group-hover:border-white/15 transition-all">
                  {copied2 ? (
                    <motion.div initial={{ scale: 0.6 }} animate={{ scale: 1 }} className="text-green-400">
                      <Check size={16} />
                    </motion.div>
                  ) : (
                    <Copy size={16} className="opacity-60 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>

                <AnimatePresence>
                  {copied2 && (
                    <motion.span
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.9 }}
                      className="absolute right-16 top-1/2 -translate-y-1/2 text-xs font-semibold text-green-400 bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full backdrop-blur-md shadow-lg"
                    >
                      Copied!
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>

            {/* Additional Text */}
            <p className="text-xs text-[#D7E2EA]/50 font-light text-center leading-relaxed mb-8 max-w-xs mx-auto flex items-center justify-center gap-1.5">
              <Globe size={11} className="text-purple-400/60 animate-pulse" /> Open to collaborations, partnerships, AI products, and innovative projects worldwide.
            </p>

            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-3 w-full relative z-10">
              {/* Copy Primary Email Button */}
              <button
                onClick={() => copyToClipboard('info@aryamerx.com', setCopied1)}
                className="flex-1 rounded-full px-6 py-3.5 text-white font-medium uppercase tracking-widest text-xs transition-transform hover:scale-[1.02] select-none text-center shadow-lg cursor-pointer contact-btn-gradient"
              >
                {copied1 ? 'Email Copied!' : 'Copy Email'}
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex-1 rounded-full border border-white/15 bg-white/[0.02] hover:bg-white/[0.08] hover:border-white/25 text-white/80 hover:text-white font-medium uppercase tracking-widest text-xs py-3.5 transition-all select-none text-center cursor-pointer"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
