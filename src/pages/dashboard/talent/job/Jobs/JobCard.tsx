import React, { useState } from "react";
import { Card } from "@/components/card/Card";
import { MapPinIcon } from "@/components/Icons";
import { Button } from "@/components/button/Button";
import { JobCardProps } from "@/types/jobs";
import { classNames } from "@/util";
import { HeartIcon } from "@heroicons/react/24/outline";

export const JobCard: React.FC<JobCardProps> = (props) => {
  const [favorite, setFavorite] = useState<boolean>(false);

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
        <button type="button" onClick={() => setFavorite((prev) => !prev)}>
          <span className="sr-only">favorite icon</span>
          <HeartIcon
            className={classNames(favorite ? "fill-[#4632A8] stroke-none" : "", "h-10")}
            strokeWidth={1}
          />
        </button>
      </header>
      <div className="py-7">
        <p className="font-normal text-base text-gray-700">
          {props.description}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex flex-wrap items-center gap-2">
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
        <p className="text-sm font-normal">
          {" "}
          Posted {props.postTime} hours ago
        </p>
      </div>
    </Card>
  );
};
