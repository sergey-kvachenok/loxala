import type { FC } from 'react';
import type { ChipProps } from './types';

export const Chip: FC<ChipProps> = ({
  variant = 'square',
  icon: Icon,
  className,
  text,
  iconColor,
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
    <span className="bg-white/10 inline-flex items-center justify-center gap-1 backdrop-blur-chip rounded-[45px] px-[11px] py-[8px] text-white font-semibold">
      {Icon && <Icon color={iconColor} />}
      <span className="text-11">{text}</span>
    </span>
  );
};
