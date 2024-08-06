import React from "react";
import { Card } from "../../../components/card/Card";
import { RequestedJobs } from "./components/RequestedJobs";
import { RecommendedJobs } from "./components/RecommendedJobs";
import { GraphIcon } from "@/components/Icons";
import { Calendar } from "@/components/calender/Calendar";

export const TalentDashBoard: React.FC = () => {

  
  return (
    <section className="mt-32 px-4 lg:px-10">
      <div className="mx-auto space-y-10">
        <div className="flex items-stretch flex-wrap gap-2 flex-col 2xl:flex-row xl:items-start max-w-xl mx-auto lg:max-w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 flex-1 2xl:self-center w-full">
            <Card className="sm:p-5 shadow flex items-center col-span-full sm:col-span-1 bg-white w-full rounded-xl">
              <div className="space-y-3 md:space-y-6 w-full">
                <h3 className=" capitalize font-semibold text-gray-700">
                  jobs done
                </h3>
                <h2 className="block text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                  10
                </h2>
                <p className="text-base font-normal text-gray-500">
                  +30 This week
                </p>
              </div>

              <div className="self-end">
                <GraphIcon className="h-24" />
              </div>
            </Card>

            <Card className="sm:p-5 shadow flex items-center col-span-full sm:col-span-1 bg-white w-full rounded-xl">
              <div className="space-y-3 md:space-y-6 w-full">
                <h3 className="capitalize font-semibold text-gray-700">
                pending job request
                </h3>
                <h2 className="block text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                  10
                </h2>
                <p className="text-base font-normal text-gray-500">
                  +30 This week
                </p>
              </div>

              <div className="self-end">
                <GraphIcon className="h-24" />
              </div>
            </Card>

            <Card className="sm:p-5 shadow flex items-center col-span-full sm:col-span-1 bg-white w-full rounded-xl">
              <div className="space-y-3 md:space-y-6 w-full">
                <h3 className=" capitalize font-semibold text-gray-700">
               total job
                </h3>
                <h2 className="block text-base sm:text-xl md:text-3xl lg:text-4xl font-bold text-gray-700">
                  20
                </h2>
                <p className="text-base font-normal text-gray-500">
                  +30 This week
                </p>
              </div>

              <div className="self-end">
                <GraphIcon className="h-24" />
              </div>
            </Card>
          </div>
          <Calendar />
        </div>

        {/* Requested Jobs starts*/}
        <RequestedJobs />
        <RecommendedJobs />
        {/* Requested Jobs ends*/}
      </div>
    </section>
  );
};
