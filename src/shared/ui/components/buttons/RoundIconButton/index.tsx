import type { FC } from 'react';
import type { RoundIconButtonProps } from './types';

const sizes = {
  sm: {
    className: 'w-[26px] h-[26px]',
  },
  md: {
    className: 'w-[34px] h-[34px]',
  },

  lg: {
    className: 'w-[46px] h-[46px]',
  },
};

export const RoundIconButton: FC<RoundIconButtonProps> = ({
  icon,
  onClick,
  size = 'md',
  disabled = false,
}) => {
  return (
    <button
      className={`rounded-full p-[1px] ${sizes[size].className} bg-gradient-button ${disabled ? 'cursor-initial' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      <div
        className={`w-full h-full rounded-full flex items-center justify-center bg-pink-light`}
      >
        {icon}
      </div>
    </button>
  );
};
