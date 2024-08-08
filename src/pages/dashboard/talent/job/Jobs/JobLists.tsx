import React from "react";
import data from "../../../../../util/data";
import { JobCard } from "./JobCard";

export const JobLists: React.FC = () => {
  return (
    <div className="col-span-2 flex flex-col gap-6 px-2 h-screen job-list">
      {data.map((c) => (
        <JobCard key={c.id} {...c} />
      ))}
    </div>
  );
};
