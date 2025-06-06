import type { ReactNode } from 'react';

export interface SecondaryButtonProps {
  icon: ReactNode;
  text: string;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}
