import type { ComponentType } from 'react';
import type { IconProps } from '../../../icons/types';

export interface SecondaryButtonProps {
  icon: ComponentType<IconProps>;
  text: string;
  onClick: () => void;
  size?: 'sm' | 'md' | 'lg';
}
