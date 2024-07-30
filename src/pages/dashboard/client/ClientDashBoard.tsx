import { classNames } from "@/util";
import React from "react";
import { PendingJobs } from "./components/PendingJobs";
import { RecommendedTalents } from "./components/RecommendTalents";

export const ClientDashBoard: React.FC = () => {
  return (
    <section className="mt-32 px-4 lg:px-10">
      <div className="mx-auto space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <Card
            className={"bg-[#9747FF66]"}
            title={"posted jobs"}
            count={10}
          />

          <Card
            className={"bg-[#4632A866]"}
            title={"jobs done"}
            count={3}
          />

          <Card
            className={"bg-[#A79BE166]"}
            title={"pending jobs"}
            count={3}
          />

          <Card
            className={"bg-[#9747FF66]"}
            title={"total job"}
            count={3}
          />
        </div>

        <div className="">
          <PendingJobs />
          <RecommendedTalents/>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{
  className: string;
  title: string;
  count: number;
}> = ({ className, title, count }) => {
  return (
    <div
      className={classNames(
        "p-8 rounded-2xl flex justify-between h-[14rem]",
        className,
      )}
    >
      <div className="flex flex-col justify-between">
        <div>
          <h3 className="text-xl sm:text-5xl font-bold">
            10
          </h3>
          <p className="capitalize text-base sm:text-lg">
            {title}
          </p>
        </div>

        <div>
          <h3 className="text-base sm:text-lg lg:text-xl font-normal">
            {`+${count}`}
          </h3>
          <p className="capitalize text-base">this month</p>
        </div>
      </div>
      <div className="self-end">
        <svg
          width="119"
          height="76"
          viewBox="0 0 119 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M1 75C1 75 6.99218 42.4842 25 36.4303C39.523 31.5479 50.3786 49.8099 64 43.1576C76.9722 36.8223 68.6553 21.2068 79.5 12.2121C91.1064 2.58573 115 12.2121 118 1"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
};
