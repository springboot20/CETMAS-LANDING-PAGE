import React from "react";
import { JobLists } from "./Jobs/Lists";
import { JobFilter } from "./Jobs/Filter";

export const Jobs: React.FC = () => {
  return (
    <section className="mt-32 px-4 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <JobLists />
        <JobFilter />
      </div>
    </section>
  );
};
