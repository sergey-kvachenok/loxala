import type { FC } from 'react';
import type { CardFooterProps } from './types';
import { HeartIcon, LampIdeaIcon, MessageIcon } from '@/shared/ui/icons';
import { Chip } from '@/shared/ui/components/Chip';
import { useMediaQuery } from '@/shared/hooks/useMediaQuery';

const VISIBLE_CHIPS_COUNT = 3;
const VISIBLE_CHIPS_COUNT_MOBILE = 2;

export const CardFooter: FC<CardFooterProps> = ({
  tags,
  text,
  commentsCount,
  likesCount,
  ideasCount,
}) => {
  const isBetweenMdAndLg = useMediaQuery(
    '(min-width: 768px) and (max-width: 1023px)',
  );

  const isMobile = useMediaQuery('(max-width: 500px)');

  const hasHiddenChips = isBetweenMdAndLg || isMobile;
  const visibleChipsCount = isMobile
    ? VISIBLE_CHIPS_COUNT_MOBILE
    : VISIBLE_CHIPS_COUNT;

  const visibleChips = hasHiddenChips ? tags.slice(0, visibleChipsCount) : tags;

  const hiddenChips = hasHiddenChips ? tags.slice(visibleChipsCount) : [];

  return (
    <div>
      <div className="flex gap-1.75 mb-2.25 items-center">
        {visibleChips.map(({ id, name }) => (
          <Chip key={id} text={`#${name}`} variant="square" />
        ))}

        {hasHiddenChips && !!hiddenChips.length ? (
          <Chip
            variant="rounded"
            text={`+ ${hiddenChips.length}`}
            className="!py-1"
          />
        ) : null}
      </div>

      <div className="text-white line-clamp-2 max-mobile:line-clamp-3 max-mobile:text-11 sm:text-sm lg:text-base mb-4.5">
        {text}
      </div>

      <div className="flex items-center gap-1.75">
        <Chip text={likesCount} variant="rounded" icon={<HeartIcon />} />
        <Chip text={ideasCount} variant="rounded" icon={<LampIdeaIcon />} />
        <Chip
          text={commentsCount}
          variant="rounded"
          icon={<MessageIcon color="white" />}
        />
      </div>
    </div>
  );
};
