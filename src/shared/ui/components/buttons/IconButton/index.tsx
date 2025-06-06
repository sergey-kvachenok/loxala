import type { FC } from 'react';
import type { IconButtonProps } from './types';

const sizes = {
  sm: {
    className: 'w-[24px] h-[24px]',
  },
  md: {
    className: 'w-[32px] h-[32px]',
  },

  lg: {
    className: 'w-[44px] h-[44px]',
  },
};

export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  size = 'lg',
  disabled = false,
  variant = 'default',
}) => {
  if (variant === 'rounded') {
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
  }
  return (
    <button
      className={`flex items-center justify-center ${sizes[size].className} ${disabled ? 'cursor-initial' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
