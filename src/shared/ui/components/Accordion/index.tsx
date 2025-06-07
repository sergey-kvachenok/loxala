import { useState, type FC } from 'react';
import type { AccordionProps } from './types';
import { ChevronDownIcon } from '@/shared/ui/icons';

export const Accordion: FC<AccordionProps> = ({ title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <button
      className="gap-4 py-5.5 border border-light-grey-stroke rounded-lg cursor-pointer"
      onClick={toggleExpanded}
    >
      <div className="flex items-center justify-between px-6">
        <div className="relative">
          <span className="text-xl font-bold">{title}</span>
          <span
            className={`absolute inset-0 text-xl font-bold text-gradient transition-opacity duration-500  ${
              isExpanded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {title}
          </span>
        </div>

        <ChevronDownIcon
          className={`transition-all duration-500 ${
            isExpanded ? 'rotate-180 icon-gradient' : ''
          }`}
          withGradient={isExpanded}
        />
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out slim-scrollbar ${
          isExpanded ? 'opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="text-left max-h-[150px] overflow-y-auto border-t pt-2 px-6 border-light-grey-stroke">
          {children}
        </div>
      </div>
    </button>
  );
};
