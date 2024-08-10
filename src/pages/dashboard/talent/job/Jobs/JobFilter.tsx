import React from "react";
import { Card } from "@/components/card/Card";
import { Button } from "@/components/button/Button";
import { CheckBoxField } from "@/components/forms/CheckBoxField/CheckBox";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

export const JobFilter: React.FC = () => {
  return (
    <div className="col-span-1 mt-4 sm:mt-0 flex-shrink-0">
      <div className="lg:hidden fixed top-32 right-0 left-0">
        <DisclosureButton className="bg-gray-200 rounded-md py-2 px-3 flex items-center gap-2 absolute right-6">
          <AdjustmentsHorizontalIcon className="h-8" />
          <span className="capitalize text-base">filter jobs</span>
        </DisclosureButton>
        <DisclosurePanel as="div" className="relative">
          <ul className="bg-gray-200 sm:w-[28rem] p-5 rounded-xl mt-14 w-[24rem] absolute right-6">
            <li>
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
            </li>

            <li className="mt-14">
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
            </li>

            <li className="mt-14">
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
            </li>
          </ul>
        </DisclosurePanel>
      </div>

      <div className="hidden lg:block">
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
    </div>
  );
};
