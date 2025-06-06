import type { FC } from 'react';
import type { IconProps } from '@/shared/ui/icons/types';

export const ShareIcon: FC<IconProps> = ({
  size = 16,
  color = '#fff',
  className,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M19.8153 11.8086L14.3436 17.2813V14.0762H13.871C9.86293 14.0762 6.80014 15.1458 4.46472 17.4707C4.99262 15.8712 5.78063 14.3496 6.90515 13.0645C8.48201 11.2625 10.741 9.89918 13.9384 9.44241L14.3436 9.38479V6.33694L19.8153 11.8086Z"
        stroke={color}
        stroke-width="0.9447"
      />
    </svg>
  );
};
