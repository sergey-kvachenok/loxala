import type { FC } from 'react';
import type { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
  className,
}) => {
  return (
    <button
      className={`flex items-center justify-center  ${disabled ? 'cursor-initial' : 'cursor-pointer'} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
