import React from 'react'

export const TestimonialSection: React.FC = () => {
  return (
    <section className="py-10">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-2xl lg:text-4xl font-bold text-center">
          What People say About{' '}
          <span
            className="text-[#4632A8]"
            style={{ textTransform: 'uppercase' }}
          >
            cetmas
          </span>
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 mt-10 gap-4 p-4">
          <div className="rounded-xl bg-[#4632A8] p-4">
            <div className="flex items-center space-x-2 ">
              <span className="flex items-center h-20 w-20 bg-white rounded-full"></span>
              <p
                className="flex flex-col text-white"
                style={{ textTransform: 'capitalize' }}
              >
                <span className="font-normal text-base">williams james</span>
                <span className="font-thin text-base">graphic designer</span>
              </p>
            </div>
            <p className="text-sm sm:text-base font-light text-center text-white mt-3 sm:mt-10 sm:px-2 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur. Urna arcu facilisis lectus
              dui elementum. Tempor hac accumsan maecenas semper ullamcorper
              nisl adipiscing. Morbi id imperdiet auctor mauris. Orci eleifend
              duis pellentesque suspendisse morbi tellus..
            </p>
          </div>

          <div className="rounded-xl bg-[#4632A8] p-4">
            <div className="flex items-center space-x-2 ">
              <span className="flex items-center h-20 w-20 bg-white rounded-full"></span>
              <p
                className="flex flex-col text-white"
                style={{ textTransform: 'capitalize' }}
              >
                <span className="font-normal text-base">williams james</span>
                <span className="font-thin text-base">graphic designer</span>
              </p>
            </div>
            <p className="text-sm sm:text-base font-light text-center text-white mt-3 sm:mt-10 sm:px-2 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur. Urna arcu facilisis lectus
              dui elementum. Tempor hac accumsan maecenas semper ullamcorper
              nisl adipiscing. Morbi id imperdiet auctor mauris. Orci eleifend
              duis pellentesque suspendisse morbi tellus.
            </p>
          </div>

          <div className="rounded-lg bg-[#4632A8] p-4">
            <div className="flex items-center space-x-2 ">
              <span className="flex items-center h-20 w-20 bg-white rounded-full"></span>
              <p
                className="flex flex-col text-white"
                style={{ textTransform: 'capitalize' }}
              >
                <span className="font-normal text-base">williams james</span>
                <span className="font-thin text-base">
                  graphic designer
                </span>
              </p>
            </div>
            <p className="text-sm sm:text-base font-light text-center text-white mt-3 sm:mt-10 sm:px-2 lg:text-lg">
              Lorem ipsum dolor sit amet consectetur. Urna arcu facilisis lectus
              dui elementum. Tempor hac accumsan maecenas semper ullamcorper
              nisl adipiscing. Morbi id imperdiet auctor mauris. Orci eleifend
              duis pellentesque suspendisse morbi tellus.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
