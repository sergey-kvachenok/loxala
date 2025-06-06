import type { FC } from 'react';
import type { StatisticProps } from './types';
import { formatNumber } from '@/shared/lib/formatNumber';

export const Statistic: FC<StatisticProps> = ({ value, name }) => {
  return (
    <div className="flex flex-col gap-0.5 p-1.5 items-center">
      <span className="text-xl font-bold text-gradient">
        {formatNumber(value)}
      </span>
      <span className="text-sm">{name}</span>
    </div>
  );
};
