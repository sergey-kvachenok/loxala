import type { FC } from 'react';
import type { IconButtonProps } from './types';

export const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`flex items-center justify-center  ${disabled ? 'cursor-initial' : 'cursor-pointer'}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </button>
  );
};
