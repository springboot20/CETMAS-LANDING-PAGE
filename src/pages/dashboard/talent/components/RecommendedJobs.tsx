import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const RecommendedJobs: React.FC = () => {
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
    <div>
      <h1 className="text-xl lg:text-3xl font-bold capitalize text-[#4632A8]">
        recommended jobs
      </h1>
      <motion.div ref={carouselRef} className="overflow-hidden mt-3 w-auto">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-5 w-full items-center"
        >
          <RecommendedJobCard />
          <RecommendedJobCard />
          <RecommendedJobCard />
          <RecommendedJobCard />
          <RecommendedJobCard />
          <RecommendedJobCard />
        </motion.div>
      </motion.div>
    </div>
  );
};

const RecommendedJobCard = () => {
  return (
    <motion.div className="bg-white flex flex-col flex-grow p-7 w-[25rem] flex-shrink-0 rounded-xl">
      <h3 className="text-xl lg:text-2xl font-bold capitalize">
        mobile app developer
      </h3>
      <p className="my-4 tracking-2 text-base font-normal text-gray-700">
        We are looking for an experienced mobile app developer who is proficient
        in React Native. The main responsibility will be to build a mobile app
        from....
      </p>
      <div className="flex items-center space-x-2">
        <button className="capitalize text-sm px-5 py-2 bg-[#A79BE133]">
          3 months
        </button>
        <button className="capitalize text-sm px-5 py-2 bg-[#A79BE133]">
          pending
        </button>
      </div>
      <button className="mt-6 text-white mx-auto bg-[#4632A8] rounded-lg flex px-10 py-2 items-center justify-center capitalize text-lg font-semibold">
        apply now
      </button>
    </motion.div>
  );
};
