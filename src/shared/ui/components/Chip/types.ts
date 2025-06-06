import type { ComponentType } from 'react';
import type { IconProps } from '../../icons/types';

export interface ChipProps {
  text: string;
  variant: 'square' | 'rounded';
  icon?: ComponentType<IconProps>;
  className?: string;
  iconColor?: string;
}
