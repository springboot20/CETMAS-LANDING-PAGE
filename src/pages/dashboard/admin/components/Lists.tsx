import React from "react";
import data from "@/util/data";
import { AdminJobCard } from "./Card"; 

export const JobLists: React.FC = () => {
  return (
    <div className="col-span-2 w-full flex flex-col gap-6 px-2 h-screen job-list mt-9">
      {data.map((c) => (
        <AdminJobCard key={c.id} {...c} />
      ))}
    </div>
  );
};
