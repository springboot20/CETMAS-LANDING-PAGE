import React from "react";
import StarImage from "@/assets/star.svg";
import { NavLink } from "react-router-dom";

export const HeroSection: React.FC = () => {
  return (
    <main className="relative bg-[#4632A8] overflow-hidden">
      <img
        src={StarImage}
        alt=""
        className="absolute top-0 h-full w-full -right-80"
      />
      <div className="p-4 flex flex-col lg:flex-row max-w-8xl mx-auto h-full">
        <div className="space-y-8 lg:flex-grow lg:flex-shrink-0 self-center z-10">
          <h1 className="text-2xl sm:text-4xl font-semibold text-white leading-relaxed sm:leading-snug md:leading-normal xl:text-5xl xl:leading-normal font-lato 2xl:text-6xl 2xl:leading-12">
            Bridging the gap between <br className="hidden lg:block" />
            <span className="relative inline-block">
              <span>talents</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-[.95rem] md:-bottom-4 lg:-bottom-4 w-28 -left-4  right-0 lg:w-40 xl:-bottom-5 xl:w-40"
                viewBox="0 0 60 20"
                strokeWidth="1"
              >
                <path
                  d="M 10 10 C 12 12, 30 20, 50 10"
                  stroke="white"
                  fill="transparent"
                />
              </svg>
            </span>{" "}
            and clients <br className="hidden lg:block" /> eliminating stress
            and <br className="hidden lg:block" /> time wastage
          </h1>
          <div className="flex space-x-7 lg:space-x-20 items-center">
            <NavLink
              to="/register/talent"
              className="inline-block py-2.5 sm:py-3 text-[#4632A8] text-base px-3 rounded-lg bg-white focus:outline-none hover:-translate-y-0.5 transition transform xl:py-3.5 xl:px-5 font-semibold font-lato"
            >
              Join as Talent
            </NavLink>
            <NavLink
              to="/register/client"
              className="inline-block py-2.5 sm:py-3 text-white text-base px-3 rounded-lg focus:outline-none ring-1 ring-white hover:-translate-y-0.5 transition transform xl:py-3.5 xl:px-5 font-semibold font-lato"
            >
              Hire a Talent
            </NavLink>
          </div>
        </div>

        {/* image section start*/}

        <div className="hidden md:grid grid-cols-2 relative top-14 lg:top-10 xl:top-16 left-20 lg:left-0">
          <div
            className="relative w-[45rem] -left-[9rem] z-10 h-[40rem] top-0 lg:h-[28rem] lg:-left-20 2xl:-left-16 xl:h-[36rem] 2xl:top-20"
            style={{
              background: "url('/hero-img-01.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="w-[14rem] absolute py-2 px-6 rounded-lg text-center md:bottom-12 lg:bottom-8 bg-white/50 backdrop-blur-sm left-1/2 -translate-x-1/2 lg:left-[25%] lg:-translate-x-[20%] xl:left-[42%] xl:-translate-x-[42%] 2xl:bottom-16 2xl:left-[45%] 2xl:-translate-x-[50%]">
              <h1 className="text-base font-bold text-[#4632A8] ">
                Mobile App Developer
              </h1>
              <p className="text-xs leading-1 font-normal text-[#4632A8]">
                Lorem ipsum dolor sit amet cons ectetur. Turpis ut enim ut
                pretium veus eu dolor ullam
              </p>
            </div>
          </div>

          <div
            className="relative w-[40rem] h-[40rem] lg:h-[28rem] -left-28 lg:-left-4 xl:h-[38rem] xl:top-0 xl:-left-20  xl:bottom-10 2xl:h-[41rem] 2xl:w-[41rem]"
            style={{
              background: "url('/hero-img-02.png')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <div className="w-[14rem] absolute py-2 px-6 left-36 lg:left-11 xl:left-40 bottom-12 lg:bottom-8 xl:bottom-16 rounded-lg text-center bg-white/50 backdrop-blur-sm 2xl:left-48">
              <h1 className="text-base font-bold text-[#4632A8]">
                Product Manager
              </h1>
              <p className="text-xs leading-1 font-normal text-[#4632A8]">
                Lorem ipsum dolor sit amet cons ectetur. Turpis ut enim ut
                pretium veus eu dolor ullam
              </p>
            </div>
          </div>
        </div>
        {/* image section end*/}
      </div>
    </main>
  );
};
