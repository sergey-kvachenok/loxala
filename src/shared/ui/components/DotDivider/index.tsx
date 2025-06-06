import type { FC } from 'react';
import type { DotDividerProps } from './types';

export const DotDivider: FC<DotDividerProps> = ({ size = 5, className }) => {
  return (
    <div
      className={`bg-white rounded-full ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};
