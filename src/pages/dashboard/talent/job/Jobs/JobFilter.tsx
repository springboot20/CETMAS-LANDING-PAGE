import React from "react";
import { Card } from "@/components/card/Card";
import { Button } from "@/components/button/Button";
import { CheckBoxField } from "@/components/forms/CheckBoxField/CheckBox";

export const JobFilter: React.FC = () => {
  return (
    <div className="col-span-1 stick top-0 mt-4 sm:mt-0 flex-shrink-0">
      <h1 className="text-lg lg:text-xl font-normal xl:text-2xl capitalize text-right">
        job filter
      </h1>
      <div className="flex flex-col gap-10 mt-5">
        <Card className="bg-[#A79BE1B2]/20 p-5 rounded-xl">
          <div>
            <header className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg lg:text-xl font-normal capitalize">
                experienced level
              </h3>
              <Button className="text-lg font-normal capitalize shadow-none">
                clear
              </Button>
            </header>
            <div className="mt-5 space-y-4">
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="beginner"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  255 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="intermediate"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  2403 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="expert"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <header className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg lg:text-xl font-normal capitalize">
                project duration
              </h3>
              <Button className="text-lg font-normal capitalize shadow-none">
                clear
              </Button>
            </header>
            <div className="mt-5 space-y-4">
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="Less than a month"
                  labelClass="text-base font-medium"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  255 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="1 - 3 month"
                  labelClass="text-base font-medium"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  2403 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="4 - 6 month"
                  labelClass="text-base font-medium"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="4 - 6 month"
                  labelClass="text-base font-medium"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="7 and above"
                  labelClass="text-base font-medium"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14">
            <header className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg lg:text-xl font-normal capitalize">
                job specialist
              </h3>
              <Button className="text-lg font-normal capitalize shadow-none">
                clear
              </Button>
            </header>
            <div className="mt-5 space-y-4">
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="design"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  255 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="front end"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  2403 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="back end"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="marketing"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
              <div className="flex justify-between items-center">
                <CheckBoxField
                  type="checkbox"
                  label="product manager"
                  labelClass="text-base font-medium capitalize"
                  className="checked:bg-[#4632A8] text-[#4632A8] cursor-pointer focus:outline-none focus:ring-0 h-7 w-7"
                />
                <p className="text-base font-medium text-gray-700">
                  124 jobs
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
