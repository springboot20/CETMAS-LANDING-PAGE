import React, { Fragment } from 'react';

export const AboutTalent: React.FC = () => {
  return (
    <Fragment>
      <section className="z-10">
      <header className='mt-24 bg-gray-300 h-80'>
        <div className='flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-10 lg:max-w-8xl lg:mx-auto p-8 items-center justify-center sm:justify-start h-full'>
          <span className='block bg-white h-40 w-40 lg:w-56 lg:h-56 rounded-full shadow border'></span>
          <div className='flex flex-col items-center sm:items-start justify-center space-y-1 text-gray-800'>
            <span className='text-sm font-semibold lg:text-base'>Front End Developer</span>
            <h1 className='text-2xl lg:text-4xl font-bold'>Jane Williams</h1>
          </div>
        </div>
      </header>
      <section>
        <div className='max-w-8xl mx-auto p-4 py-10 space-y-9 grid grid-cols-1 lg:grid-cols-5 lg:space-y-0  '>
          <div className='flex flex-col space-y-10 flex-1 flex-grow lg:col-span-2'>
            <div className='flex items-start flex-col'>
              <h1 className='text-2xl font-bold text-gray-800 capitalize'>location</h1>
              <span className='text-base capitalize text-gray-700 font-normal'>nigeria</span>
            </div>
            <div className='flex items-start flex-col'>
              <h1 className='text-2xl font-bold text-gray-800 capitalize'>language</h1>
              <span className='text-base capitalize text-gray-700 font-normal'>english</span>
            </div>
            <div className='flex items-start flex-col'>
              <h1 className='text-2xl font-bold text-gray-800 capitalize'>skills</h1>
              <div className='flex items-center gap-2 flex-wrap max-w-sm'>
                <span className='block text-base font-normal capitalize text-gray-700'>
                  javaScript library
                </span>
                <span className='block text-base font-normal capitalize text-gray-700'>
                  responsive web design
                </span>
                <span className='block text-base font-normal capitalize text-gray-700'>
                  version control
                </span>
                <span className='block text-base font-normal uppercase text-gray-700'>css</span>
                <span className='block text-base font-normal capitalize text-gray-700'>
                  testing and debugging
                </span>
                <span className='block text-base font-normal capitalize text-gray-700'>
                  git version control
                </span>
              </div>
            </div>
          </div>
          <hr className='block border-gray-300 border-[1.45px] lg:hidden' />
          <div className='relative lg:px-9 lg:col-span-3'>
            <span className='hidden lg:block absolute left-0 top-0 h-full w-[0.95px] bg-gray-300'></span>
            <h1 className='capitalize text-2xl font-bold text-gray-800'>about</h1>
            <div className='space-y-12 mt-5'>
              <p className='text-justify text-base lg:text-lg text-gray-600'>
                Lorem ipsum dolor sit amet consectetur. Consequat diam vel tortor nunc vel tristique
                ornare odio. Et eget non nulla cras adipiscing lorem ipsum gravida scelerisque.
                Congue facilisi luctus elementum pellentesque pulvinar adipiscing malesuada mollis
                sem. Posuere eu in consequat suscipit tortor. Nunc dictumst odio nibh morbi.
                Consectetur arcu felis mollis arcu. Felis nunc in ut at ut. Lacinia suscipit proin
                justo sagittis ut ultrices. Quis diam sit etiam turpis. Orci risus odio elementum
                urna convallis. Adipiscing mi sed accumsan facilisis amet enim eu. Lacus proin
                varius dignissim erat. Ut tincidunt sed tempor suscipit euismod nunc sed blandit
                quisque. Morbi nunc nec euismod pharetra gravida ullamcorper arcu varius auctor.
                Faucibus risus fermentum pellentesque justo ut vulputate aliquam dui a. Interdum
                vitae platea nulla sed nec non. Fames cursus malesuada amet morbi amet nulla.
                Pellentesque maecenas fusce bibendum elit ut egestas vitae nibh elementum. Netus non
                adipiscing est posuere quam mauris sodales lectus. Lorem ipsum dolor sit amet
                consectetur. Consequat diam vel tortor nunc vel tristique ornare odio. Et eget non
                nulla cras adipiscing lorem ipsum gravida scelerisque. Congue facilisi luctus
                elementum pellentesque pulvinar adipiscing malesuada mollis sem. Posuere eu in
                consequat suscipit tortor. Nunc dictumst odio nibh morbi. Consectetur arcu felis
                mollis arcu. Felis nunc in ut at ut. Lacinia suscipit proin justo sagittis ut
                ultrices. Quis diam sit etiam turpis. Orci risus odio elementum urna convallis.
                Adipiscing mi sed accumsan facilisis amet enim eu. Lacus proin varius dignissim
                erat. Ut tincidunt sed tempor suscipit euismod nunc sed blandit quisque. Morbi nunc
                nec euismod pharetra gravida ullamcorper arcu varius auctor. Faucibus risus
                fermentum pellentesque justo ut vulputate aliquam dui a. Interdum vitae platea nulla
                sed nec non. Fames cursus malesuada amet morbi amet nulla. Pellentesque maecenas
                fusce bibendum elit ut egestas vitae nibh elementum. Netus non adipiscing est
                posuere quam mauris sodales lectus.
              </p>
              <p className='text-justify text-base lg:text-lg text-gray-600'>
                Lorem ipsum dolor sit amet consectetur. Consequat diam vel tortor nunc vel tristique
                ornare odio. Et eget non nulla cras adipiscing lorem ipsum gravida scelerisque.
                Congue facilisi luctus elementum pellentesque pulvinar adipiscing malesuada mollis
                sem. Posuere eu in consequat suscipit tortor. Nunc dictumst odio nibh morbi.
                Consectetur arcu felis mollis arcu. Felis nunc in ut at ut. Lacinia suscipit proin
                justo sagittis ut ultrices. Quis diam sit etiam turpis. Orci risus odio elementum
                urna convallis. Adipiscing mi sed accumsan facilisis amet enim eu. Lacus proin
                varius dignissim erat. Ut tincidunt sed tempor suscipit euismod nunc sed blandit
                quisque. Morbi nunc nec euismod pharetra gravida ullamcorper arcu varius auctor.
                Faucibus risus fermentum pellentesque justo ut vulputate aliquam dui a. Interdum
                vitae platea nulla sed nec non. Fames cursus malesuada amet morbi amet nulla.
                Pellentesque maecenas fusce bibendum elit ut egestas vitae nibh elementum. Netus non
                adipiscing est posuere quam mauris sodales lectus. Lorem ipsum dolor sit amet
                consectetur. Consequat diam vel tortor nunc vel tristique ornare odio. Et eget non
                nulla cras adipiscing lorem ipsum gravida scelerisque. Congue facilisi luctus
                elementum pellentesque pulvinar adipiscing malesuada mollis sem. Posuere eu in
                consequat suscipit tortor. Nunc dictumst odio nibh morbi. Consectetur arcu felis
                mollis arcu. Felis nunc in ut at ut. Lacinia suscipit proin justo sagittis ut
                ultrices. Quis diam sit etiam turpis. Orci risus odio elementum urna convallis.
                Adipiscing mi sed accumsan facilisis amet enim eu. Lacus proin varius dignissim
                erat. Ut tincidunt sed tempor suscipit euismod nunc sed blandit quisque. Morbi nunc
                nec euismod pharetra gravida ullamcorper arcu varius auctor. Faucibus risus
                fermentum pellentesque justo ut vulputate aliquam dui a. Interdum vitae platea nulla
                sed nec non. Fames cursus malesuada amet morbi amet nulla. Pellentesque maecenas
                fusce bibendum elit ut egestas vitae nibh elementum. Netus non adipiscing est
                posuere quam mauris sodales lectus.
              </p>
            </div>
          </div>
        </div>
        </section>w
      </section>
    </Fragment>
  );
};
