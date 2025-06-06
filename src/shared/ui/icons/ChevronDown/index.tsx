import type { FC } from 'react';
import type { IconProps } from '@/shared/ui/icons/types';

interface ChevronDownIconProps extends IconProps {
  withGradient?: boolean;
}

export const ChevronDownIcon: FC<ChevronDownIconProps> = ({
  size = 24,
  color = '#282529',
  className,
  withGradient = false,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {withGradient && (
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0.01%" stopColor="#b55dd9" />
            <stop offset="100%" stopColor="#5054c9" />
          </linearGradient>
        </defs>
      )}

      <path
        d="M6 9.5L12 15.5L18 9.5"
        stroke={withGradient ? 'url(#grad1)' : color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
