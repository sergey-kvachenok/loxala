import type { ReactNode } from 'react';

export interface ChipProps {
  text: string | number;
  variant: 'square' | 'rounded';
  icon?: ReactNode;
  className?: string;
}
