import React from 'react';
import TalentImage from '@/assets/talent.svg';
import ClientImage from '@/assets/client.png';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react';
import { Link } from 'react-router-dom';

export const SignUp: React.FC<{ isOpen: boolean; close: () => void }> = ({ isOpen, close }) => {
  return (
    <Dialog
      open={isOpen}
      as='div'
      transition
      className='w-full relative z-10 rounded-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
      onClose={close}>
      <DialogBackdrop className='fixed inset-0 bg-black/30' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4'>
          <DialogPanel className='p-8 bg-white shadow-lg rounded-lg flex-1 max-w-4xl xl:max-w-6xl xl:p-12'>
            <header className='text-center rounded-none bg-transparent'>
              <h1 className='text-xl lg:text-3xl xl:text-2xl  font-bold text-gray-900'>
                SignUp as:
              </h1>
            </header>
            <div className='grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 w-full'>
              <div className='flex flex-col space-y-36 sm:space-y-44 md:space-y-64 lg:space-y-44 xl:max-w-sm xl:mx-auto'>
                <div className='w-full h-24 sm:h-20 lg:h-32 xl:h-40'>
                  <img src={TalentImage} alt='Talent logo' className='object-cover' />
                </div>

                <div className='space-y-6 text-center'>
                  <h3 className='text-center text-2xl font-bold text-gray-800'>Talent</h3>

                  <p className='text-xs font-normal lg:text-base leading-normal text-gray-900'>
                    Lorem ipsum dolor sit amet consectetur. Urna arcu facilisis lectus dui
                    elementum. Orci eleifend duis pellentesque suspendisse morbi tellus.
                  </p>
                  <Link
                    to='/register/talent'
                    className='inline-block px-10 py-2 rounded-md font-normal text-sm xl:font-semibold text-white bg-[#4632A8]'>
                    SignUp
                  </Link>
                </div>
              </div>

              <div className='flex flex-col space-y-36 sm:space-y-44 md:space-y-64 lg:space-y-44 xl:max-w-sm xl:mx-auto'>
                <div className='w-full h-24 sm:h-20 lg:h-32 xl:h-40'>
                  <img src={ClientImage} alt='Talent logo' className='object-cover' />
                </div>

                <div className='space-y-6 text-center'>
                  <h3 className='text-center text-2xl font-bold text-gray-900'>Client</h3>

                  <p className='text-xs font-normal lg:text-base leading-normal text-gray-900'>
                    Lorem ipsum dolor sit amet consectetur. Urna arcu facilisis lectus dui
                    elementum. Orci eleifend duis pellentesque suspendisse morbi tellus.
                  </p>
                  <Link
                    to='/register/client'
                    className='inline-block px-10 py-2 rounded-md font-normal text-sm xl:font-semibold text-white bg-[#4632A8]'>
                    SignUp
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
