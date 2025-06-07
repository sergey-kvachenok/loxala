import React from 'react';
import type { IconProps } from '@/shared/ui/icons/types';

export const HamburgerIcon: React.FC<IconProps> = ({
  size = 24,
  color = '#1E1E1E',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 12H21M3 6H21M3 18H21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
