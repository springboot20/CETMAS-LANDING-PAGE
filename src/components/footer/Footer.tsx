import React from 'react'
import cetmasLogo from '../../assets/logo.png'

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 md:p-8 bg-[#4632A8] lg:mt-10">
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
          <div className="flex flex-col space-y-2 w-[266px]">
            <img src={cetmasLogo} alt="cephas logo" className="w-32" />
            <p className="text-white text-xl font-normal">
              Cephas Talent Management <br /> System
            </p>
            <div className="flex items-center space-x-3 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="h-9 fill-white"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-9 fill-white"
              >
                <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-9 fill-white"
              >
                <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                className="h-9 fill-white"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-col text-white text-xl space-y-5 self-end font-normal lg:self-center lg:mt-5">
            <a href="#">Talents</a>
            <a href="#">Clients</a>
          </div>

          <div className="flex flex-col text-white text-xl font-normal space-y-5 lg:self-center">
            <a href="#">About CETMAS</a>
            <a href="#">Trusted Partners</a>
            <a href="#">What People say</a>
          </div>

          <div className="space-y-5 lg:self-center">
            <h3 className="text-white font-bold text-xl">Company</h3>
            <div className="flex flex-col text-white text-lg font-normal   space-y-5">
              <a href="#">About CETMAS</a>
              <a href="#">Cephas Talent Outsourcing</a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className=" border w-9 sm:w-40 md:w-[13rem] lg:w-80 xl:w-[30rem]"></div>
          <small className="text-white text-xs sm:text-sm md:text-base xl:text-sm 2xl:text-base font-normal">
            Powered by Cephas Talent Outsourcing
          </small>
          <div className=" border w-9 sm:w-40 md:w-[13rem] lg:w-80 xl:w-[30rem]"></div>
        </div>
      </div>
    </footer>
  )
}
