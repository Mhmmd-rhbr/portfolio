import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const Character = ({ char, progress, range }: { char: string, progress: MotionValue<number>, range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span style={{ opacity }} className="absolute top-0 left-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(' ');
  const totalChars = text.replace(/ /g, '').length;
  let charCount = 0;

  return (
    <p ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const chars = word.split('');
        return (
          <span key={i} className="inline-block whitespace-nowrap mr-[0.3em] mb-[0.1em]">
            {chars.map((char, j) => {
              const start = charCount / totalChars;
              const end = start + (1 / totalChars);
              charCount++;
              return (
                <Character
                  key={j}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
