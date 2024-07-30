import React, { forwardRef } from 'react';
import { classNames } from '@/util';

type CheckBoxProp = React.InputHTMLAttributes<HTMLInputElement> & {
  htmlFor?: string;
  label: string;
  labelClass?: string;
  ref?: React.RefObject<HTMLInputElement>;
};

export const CheckBoxField = forwardRef<HTMLInputElement, CheckBoxProp>(
  ({ htmlFor, label, labelClass, ...rest }, ref) => {
    return (
      <div className="space-x-4 flex items-center">
        <input ref={ref} id={htmlFor} {...rest} />
        <label htmlFor={htmlFor} className={classNames(labelClass)}>
          {label}
        </label>
      </div>
    );
  }
);
