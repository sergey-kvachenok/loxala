import type { FC } from 'react';
import type { ChipProps } from './types';

export const Chip: FC<ChipProps> = ({
  variant = 'square',
  icon,
  className,
  text,
}) => {
  if (variant === 'square') {
    return (
      <span
        className={` bg-white/12 backdrop-blur-sm rounded-[7px] px-[18px] py-[7px] text-white text-9 ${className}`}
      >
        {text}
      </span>
    );
  }

  return (
    <span
      className={`bg-white/10 inline-flex items-center justify-center gap-1 backdrop-blur-chip rounded-[45px] px-2.75 py-2 text-white font-semibold ${className}`}
    >
      {icon && icon}
      <span className="text-11">{text}</span>
    </span>
  );
};
