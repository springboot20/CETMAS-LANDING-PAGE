import React from 'react';
import data from '../../../../util/data';
import { JobCard } from './Jobs/JobCard';

export const SavedJobs: React.FC = () => {
  return (
    <section className='mt-32 p-4 lg:px-10'>
      <div className='col-span-2 flex flex-col gap-6'>
        {data.map((c) => (
          <JobCard key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
};
