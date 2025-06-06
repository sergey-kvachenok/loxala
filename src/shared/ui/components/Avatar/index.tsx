import type { FC } from 'react';

const sizeClasses = {
  sm: 'size-[27px]',
  lg: 'size-[127px]',
};

interface AvatarProps {
  src: string;
  size: 'sm' | 'lg';
}

export const Avatar: FC<AvatarProps> = ({ src, size = 'lg' }) => {
  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden`}>
      <img src={src} alt="avatar" className="w-full h-full object-cover" />
    </div>
  );
};
