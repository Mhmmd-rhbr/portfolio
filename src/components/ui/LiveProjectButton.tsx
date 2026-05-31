import React from 'react';

interface LiveProjectButtonProps {
  href?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({ href }) => {
  const className = "rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors hover:bg-[#D7E2EA]/10 inline-block text-center select-none cursor-pointer";
  
  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={className}
      >
        Live Project
      </a>
    );
  }

  return (
    <button className={className}>
      Live Project
    </button>
  );
};
