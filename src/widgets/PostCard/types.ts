interface Tag {
  id: string;
  name: string;
}

export interface AuthorInfoProps {
  avatarSrc: string;
  author: string;
  className?: string;
}

export interface CardHeaderProps extends Omit<AuthorInfoProps, 'className'> {
  date: string;
}

export interface CardFooterProps {
  tags: Tag[];
  text: string;
  commentsCount: number;
  likesCount: number;
  ideasCount: number;
}

export interface PostCardProps extends CardHeaderProps, CardFooterProps {
  imageSrc: string;
}
