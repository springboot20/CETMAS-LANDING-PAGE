import data from "@/util/data";
import { JobCard } from "../components/JobsCard";
import { classNames } from "@/util";
import { Fragment, useEffect, useRef, useState } from "react";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

export const ClientJobs = () => {
  const [jobStatus, setJobStatus] = useState<string>("posted");
  const statusList = useRef<HTMLUListElement>(null);

  const getListDataSet = () => {
    if (statusList.current) {
      const childrenNodes = statusList.current
        .childNodes as unknown as HTMLLIElement[];

      childrenNodes.forEach((childNode) => {
        const status = childNode.dataset;

        console.log(`job status at line 25: ${JSON.stringify(status)}`);
        console.log(`job status at line 26: ${jobStatus}`);
      });
    }
  };

  useEffect(() => {
    getListDataSet();
  });

  return (
    <section className="mt-32 px-4 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 sm:gap-8">
        <div className="md:col-span-2">
          <header className="flex items-center justify-between">
            <h1 className="text-[#4632A8] text-xl lg:text-4xl font-bold capitalize">
              lists of posted jobs
            </h1>
            <div className="md:hidden">
              <Menu as="div" className="relative">
                <div>
                  <MenuButton className="text-gray-900">
                    <span className="capitalize text-xl">job state</span>
                  </MenuButton>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems
                    as={"ul"}
                    className="absolute right-0 z-10 mt-4 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  >
                    <MenuItem
                      as={"li"}
                      onClick={() => setJobStatus("posted")}
                      className={classNames(
                        jobStatus === "posted"
                          ? "before:bg-[#4632A8] text-white before:w-full before:rounded-t-md"
                          : "text-gray-500 before:w-0",
                        'curor-pointer group flex items-center relative before:absolute before:content-[" "] before:h-full before:left-0 lg:before:rounded-r-[2.5rem] text-base font-medium sm:text-lg capitalize py-5 before:transition-all px-4 hover:before:bg-[#4632A8] hover:before:w-full hover:text-white hover:before:rounded-t-md',
                      )}
                    >
                      <span className="relative">posted jobs</span>
                    </MenuItem>

                    <MenuItem
                      as={"li"}
                      onClick={() => setJobStatus("pending")}
                      className={classNames(
                        jobStatus === "pending"
                          ? "before:bg-[#4632A8] text-white before:w-full"
                          : "text-gray-500 before:w-0",
                        'curor-pointer group flex items-center relative before:absolute before:content-[" "] before:h-full before:left-0 lg:before:rounded-r-[2.5rem] text-base font-medium sm:text-lg capitalize py-5 before:transition-all px-4 hover:before:bg-[#4632A8] hover:before:w-full hover:text-white',
                      )}
                    >
                      <span className="relative">pending jobs</span>
                    </MenuItem>

                    <MenuItem
                      as={"li"}
                      onClick={() => setJobStatus("completed")}
                      className={classNames(
                        jobStatus === "completed"
                          ? "before:bg-[#4632A8] text-white before:w-full before:rounded-b-md"
                          : "text-gray-500 before:w-0",
                        'curor-pointer group flex items-center relative before:absolute before:content-[" "] before:h-full before:left-0 lg:before:rounded-r-[2.5rem] text-base font-medium sm:text-lg capitalize py-5 before:transition-all px-4 hover:before:bg-[#4632A8] hover:before:w-full hover:text-white hover:before:rounded-b-md',
                      )}
                    >
                      <span className="relative">completed jobs</span>
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </div>
          </header>
          <div className="w-full flex flex-col gap-6 job-list mt-5">
            {data.map((c) => (
              <JobCard key={c.id} {...c} />
            ))}
          </div>
        </div>

        <div className="hidden md:block col-span-1">
          <h1 className="text-right text-xl lg:text-2xl font-normal capitalize">
            job state
          </h1>

          <div className="mt-5 bg-white rounded-xl">
            <ul
              ref={statusList}
              className="h-full lg:py-10 space-y-3"
              id="job-status-list"
            >
              <li
                role="button"
                onClick={() => setJobStatus("posted")}
                data-status="posted"
                className={classNames(
                  jobStatus === "posted"
                    ? "before:bg-[#4632A8] text-white before:w-full before:rounded-t-xl"
                    : "text-gray-500 before:w-0",
                  'curor-pointer group flex items-center relative before:absolute before:content-[" "] before:h-full before:left-0 lg:before:rounded-r-[2.5rem] text-base font-medium sm:text-lg capitalize py-5 before:transition-all px-4 hover:before:bg-[#4632A8] hover:before:w-full hover:text-white',
                )}
              >
                <span className="relative">posted jobs</span>
              </li>

              <li
                role="button"
                data-status="pending"
                onClick={() => setJobStatus("pending")}
                className={classNames(
                  jobStatus === "pending"
                    ? "before:bg-[#4632A8] text-white before:w-full"
                    : "text-gray-500 before:w-0",
                  'curor-pointer group flex items-center relative before:absolute before:content-[" "] before:h-full before:left-0 lg:before:rounded-r-[2.5rem] text-base font-medium sm:text-lg capitalize py-5 before:transition-all px-4 hover:before:bg-[#4632A8] hover:before:w-full hover:text-white',
                )}
              >
                <span className="relative">pending jobs</span>
              </li>

              <li
                role="button"
                data-status="completed"
                onClick={() => setJobStatus("completed")}
                className={classNames(
                  jobStatus === "completed"
                    ? "before:bg-[#4632A8] text-white before:w-full before:rounded-b-xl"
                    : "text-gray-500 before:w-0",
                  'curor-pointer group flex items-center relative before:absolute before:content-[" "] before:h-full before:left-0 lg:before:rounded-r-[2.5rem] text-base font-medium sm:text-lg capitalize py-5 before:transition-all px-4 hover:before:bg-[#4632A8] hover:before:w-full hover:text-white',
                )}
              >
                <span className="relative">completed jobs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
