import React from "react";
import { JobLists } from "../components/Lists";
import { JobFilter } from "../components/Filter";

const Jobs: React.FC = () => {
  return (
    <section className="mt-24 px-4 xl:px-10 lg:px-10">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <JobLists />
        <JobFilter />
      </div>
    </section>
  );
};

export default Jobs;
