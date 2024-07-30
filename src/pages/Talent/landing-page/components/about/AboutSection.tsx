import React from 'react'
import PexelOne from '@/assets/pexel-george-image.jpg'
import PexelTwo from '@/assets/pexels-kineldel-image.jpg'

export const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="max-w-8xl mx-auto p-4">
        <div className="text-center space-y-5">
          <h1 className="text-2xl lg:text-4xl font-bold">
            About{' '}
            <span
              className="text-[#4632A8]"
              style={{ textTransform: 'uppercase' }}
            >
              cetmas
            </span>
          </h1>
          <p className="text-sm sm:text-lg max-w-[60rem] mx-auto">
            A Comprehensive talent management software encompassing
            functionalities related to recruitment, entire process of hiring,
            job posting to candidate onboarding, performance management,
            learning and development, and employee engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-8 gap-y-4 md:gap-3">
          <div className="xl:col-span-2 aspect-w-3 aspect-h-2 md:aspect-h-[1.5]">
            <img
              src={PexelOne}
              alt="grid logo"
              className="rounded-xl object-center object-cover shadow"
            />
          </div>

          <div className="w-full col-span-full md:col-span-1 p-6 space-y-5 xl:col-span-1 flex flex-col xl:p-14 justify-between bg-[#A79BE1B2]/20 lg:p-11 rounded-xl">
            <h1 className="text-base sm:text-xl font-semibold lg:text-3xl text-gray-900">
              Work from the comfort of your home
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:leading-[2] text-gray-800">
              Showcase Your Skills: Create a compelling profile that highlights
              your soft skills and experience. Attract clients who value what
              you bring to the table.
            </p>
            <a
              className="w-fit inline-block py-2.5 md:py-3.5 xl:text-base bg-[#4632A8] text-white text-sm px-5 rounded-lg focus:outline-none hover:-translate-y-0.5 hover:bg-[#4632A8]/80 transition transform focus:ring-offset-1 focus:ring-2 focus:ring-[#4632A8]/50 active:bg-[#4632A8]"
              href="#"
            >
              Join as Talent
            </a>
          </div>

          <div className="w-full col-span-full md:col-span-1 p-6 space-y-5 xl:col-span-1 flex flex-col xl:p-14 justify-between bg-[#A79BE1B2]/20 lg:p-11 rounded-xl order-4 xl:order-[0]">
            <h1 className="text-base sm:text-xl font-semibold lg:text-3xl text-gray-900">
              Find the best talented freelancers
            </h1>
            <p className="text-sm sm:text-base md:text-lg xl:leading-[2] text-gray-800">
              Post Your Job: Clearly outline your project requirements and the
              soft skills you need. Our platform will help you attract the right
              candidates.
            </p>
            <a
              className="w-fit inline-block py-2.5 md:py-3.5 xl:text-base bg-[#4632A8] text-white text-sm px-5 rounded-lg focus:outline-none hover:-translate-y-0.5 hover:bg-[#4632A8]/80 transition transform focus:ring-offset-1 focus:ring-2 focus:ring-[#4632A8]/50 active:bg-[#4632A8]"
              href="#"
            >
              Join as Talent
            </a>
          </div>

          <div className="xl:col-span-2 aspect-w-3 aspect-h-2 md:aspect-h-[1.5]">
            <img
              src={PexelTwo}
              alt="grid logo"
              className="rounded-xl object-center object-cover shadow"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
