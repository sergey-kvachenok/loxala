import type { FC } from 'react';
import type { SecondaryButtonProps } from './types';

export const SecondaryButton: FC<SecondaryButtonProps> = ({
  icon,
  text,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white/10 flex gap-1 text-11 text-white font-semibold rounded-[45px] px-[14px] py-1 h-7 border border-white backdrop-blur-chip cursor-pointer"
    >
      {icon && icon}
      {text}
    </button>
  );
};
