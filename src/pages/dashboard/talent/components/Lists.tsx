import React from "react";
import data from "@/util/data";
import { JobCard } from "./Card";

export const JobLists: React.FC = () => {
  return (
    <div className="flex-shrink-0 relative left-0 right-0 flex-1 xl:right-[28rem] xl:max-w-[calc(100%-28rem)] space-y-3 px-2 h-screen job-list mt-20 xl:mt-0">
      {data.map((c) => (
        <JobCard key={c.id} {...c} />
      ))}
    </div>
  );
};
