import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const RecommendedTalents = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    console.log(carouselRef.current?.offsetWidth);
    if (carouselRef.current) {
      setWidth(
        carouselRef.current?.scrollWidth - carouselRef.current?.offsetWidth,
      );
    }
    console.log(width);
  }, []);
  return (
    <div className="mt-10">
      <div className="">
        <h1 className="text-base sm:text-xl lg:text-3xl font-bold capitalize text-[#4632A8]">
          recommended talents
        </h1>
        <motion.div ref={carouselRef} className="overflow-hidden mt-3 w-auto">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-5 w-full items-center"
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const Card = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white flex flex-col justify-center space-y-8 p-6 flex-grow border flex-shrink-0 rounded-[2rem] w-[26rem]">
      <header className="self-center">
        <div className="h-36 w-36 rounded-full bg-gray-200"></div>
      </header>

      <div className="text-center">
        <h3 className="capitalize text-base sm:text-lg lg:text-2xl font-bold">
          jane willams
        </h3>
        <h2 className="text-base sm:text-lg lg:text-xl capitalize font-bold">
          mobile app developer
        </h2>
      </div>
      <div className="flex jusify-center items-center mx-auto">
        <button
          onClick={() => navigate("/client/profile")}
          className="px-8 text-base sm:text-lg font-normal py-2.5 text-white rounded-lg bg-[#4632A8] focus:border-0 focus:ring-2 focus:ring-offset-1 focus:ring-[#4632A8] hover:bg-[#4632A8]/80 transition active:bg-[#4632A8]"
        >
          View profile
        </button>
      </div>
    </div>
  );
};
