import  { useImperativeHandle, forwardRef, useRef } from 'react';
import { MagnifyingGlass } from '@/components/Icons';
import { InputField } from '../TextField/InputField';

export const SearchField = forwardRef((_, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
  }));

  return (
    <div className='flex flex-1 items-center w-full lg:w-[25rem] xl:w-[30rem] h-14 lg:h-16 bg-white shadow-sm rounded-md border'>
      <InputField
        ref={inputRef}
        label='Search'
        placeholder='Search for jobs'
        htmlFor='search'
        labelClass='hidden'
        className='h-full flex-1 block w-full border-0 focus:outline-none focus:border-none focus:ring-0 rounded-tl-xl rounded-bl-xl text-lg font-normal pl-6 pr-2 text-gray-700'
      />
      <button
        className='flex px-3 items-center justify-center'
        onClick={() => {
          inputRef.current?.focus();
        }}>
        <span className='sr-only'>search</span>
        <MagnifyingGlass className='h-7 cursor-pointer' />
      </button>
    </div>
  );
});
