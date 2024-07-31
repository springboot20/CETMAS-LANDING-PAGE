import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const JobCard: React.FC = () => (
  <motion.div className="w-[25rem] bg-white flex flex-col flex-shrink-0 flex-grow space-y-4 p-7 sm:p-9 rounded-xl ">
    <h3 className="text-xl lg:text-2xl font-bold capitalize">
      mobile app developer{" "}
    </h3>
    <p className="text-lg font-normal text-gray-700">
      We are looking for an experienced mobile app developer who is proficient
      in React Native. The main responsibility will be to build a mobile app
      from....
    </p>
    <div className="flex justify-between">
      <button className="capitalize px-11 py-2.5 sm:px-8 sm:py-1.5 rounded-lg bg-[#4632A8] focus:outline-none text-lg font-semibold text-white hover:bg-[#4632A8]/70 transform transition delay-200 hover:-translate-y-0.5">
        cancel
      </button>
      <button
        disabled
        className="capitalize px-11 py-2.5 sm:px-7 sm:py-1.5 text-lg font-semibold rounded-lg disabled:bg-[#4632A8]/60 text-white"
      >
        pending
      </button>
    </div>
  </motion.div>
);

export const RequestedJobs: React.FC = () => {
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
        requested jobs
      </h1>
      <motion.div ref={carouselRef} className="overflow-hidden lg:p-2 mt-3 w-auto">
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex items-center gap-5"
        >
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </motion.div>
      </motion.div>
    </div>
  );
};
