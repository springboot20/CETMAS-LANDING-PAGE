import React from 'react';
import { classNames } from '@/util';

export const Button: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: 'base' | 'small';
    severity?: 'primary' | 'secondary' | 'outlined';
    fullWidth?: boolean;
  }
> = ({ size = 'base', fullWidth, className, children, severity = 'primary', ...rest }) => {
  return (
    <button
      className={classNames(
        'inline-flex flex-shrink-0 justify-center items-center text-center transition-all',
        fullWidth ? 'w-full' : '',
        severity === 'secondary'
          ? 'bg-[#4632A8] text-white'
          : severity === 'outlined'
          ? 'ring-1 ring-white text-white'
          : 'text-[#4632A8]',
        size === 'small' ? 'text-sm px-3 py-1.5' : '',
        className ?? ''
      )}
      {...rest}>
      {children}
    </button>
  );
};
