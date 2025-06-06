import type { FC } from 'react';
import type { IconProps } from '@/shared/ui/icons/types';

export const PlusIcon: FC<IconProps> = ({
  size = 16,
  color = '#fff',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4.14056 8.81107H13.3986M8.7696 13.4401V4.18204"
        stroke={color}
        stroke-width="1.13364"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
