import React from "react";
import { Card } from "@/components/card/Card";
import { MapPinIcon } from "@/components/Icons";
import { Button } from "@/components/button/Button";
import { JobCardProps } from "@/types/jobs";

export const JobCard: React.FC<JobCardProps> = (props) => {
  return (
    <Card className="bg-[#A79BE1B2]/20 rounded-xl px-6 md:px-10">
      <header className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-3xl font-bold capitalize">
            {props.title}
          </h1>
          <div className="flex items-center gap-2">
            <MapPinIcon />
            <span className="text-base capitalize">{props.location}</span>
          </div>
        </div>
        <button type="button" onClick={() => console.log("deleted")}>
          <span className="sr-only">favorite icon</span>
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.616 16.0005C2.15533 16.0005 1.771 15.8465 1.463 15.5385C1.155 15.2305 1.00067 14.8458 1 14.3845V2.00047H0V1.00047H4V0.230469H10V1.00047H14V2.00047H13V14.3855C13 14.8455 12.846 15.2298 12.538 15.5385C12.23 15.8471 11.8453 16.0011 11.384 16.0005H2.616ZM4.808 13.0005H5.808V4.00047H4.808V13.0005ZM8.192 13.0005H9.192V4.00047H8.192V13.0005Z"
              fill="black"
            />
          </svg>
        </button>
      </header>
      <div className="py-7">
        <p className="font-normal text-base text-gray-700">
          {props.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-center gap-2">
        <div className="flex gap-3 items-center flex-wrap">
          <Button severity="secondary" size="small" className="px-4 py-1.5">
            <span> {props.duration} months </span>
          </Button>
          <Button
            severity="secondary"
            size="small"
            className="px-4 py-1.5 capitalize"
          >
            <span> {props.level} </span>
          </Button>
          <Button
            severity="secondary"
            size="small"
            className="px-4 py-1.5 capitalize"
          >
            {props.type}
          </Button>
        </div>
        <button className="mt-5 sm:mt-0 text-base font-normal px-4 xl:px-5 py-2.5 rounded-lg border border-[#4632A8] text-[#4632A8]">
          Move to pending
        </button>
      </div>
    </Card>
  );
};
