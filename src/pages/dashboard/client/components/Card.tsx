import React from "react";
import { Card } from "@/components/card/Card";
import { MapPinIcon } from "@/components/Icons";
import { Button } from "@/components/button/Button";
import { ClientJobs } from "@/types/jobs";
import { TrashIcon } from "@heroicons/react/24/outline";

export const JobCard: React.FC<ClientJobs> = (props) => {
  return (
    <Card className="bg-[#A79BE1B2]/20 rounded-xl p-6 md:p-10">
      <header className="flex justify-between items-start">
        <div className="space-y-2">
          <h1 className="text-xl lg:text-3xl font-bold capitalize">{props.title}</h1>
          <div className="flex items-center gap-2">
            <MapPinIcon />
            <span className="text-base capitalize">{props.location}</span>
          </div>
        </div>
        <button type="button" onClick={() => console.log("deleted")}>
          <span className="sr-only">favorite icon</span>
          <TrashIcon className="h-7" />
        </button>
      </header>
      <div className="py-7">
        <p className="font-normal text-base text-gray-700">{props.description}</p>
      </div>

      <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-center gap-2">
        <div className="flex gap-3 items-center flex-wrap">
          <Button severity="secondary" size="small" className="px-4 py-1.5">
            <span> {props.duration} months </span>
          </Button>
          <Button severity="secondary" size="small" className="px-4 py-1.5 capitalize">
            <span> {props.level} </span>
          </Button>
          <Button severity="secondary" size="small" className="px-4 py-1.5 capitalize">
            {props.type}
          </Button>
        </div>
        {props.status === "posted" ? (
          <button
            onClick={() => props?.setStatus("pending")}
            className="mt-5 sm:mt-0 text-base font-normal px-4 py-2.5 lg:py-1.5 lg:px-2.5 xl:px-5  rounded-lg border border-[#4632A8] text-[#4632A8]"
          >
            Move to pending
          </button>
        ) : props.status === "pending" ? (
          <button
            onClick={() => props?.setOpen(true)}
            className="mt-5 sm:mt-0 text-base font-normal px-4 py-2.5 lg:py-1.5 lg:px-2.5 xl:px-5  rounded-lg border border-[#4632A8] text-[#4632A8]"
          >
            Move to completed
          </button>
        ) : props.status === "completed" ? (
          <button
            onClick={() => props?.setStatus("pending")}
            className="mt-5 sm:mt-0 text-base font-normal px-4 py-2.5 lg:py-1.5 lg:px-2.5 xl:px-5  rounded-lg border border-[#4632A8] text-[#4632A8]"
          >
            Move to pending
          </button>
        ) : null}
      </div>
    </Card>
  );
};
