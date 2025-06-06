import type { FC } from 'react';
import type { ProfileCardProps } from './types';
import { Avatar } from '@/shared/ui/components/Avatar';
import { LoxalaIcon, MessageIcon } from '@/shared/ui/icons';
import { RoundIconButton } from '@/shared/ui/components/buttons';
import { Statistic } from '@/shared/ui/components/Statistic';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

export const ProfileCard: FC<ProfileCardProps> = ({
  name,
  avatarSrc,
  role,
  followersCount,
  followingCount,
  postsCount,
}) => {
  const isMobile = useMediaQuery('(max-width: 500px)');

  return (
    <section className="flex p-6 gap-4.5 border border-light-grey-stroke rounded-lg">
      <Avatar
        src={avatarSrc}
        size="lg"
        className="max-mobile:hidden mobile:block"
      />

      <div className="flex flex-col justify-between flex-1">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <p className="max-mobile:text-xl text-2xl font-family-aktiv-grotesk leading-[22px]">
                {name}
              </p>
              <LoxalaIcon size={24} />
            </div>
            <p className="text-dark-grey max-mobile:text-11">{role}</p>
          </div>

          <RoundIconButton
            icon={<MessageIcon />}
            onClick={() => {
              console.log('Message button click');
            }}
            size={isMobile ? 'md' : 'lg'}
          />
        </div>

        <div className="flex max-mobile:gap-4 gap-6">
          <Statistic
            name="Followers"
            value={followersCount}
            className="w-full"
          />

          <Statistic
            name="Following"
            value={followingCount}
            className="w-full"
          />

          <Statistic name="Posts" value={postsCount} className="w-full" />
        </div>
      </div>
    </section>
  );
};
