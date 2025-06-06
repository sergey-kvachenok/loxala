import type { FC } from 'react';
import type { StatisticProps } from './types';
import { formatNumber } from '@/shared/lib/formatNumber';

export const Statistic: FC<StatisticProps> = ({ value, name, className }) => {
  return (
    <div className={`flex flex-col gap-0.5 p-1.5 items-center ${className}`}>
      <span className="max-mobile:text-base text-xl font-bold text-gradient">
        {formatNumber(value)}
      </span>
      <span className="max-mobile:text-11 text-sm">{name}</span>
    </div>
  );
};
