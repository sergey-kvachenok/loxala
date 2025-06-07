import { Avatar } from '@/shared/ui/components/Avatar';
import { LoxalaIcon } from '@/shared/ui/icons';
import type { FC } from 'react';
import type { AuthorInfoProps } from './types';
import { DotDivider } from '@/shared/ui/components/DotDivider';
import { getTimeAgo } from '@/shared/lib/time';

export const AuthorInfo: FC<AuthorInfoProps> = ({
  avatarSrc,
  author,
  className,
  date,
}) => {
  return (
    <div className={`flex items-center text-white ${className}`}>
      <Avatar src={avatarSrc} size="sm" className="mr-2.25" />
      <span className="font-semibold mr-1.75">{author}</span>
      <LoxalaIcon />
      <DotDivider className="mx-2 2xl:mx-3.5" />
      <span className="text-14">{getTimeAgo(date)}</span>
    </div>
  );
};
