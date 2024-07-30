import React from 'react';
import MartadLogo from '@/assets/martad.png';
import ZenoLogo from '@/assets/zeno.jpg';
import HWLogo from '@/assets/hw-logo.png';
import TLogo from '@/assets/t-logo.png';
import BeentosLogo from '@/assets/beentos.png';
import DevAfricaLogo from '@/assets/dev-africa-logo.png';
import ICSLogo from '@/assets/ics-logo.png';

export const TrustedPartners: React.FC = () => {
  return (
    <section className='lg:p-16'>
      <div className='p-4'>
        <h1 className='text-2xl lg:text-4xl font-bold text-center'>
          Our Trusted <span className='text-[#4632A8]'>Partners</span>
        </h1>
        <nav className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-8 mt-10'>
          <div className='trusted-label'>
            <img
              src={MartadLogo}
              alt='Cephas logo'
              className='absolute h-12 sm:h-16  md:h-16 lg:h-11 xl:h-16'
            />
          </div>

          <div className='trusted-label'>
            <img src={ZenoLogo} alt='Boed logo' className='absolute h-12 md:h-16 lg:h-11 xl:h-16' />
          </div>

          <div className='trusted-label'>
            <img
              src={HWLogo}
              alt='Nigeria logo'
              className='absolute h-12 sm:h-14 md:h-16 lg:h-11 xl:h-16'
            />
          </div>

          <div className='trusted-label'>
            <img src={TLogo} alt='window logo' className='absolute h-10 md:h-16 g:h-11 xl:h-16' />
          </div>

          <div className='trusted-label'>
            <img
              src={BeentosLogo}
              alt='shell logo'
              className='absolute h-12 md:h-16 lg:h-11 xl:h-16'
            />
          </div>

          <div className='trusted-label'>
            <img
              src={DevAfricaLogo}
              alt='Cephas logo'
              className='absolute h-12 sm:h-16 md:h-16 lg:h-11 xl:h-12'
            />
          </div>

          <div className='trusted-label'>
            <img
              src={ICSLogo}
              alt='Cephas logo'
              className='absolute h-12 sm:h-16 md:h-16 lg:h-11 xl:h-16'
            />
          </div>
        </nav>
      </div>
    </section>
  );
};
