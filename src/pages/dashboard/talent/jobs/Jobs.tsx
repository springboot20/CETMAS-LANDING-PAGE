import React from "react";
import { JobLists } from "../components/Lists";
import { JobFilter } from "../components/Filter";

const Jobs: React.FC = () => {
  return (
    <section className="mt-24 px-4 xl:px-10">
      <div className="relative flex items-stretch flex-col xl:flex-row xl:justify-between flex-shrink-0">
        <JobLists />
        <JobFilter />
      </div>
    </section>
  );
};

export default Jobs;
