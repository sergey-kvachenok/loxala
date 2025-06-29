import type { FC } from 'react';
import type { CardHeaderProps } from './types';
import { DotsThreeVerticalIcon, PlusIcon, ShareIcon } from '@/shared/ui/icons';
import { IconButton, SecondaryButton } from '@/shared/ui/components/buttons';
import { AuthorInfo } from './AuthorInfo';

export const CardHeader: FC<CardHeaderProps> = ({
  date,
  author,
  avatarSrc,
}) => {
  return (
    <div>
      <AuthorInfo
        avatarSrc={avatarSrc}
        author={author}
        className="hidden max-mobile:flex md:flex lg:hidden mb-2"
        date={date}
      />

      <div className="flex md:gap-4 lg:gap-0 justify-between max-mobile:justify-end md:justify-end lg:justify-between">
        <div className="flex items-center text-white">
          <AuthorInfo
            avatarSrc={avatarSrc}
            author={author}
            className="max-mobile:hidden md:hidden lg:flex"
            date={date}
          />
        </div>

        <div className="flex items-center gap-1.75">
          <SecondaryButton
            onClick={() => {
              console.log('Connect button clicked');
            }}
            icon={<PlusIcon />}
            text="Connect"
          />

          <IconButton
            icon={<ShareIcon size={24} />}
            onClick={() => {
              console.log('Share button clicked');
            }}
          />

          <IconButton
            icon={<DotsThreeVerticalIcon size={24} />}
            onClick={() => {
              console.log('3 dots button clicked');
            }}
          />
        </div>
      </div>
    </div>
  );
};
