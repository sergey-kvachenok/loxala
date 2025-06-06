import type { FC } from 'react';
import type { PostCardProps } from './types';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

export const PostCard: FC<PostCardProps> = ({
  tags,
  text,
  commentsCount,
  likesCount,
  ideasCount,
  date,
  author,
  imageSrc,
  avatarSrc,
}) => {
  return (
    <div
      className="relative h-[383px] max-w-[738px] overflow-hidden bg-cover bg-center bg-no-repeat rounded-[18px] py-7 px-4 2xl:px-7 flex flex-col justify-between"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.70) 9.14%, rgba(0, 0, 0, 0.10) 48.69%, rgba(0, 0, 0, 0.80) 88.25%), url(${imageSrc}) lightgray 50% / cover no-repeat`,
      }}
    >
      <CardHeader date={date} author={author} avatarSrc={avatarSrc} />

      <CardFooter
        tags={tags}
        text={text}
        commentsCount={commentsCount}
        likesCount={likesCount}
        ideasCount={ideasCount}
      />
    </div>
  );
};
