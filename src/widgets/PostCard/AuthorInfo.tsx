import { Avatar } from '@/shared/ui/components/Avatar';
import { LoxalaIcon } from '@/shared/ui/icons';
import type { FC } from 'react';
import type { AuthorInfoProps } from './types';

export const AuthorInfo: FC<AuthorInfoProps> = ({
  avatarSrc,
  author,
  className,
}) => {
  return (
    <div className={`flex items-center text-white ${className}`}>
      <Avatar src={avatarSrc} size="sm" className="mr-2.25" />
      <span className="font-semibold mr-1.75">{author}</span>
      <LoxalaIcon />
    </div>
  );
};
