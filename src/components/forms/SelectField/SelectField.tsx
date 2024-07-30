import React from 'react';
import { SelectFieldProps } from '@/types/forms';

export const SelectField: React.FC<SelectFieldProps> = (props) => {
  return <select {...props}>{props.children}</select>;
};
