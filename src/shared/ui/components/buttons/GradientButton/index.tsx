import type { FC } from 'react';
import type { GradientButtonProps } from './types';

export const GradientButton: FC<GradientButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      className={`relative w-[44px] h-[44px] ${className}`}
      onClick={onClick}
    >
      <div
        className="absolute top-0 left-1 w-11 h-11 rounded-full border-0 outline-none cursor-pointer transition-transform duration-200 ease-in-out hover:scale-102 active:scale-95"
        style={{
          background: 'linear-gradient(180deg, #B55DD9 0.01%, #5054C9 100%)',
          boxShadow: '0 4px 4px rgba(0, 0, 0, 0.17)',
        }}
      >
        {children}
      </div>

      <div
        className="absolute top-[3px] left-[7px] w-[38px] h-[38px] rounded-full border-2 border-transparent pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, #FDE7FC 0%, #B87DDE 16.1458%, #6E50D1 85.4167%, #3E37B4 100%) border-box',
          backgroundClip: 'border-box',
          filter: 'blur(0.394531px)',
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'exclude',
          mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          maskComposite: 'exclude',
        }}
      />

      <div
        className="absolute top-1.25 left-5 w-3 h-4 rounded-md pointer-events-none opacity-60 z-[2]"
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.15) 100%)',
          mixBlendMode: 'overlay',
        }}
      />
    </button>
  );
};
