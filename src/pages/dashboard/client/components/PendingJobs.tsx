import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const PendingJobs = () => {
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
    <div className="">
      <h1 className="text-base sm:text-xl lg:text-3xl font-bold capitalize text-[#4632A8]">
        pending jobs
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
  );
};

const Card = () => {

  const navigate = useNavigate()

  return (
    <div className="bg-white flex flex-col p-8 flex-grow w-[26rem] flex-shrink-0 rounded-xl">
      <header className="flex items-start justify-between">
        <h3 className="text-xl lg:text-2xl font-bold capitalize">
          mobile app developer
        </h3>
        <button>
          <span></span>
          <EllipsisHorizontalIcon className="h-9" />
        </button>
      </header>
      <p className="my-4 text-base sm:text-lg font-normal text-gray-700">
        We are looking for an experienced mobile app developer who is proficient
        in React Native. The main responsibility will be to build a mobile app
        from....
      </p>
      <div className="mx-auto flex items-center justify-center w-full mt-3">
        <button type="button" onClick={()=> navigate("/client/applicants")} className="capitalize text-base sm:text-lg lg:text-xl font-bold px-9 py-3 text-[#4632A8] border-[#4632A8] border rounded-xl">
          view applicants
        </button>
      </div>
    </div>
  );
};
