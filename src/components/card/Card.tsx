import React from 'react';
import { classNames } from '@/util';

export const Card: React.FC<{ children: React.ReactNode; className: string }> = ({
  children,
  className,
}) => {
  return <div className={classNames('shadow-md p-5', className)}>{children}</div>;
};
