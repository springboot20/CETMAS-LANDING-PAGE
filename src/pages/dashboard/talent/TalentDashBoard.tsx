import React,{useState} from 'react';
import { Card } from '../../../components/card/Card';
import { RequestedJobs } from './components/RequestedJobs';
import { RecommendedJobs } from './components/RecommendedJobs';
import { Calendar } from '@/shadcn/ui/calendar';

export const TalentDashBoard: React.FC = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <section className='mt-32 px-4 lg:px-10'>
      <div className='mx-auto space-y-10'>
        <div className='grid grid-cols-4 xl:grid-cols-6 gap-6'>
          <div className='grid grid-cols-1 gap-2 md:grid-cols-3 2xl:gap-8  xl:col-span-4 col-span-full place-contents-center place-items-center'>
            <Card className='lg:h-56 flex items-center justify-between col-span-full sm:col-span-1 bg-[#9747FF66] w-full'>
              <div className='space-y-3 lg:space-y-5'>
                <p>
                  <span className='text-xl md:text-3xl xl:text-5xl font-bold block text-gray-800'>
                    100
                  </span>
                  <span className='block text-base capitalize xl:text-lg font-normal text-gray-700'>
                    jobs done
                  </span>
                </p>
                <p>
                  <span className='text-lg md:text-xl lg:text-2xl font-bold block text-gray-800'>
                    +30
                  </span>
                  <span className='text-base font-normal block text-gray-500'>This week</span>
                </p>
              </div>
            </Card>
            <Card className='lg:h-56 flex items-center justify-between col-span-full sm:col-span-1 bg-[#4632A866] w-full'>
              <div className='space-y-3 lg:space-y-5'>
                <p>
                  <span className='text-xl md:text-3xl xl:text-5xl font-bold block text-gray-800'>
                    100
                  </span>
                  <span className='block text-base capitalize xl:text-lg font-normal text-gray-700'>
                    jobs done
                  </span>
                </p>
                <p>
                  <span className='text-lg md:text-xl lg:text-2xl font-bold block text-gray-800'>
                    +30
                  </span>
                  <span className='text-base font-normal block text-gray-500'>This week</span>
                </p>
              </div>
            </Card>
            <Card className='lg:h-56 flex items-center justify-between col-span-full sm:col-span-1 bg-[#A79BE166]  w-full'>
              <div className='space-y-3 lg:space-y-5  '>
                <p>
                  <span className='text-xl md:text-3xl xl:text-5xl font-bold block text-gray-800'>
                    100
                  </span>
                  <span className='block text-base capitalize xl:text-lg font-normal text-gray-700'>
                    total jobs
                  </span>
                </p>
                <p>
                  <span className='text-lg md:text-xl lg:text-2xl font-bold block text-gray-800'>
                    +30
                  </span>
                  <span className='text-base font-normal block text-gray-500'>This week</span>
                </p>
              </div>
            </Card>
          </div>

          <Calendar
            mode='single'
            selected={date}
            onSelect={setDate}
            className='rounded-xl border col-span-full sm:col-span-1 sm:w-[30rem] lg:w-full p-8 lg:col-span-2 gap-10 bg-[#00000033] z-10'
          />
        </div>

        {/* Requested Jobs starts*/}
        <RequestedJobs />
        <RecommendedJobs />
        {/* Requested Jobs ends*/}
      </div>
    </section>
  );
};
