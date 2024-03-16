import React, { ReactNode } from 'react';

interface TooltipProps {
    children: ReactNode;
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

const Tooltip: React.FC<TooltipProps> = ({ content, children, position = 'top' }) => {
  return (
    <div className="group">
      {children}
      <span
        className={`tooltip absolute z-50 bg-primary-600 text-white p-3 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          position === 'top'
            ? 'origin-top-left top-100'
            : position === 'bottom'
            ? 'origin-bottom-left bottom-100'
            : position === 'left'
            ? 'origin-top-right left-100'
            : 'origin-top-left right-100'
        }`}
      >
        {content}
      </span>
    </div>
  );
};

export default Tooltip;