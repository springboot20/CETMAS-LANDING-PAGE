import React, { useState, useEffect, useCallback } from 'react';
import {
  Combobox,
  ComboboxOptions,
  ComboboxInput,
  ComboboxOption,
  Field,
  ComboboxButton,
} from '@headlessui/react';
import { classNames } from '@/util';

type SearchOptionTypes = {
  label: string;
  value: string;
}[];

interface SearchProps {
  options: SearchOptionTypes;
  value: string;
  onChange: (value: { value: string; label: string }) => void;
  placeholder: string;
}

export const SearchField: React.FC<SearchProps> = ({ value, options, onChange, placeholder }) => {
  const [localStateOptions, setLocalStateOptions] = useState<SearchOptionTypes>([]);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    setLocalStateOptions(options);
  }, [options]);

  const handleOnChange = (value: { label: string; value: string } | null) => {
    if (value === null) {
      // Handle the null case, set to a default value or the first option
      onChange(options[0]);
    } else {
      onChange(value);
    }
  };

  const searchValue = useCallback(() => options.find((o) => o.value === value) || null,[value, options]  );

  return (
    <Field>
      <Combobox as='div' onChange={handleOnChange} value={searchValue()}>
        <div className='relative'>
          <ComboboxInput
            displayValue={(option: (typeof options)[0]) => option?.label}
            className={classNames(
              'w-full rounded-lg border-none bg-white h-14 py-1.5 pr-8 pl-3 text-base text-gray-700',
              'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-25 shadow-sm'
            )}
            placeholder={placeholder}
            onChange={(event) => {
              setLocalStateOptions(options.filter((opt) => opt.label.includes(event.target.value)));
              setQuery(event.target.value);
            }}
          />

          <ComboboxButton className='group absolute right-2 top-1/2 -translate-y-1/2 px-2.5'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='size-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
            </svg>
          </ComboboxButton>

          <ComboboxOptions
            anchor='bottom'
            transition
            className={classNames(
              'w-[var(--input-width)] bg-white border border-gray-300 mt-2 p-1 [--anchor-gap:var(--spacing-1)] empty:invisible',
              'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
            )}>
            {localStateOptions.length === 0 && query !== '' ? (
              <div className='relative cursor-default select-none px-4 py-2 text-gray-700'>
                Nothing found.
              </div>
            ) : (
              localStateOptions.map((opt) => (
                <ComboboxOption
                  key={opt.value}
                  value={opt}
                  className='group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none'>
                  <span className='text-base text-gray-700'>{opt.label}</span>
                </ComboboxOption>
              ))
            )}
          </ComboboxOptions>
        </div>
      </Combobox>
    </Field>
  );
};
