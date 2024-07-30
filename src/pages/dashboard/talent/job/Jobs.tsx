import React from 'react';
import { JobLists } from './Jobs/JobLists';
import { JobFilter } from './Jobs/JobFilter';

export const Jobs: React.FC = () => {
  return (
    <section className='mt-32 p-4 lg:px-10'>
      <div className='grid grid-cols-1 xl:grid-cols-3 sm:gap-8'>
        <JobLists />
        <JobFilter />
      </div>
    </section>
  );
};
