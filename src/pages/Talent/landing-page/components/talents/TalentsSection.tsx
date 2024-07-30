import React from 'react'
import WorkOutfit from '@/assets/work-outfit.jpg'

export const TalentsSection: React.FC = () => {
  return (
    <section className="lg:px-0 py-10">
      <div className="mx-w-8xl mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          Join Our 100+{' '}
          <span
            className="text-[#4632A8]"
            style={{ textTransform: 'uppercase' }}
          >
            Talents
          </span>
        </h1>

        <div className="pt-8 pb-10">
          <div className="grid grid-cols-2 place-items-center sm:grid-cols-3 md:grid-cols-4 lg:flex lg:place-items-start  lg:justify-center flex-wrap p-4 gap-10 xl:gap-6 lg:h-[11rem] xl:h-[16rem]">
            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8]">
              <img
                src={WorkOutfit}
                alt="work outfit image 1"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8] lg:self-end xl:m-7">
              <img
                src={WorkOutfit}
                alt="work outfit image 2"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8]">
              <img
                src={WorkOutfit}
                alt="work outfit image 3"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8] lg:self-end xl:m-7">
              <img
                src={WorkOutfit}
                alt="work outfit image 4"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8]">
              <img
                src={WorkOutfit}
                alt="work outfit image 5"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8] lg:self-end xl:m-7">
              <img
                src={WorkOutfit}
                alt="work outfit image 6"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8]">
              <img
                src={WorkOutfit}
                alt="work outfit image 7"
                className="w-full"
              />
            </div>

            <div className="h-32 w-32 sm:w-40 sm:h-40 md:w-32 md:h-32 lg:h-24 lg:w-24 2xl:w-32 2xl:h-32 rounded-full overflow-hidden border-2 border-gray-50 ring-[0.8px] ring-offset-[7px] ring-[#4632A8] lg:self-end xl:m-7 hidden xl:block">
              <img
                src={WorkOutfit}
                alt="work outfit image 8"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
