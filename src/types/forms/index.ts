import React from 'react';

export type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  htmlFor?: string;
  label: string;
  labelClass?: string;
  ref?: React.RefObject<HTMLInputElement>;
};

export type SelectFieldProps = React.SelectHTMLAttributes<HTMLSelectElement>;