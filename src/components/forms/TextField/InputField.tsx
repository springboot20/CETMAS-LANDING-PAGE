import { forwardRef } from 'react';
import { InputFieldProps } from '@/types/forms/index';
import { classNames } from '@/util';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ htmlFor, label, labelClass, ...rest }, ref) => {
    return (
      <>
        <label
          htmlFor={htmlFor}
          className={classNames(
            'text-sm font-semibold text-gray-700 sm:text-base block',
            labelClass
          )}>
          {label}
        </label>
        <input id={htmlFor} ref={ref} {...rest} />
      </>
    );
  }
);
