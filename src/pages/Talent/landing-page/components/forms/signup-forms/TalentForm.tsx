import React, { useState } from 'react';
import CETMASLOGO from '@/assets/cetmas-logo.png';
import TalentImage from '@/assets/talent.svg';
import { AnimatePresence, motion } from 'framer-motion';
import {InputField} from '@/components/forms/TextField/InputField'

export const TalentForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps: JSX.Element[] = [
    <SocialForm key={'social'} />,
    <ContactForm key={'contact'} />,
    <BioForm key={'bio'} />,
    <OtherForm key={"other-form"} />
  ];

  const handleNextStep = (): void => {
    setCurrentStep((prevStep) => Math.min(prevStep + 1, steps.length - 1));
  };

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <section className='flex items-center justify-center bg-transparent p-4 sm:p-8 h-screen xl:p-0'>
      <div className='bg-white lg:bg-transparent md:shadow-lg lg:shadow-none flex-1 flex-shrink-0 max-w-xl lg:grid lg:grid-cols-2 lg:max-w-6xl gap-10 mx-auto relative'>
        <header className='bg-none bg-transparent hidden lg:block overflow-auto'>
          <div className='space-y-4 sm:space-y-9'>
            <img src={CETMASLOGO} alt='Cetmas logo' className='h-16' />
            <h1 className='text-4xl xl:text-5xl font-bold text-gray-800 text-center lg:leading-snug lg:text-justify xl:leading-normal'>
              Develop your skill, Earn <br className='hidden lg:block' /> more and Build your{' '}
              <br className='hidden lg:block' /> Portfolio.
            </h1>
          </div>
          <div className='hidden lg:block'>
            <img src={TalentImage} alt='Talent logo' className='h-[25rem] w-[34rem] xl:w-[45rem]' />
          </div>
        </header>
        <div className='flex flex-col justify-center items-center min-h-full max-w-xl w-full overflow-hidden p-2 md:p-8 lg:p-4'>
          <header className='mx-auto text-center my-4'>
            <h1 className='text-[#4632A8] font-extrabold text-2xl xl:text-5xl font-leelawadee'>
              Join Now!
            </h1>
          </header>
          <form className='w-full'>
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentStep}
                initial='initial'
                animate='animate'
                exit='exit'
                variants={variants}
                transition={{ duration: 0.5 }}
                className=''>
                {steps[currentStep]}
              </motion.div>
            </AnimatePresence>

            {currentStep < steps.length - 1 ? (
              <button
                type='button'
                onClick={handleNextStep}
                className='block py-3 w-full mt-4 bg-[#4632A8] text-white text-sm sm:text-base font-semibold rounded-md transform hover:-translate-y-1.5 transition shadow-md hover:bg-[#4632A8]/80 active:bg-[#4632A8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4632A8]/70 tracking-wider sm:mt-4 md:py-2.5 lg:mx-auto lg:w-1/3 xl:mt-12'>
                Next
              </button>
            ) : (
              <button
                type='button'
                className='block py-3 w-full mt-8 bg-[#4632A8] text-white text-sm sm:text-base font-semibold rounded-md transform hover:-translate-y-1.5 transition shadow-md hover:bg-[#4632A8]/80 active:bg-[#4632A8] focus:ring-outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4632A8]/70 tracking-wider sm:mt-4 md:py-2.5 lg:mx-auto xl:py-3.5 lg:text-lg lg:w-2/3 xl:mt-12'>
                Sign Up
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

const SocialForm = () => (
  <div className='space-y-3 lg:space-y-5'>
    <fieldset className='space-y-2'>
      <InputField
        id='full-name'
        type='text'
        label='full name'
        htmlFor='full-name'
        placeholder='Enter full name'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>
    <fieldset className='space-y-2'>
      <InputField
        id='email'
        type='email'
        htmlFor='email'
        label='email'
        placeholder='Enter email'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-base sm:leading-6 focus:outline-none'
      />
    </fieldset>

    <fieldset className='space-y-2'>
      <InputField
        id='password'
        type='password'
        label="Password"
        htmlFor='password'
        placeholder='Enter password'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>
  </div>
);

const ContactForm = () => (
  <div className='space-y-3 lg:space-y-5'>
    <fieldset className='space-y-2'>
      <InputField
        id='phone-number'
        type='tel'
        placeholder='+2348012345678'
            htmlFor='phone-number'
            label='phone number'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>
    <fieldset className='space-y-2'>
      <label
        htmlFor='profession'
        className='text-sm font-semibold text-gray-700 sm:text-base block'>
        Profession
      </label>
      <input
        id='profession'
        type='text'
        placeholder='List of profession'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>

    <fieldset className='space-y-2'>
      <InputField
        id='location'
        type='text'
        htmlFor='location'
        label="location"
        placeholder='List of states'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>
  </div>
);

const BioForm = () => (
  <div className='space-y-3 lg:space-y-5'>
    <fieldset className='space-y-2'>
      <label htmlFor='gender' className='text-sm font-semibold text-gray-700 sm:text-base block'>
        Gender
      </label>
      <select
        id='gender'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'>
        <option>Gender</option>
        <option value='M'>Male</option>
        <option value='F'>Female</option>
      </select>
    </fieldset>

    <fieldset className='space-y-2'>
      <label htmlFor='skills' className='text-sm font-semibold text-gray-700 sm:text-base block'>
        Skills
      </label>
      <select
        id='skills'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'>
        <option>List of skills</option>
      </select>
    </fieldset>

    <fieldset className='space-y-2'>
      <InputField
        id='cv'
        type='file'
        multiple
        max={3}
        htmlFor='cv'
        label="CV"
        placeholder='Upload a google drive link of your CV'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>
  </div>
);

const OtherForm = () => (
  <div className='space-y-3 lg:space-y-5'>
    <fieldset className='space-y-2'>
      <InputField
        id='portfolio'
        type='text'
         htmlFor='portfolio'
        label="portfolio"
        placeholder='Link to portfolio'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-sm sm:leading-6 focus:outline-none'
      />
    </fieldset>
    <fieldset className='space-y-2'>
      <InputField
        id='bio'
        type='text'
        htmlFor='bio'
        label="bio"
        placeholder='What do you want client to know about you'
        className='block w-full px-4 rounded-md border-0 py-2.5 sm:py-4 md:py-3 text-base font-normal xl:py-5 text-gray-800 shadow-sm ring-[1.15px] ring-inset ring-gray-800 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] sm:text-base sm:leading-6 focus:outline-none'
      />
    </fieldset>
  </div>
);
