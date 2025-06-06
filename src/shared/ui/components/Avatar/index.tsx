import type { FC } from 'react';
import type { AvatarProps } from './types';

const sizeClasses = {
  sm: 'size-[27px]',
  lg: 'size-[127px]',
};

export const Avatar: FC<AvatarProps> = ({ src, size = 'lg', className }) => {
  return (
    <div
      className={`${sizeClasses[size]} rounded-full overflow-hidden ${className}`}
    >
      <img src={src} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
};
