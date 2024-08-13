import React from "react";
import { classNames } from "@/util";
import { StarIcon } from "@heroicons/react/24/outline";

export const AdminDashBoard: React.FC = () => {
  return (
    <section className="mt-32 px-4 relative z-10 w-full flex lg:justify-between flex-col xl:flex-row xl:gap-3 items-stretch h-screen flex-shrink-0">
      <div className="space-y-10 flex-shrink-0 max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className={"bg-[#9747FF66]"} title={"total talents"} count={30} />

          <Card className={"bg-[#4632A866]"} title={"total clients"} count={30} />

          <Card className={"bg-[#A79BE166]"} title={"job posted"} count={30} />
        </div>
      </div>

      <div className="w-full flex-shrink-0 mt-10 space-y-10 xl:max-w-xl">
        <div className="space-y-4">
          <header className="flex items-center justify-between">
            <h1 className="text-base sm:text-xl font-semibold text-[#4632A8]">Lists of Talents</h1>
            <button
              type="button"
              className="py-2 px-3 rounded-md text-sm font-semibold text-white bg-[#4632A8]"
            >
              View all
            </button>
          </header>

          <ul className="space-y-3">
            <li className="py-3 xs:py-4 px-8 border-[0.8px] flex-col xs:flex-row bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-9">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base sm:text-xl font-bold capitalize leading-none">
                    jane williams
                  </span>
                  <span className="text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-0.5">
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
              </div>
            </li>

            <li className="py-3 xs:py-4 px-8 border-[0.8px] flex-col xs:flex-row bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-9">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base sm:text-xl font-bold capitalize leading-none">
                    jane williams
                  </span>
                  <span className="text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
              </div>
            </li>

            <li className="py-3 xs:py-4 px-8 border-[0.8px] flex-col xs:flex-row bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-9">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base sm:text-xl font-bold capitalize leading-none">
                    jane williams
                  </span>
                  <span className="text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
              </div>
            </li>

            <li className="py-3 xs:py-4 px-8 border-[0.8px] flex-col xs:flex-row bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-9">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base sm:text-xl font-bold capitalize leading-none">
                    jane williams
                  </span>
                  <span className="text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
                <StarIcon className="fill-[#FCD924] h-6 sm:h-8 stroke-white" />
              </div>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <header className="flex items-center justify-between">
            <h1 className="text-base sm:text-xl font-semibold text-[#4632A8]">Lists of Clients</h1>
            <button
              type="button"
              className="py-2 px-3 rounded-md text-sm font-semibold text-white bg-[#4632A8]"
            >
              View all
            </button>
          </header>

          <ul className="space-y-3">
            <li className="p-4 border-[0.8px] bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-bold capitalize">
                    jane williams
                  </span>
                  <span className="text-xs sm:text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8594 11.3749C16.8594 11.5365 16.7952 11.6915 16.6809 11.8058C16.5666 11.9201 16.4116 11.9843 16.25 11.9843H9.75C9.58838 11.9843 9.43339 11.9201 9.31911 11.8058C9.20483 11.6915 9.14062 11.5365 9.14062 11.3749C9.14062 11.2133 9.20483 11.0583 9.31911 10.944C9.43339 10.8297 9.58838 10.7655 9.75 10.7655H16.25C16.4116 10.7655 16.5666 10.8297 16.6809 10.944C16.7952 11.0583 16.8594 11.2133 16.8594 11.3749ZM16.25 14.0155H9.75C9.58838 14.0155 9.43339 14.0797 9.31911 14.194C9.20483 14.3083 9.14062 14.4633 9.14062 14.6249C9.14062 14.7865 9.20483 14.9415 9.31911 15.0558C9.43339 15.1701 9.58838 15.2343 9.75 15.2343H16.25C16.4116 15.2343 16.5666 15.1701 16.6809 15.0558C16.7952 14.9415 16.8594 14.7865 16.8594 14.6249C16.8594 14.4633 16.7952 14.3083 16.6809 14.194C16.5666 14.0797 16.4116 14.0155 16.25 14.0155ZM23.3594 12.9999C23.3598 14.7957 22.8933 16.5608 22.0057 18.122C21.1182 19.6832 19.84 20.9868 18.2966 21.905C16.7533 22.8232 14.9977 23.3244 13.2022 23.3595C11.4067 23.3945 9.63295 22.9622 8.05492 22.105L4.51344 23.2851C4.26291 23.3687 3.99406 23.3808 3.73703 23.3202C3.48 23.2595 3.24494 23.1285 3.05819 22.9417C2.87145 22.755 2.74041 22.5199 2.67975 22.2629C2.61909 22.0058 2.63122 21.737 2.71477 21.4865L3.89492 17.945C3.14261 16.5587 2.71679 15.0189 2.64994 13.443C2.58308 11.8671 2.87695 10.2968 3.50915 8.85176C4.14134 7.40671 5.09516 6.1251 6.29788 5.10466C7.50059 4.08421 8.92044 3.35188 10.4492 2.96349C11.9779 2.57511 13.5751 2.54094 15.119 2.86358C16.663 3.18622 18.1129 3.85715 19.3581 4.82522C20.6034 5.79328 21.6111 7.03292 22.3046 8.44961C22.998 9.86629 23.3588 11.4226 23.3594 12.9999ZM22.1406 12.9999C22.1403 11.5977 21.8174 10.2145 21.1969 8.95707C20.5764 7.69968 19.6749 6.60189 18.5623 5.74865C17.4496 4.89541 16.1556 4.30958 14.7802 4.03649C13.4049 3.7634 11.9852 3.81038 10.631 4.17378C9.27675 4.53718 8.02426 5.20727 6.97043 6.13219C5.9166 7.05712 5.08968 8.21209 4.55366 9.50775C4.01763 10.8034 3.78687 12.205 3.87922 13.6041C3.97158 15.0032 4.38457 16.3623 5.08625 17.5763C5.12959 17.6511 5.15653 17.7342 5.16529 17.8202C5.17404 17.9062 5.16441 17.993 5.13703 18.075L3.87156 21.8714C3.85963 21.9072 3.85789 21.9456 3.86656 21.9823C3.87523 22.019 3.89395 22.0526 3.92062 22.0793C3.9473 22.106 3.98088 22.1247 4.0176 22.1333C4.05432 22.142 4.09273 22.1403 4.12852 22.1283L7.92188 20.8629C7.98417 20.8424 8.04927 20.8318 8.11484 20.8314C8.22181 20.832 8.32679 20.8603 8.41953 20.9137C9.80918 21.7183 11.3863 22.1427 12.9921 22.1441C14.5979 22.1455 16.1758 21.7238 17.5668 20.9216C18.9578 20.1193 20.113 18.9647 20.9159 17.574C21.7188 16.1834 22.1413 14.6057 22.1406 12.9999Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>

            <li className="p-4 border-[0.8px] bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-bold capitalize">
                    jane williams
                  </span>
                  <span className="text-xs sm:text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8594 11.3749C16.8594 11.5365 16.7952 11.6915 16.6809 11.8058C16.5666 11.9201 16.4116 11.9843 16.25 11.9843H9.75C9.58838 11.9843 9.43339 11.9201 9.31911 11.8058C9.20483 11.6915 9.14062 11.5365 9.14062 11.3749C9.14062 11.2133 9.20483 11.0583 9.31911 10.944C9.43339 10.8297 9.58838 10.7655 9.75 10.7655H16.25C16.4116 10.7655 16.5666 10.8297 16.6809 10.944C16.7952 11.0583 16.8594 11.2133 16.8594 11.3749ZM16.25 14.0155H9.75C9.58838 14.0155 9.43339 14.0797 9.31911 14.194C9.20483 14.3083 9.14062 14.4633 9.14062 14.6249C9.14062 14.7865 9.20483 14.9415 9.31911 15.0558C9.43339 15.1701 9.58838 15.2343 9.75 15.2343H16.25C16.4116 15.2343 16.5666 15.1701 16.6809 15.0558C16.7952 14.9415 16.8594 14.7865 16.8594 14.6249C16.8594 14.4633 16.7952 14.3083 16.6809 14.194C16.5666 14.0797 16.4116 14.0155 16.25 14.0155ZM23.3594 12.9999C23.3598 14.7957 22.8933 16.5608 22.0057 18.122C21.1182 19.6832 19.84 20.9868 18.2966 21.905C16.7533 22.8232 14.9977 23.3244 13.2022 23.3595C11.4067 23.3945 9.63295 22.9622 8.05492 22.105L4.51344 23.2851C4.26291 23.3687 3.99406 23.3808 3.73703 23.3202C3.48 23.2595 3.24494 23.1285 3.05819 22.9417C2.87145 22.755 2.74041 22.5199 2.67975 22.2629C2.61909 22.0058 2.63122 21.737 2.71477 21.4865L3.89492 17.945C3.14261 16.5587 2.71679 15.0189 2.64994 13.443C2.58308 11.8671 2.87695 10.2968 3.50915 8.85176C4.14134 7.40671 5.09516 6.1251 6.29788 5.10466C7.50059 4.08421 8.92044 3.35188 10.4492 2.96349C11.9779 2.57511 13.5751 2.54094 15.119 2.86358C16.663 3.18622 18.1129 3.85715 19.3581 4.82522C20.6034 5.79328 21.6111 7.03292 22.3046 8.44961C22.998 9.86629 23.3588 11.4226 23.3594 12.9999ZM22.1406 12.9999C22.1403 11.5977 21.8174 10.2145 21.1969 8.95707C20.5764 7.69968 19.6749 6.60189 18.5623 5.74865C17.4496 4.89541 16.1556 4.30958 14.7802 4.03649C13.4049 3.7634 11.9852 3.81038 10.631 4.17378C9.27675 4.53718 8.02426 5.20727 6.97043 6.13219C5.9166 7.05712 5.08968 8.21209 4.55366 9.50775C4.01763 10.8034 3.78687 12.205 3.87922 13.6041C3.97158 15.0032 4.38457 16.3623 5.08625 17.5763C5.12959 17.6511 5.15653 17.7342 5.16529 17.8202C5.17404 17.9062 5.16441 17.993 5.13703 18.075L3.87156 21.8714C3.85963 21.9072 3.85789 21.9456 3.86656 21.9823C3.87523 22.019 3.89395 22.0526 3.92062 22.0793C3.9473 22.106 3.98088 22.1247 4.0176 22.1333C4.05432 22.142 4.09273 22.1403 4.12852 22.1283L7.92188 20.8629C7.98417 20.8424 8.04927 20.8318 8.11484 20.8314C8.22181 20.832 8.32679 20.8603 8.41953 20.9137C9.80918 21.7183 11.3863 22.1427 12.9921 22.1441C14.5979 22.1455 16.1758 21.7238 17.5668 20.9216C18.9578 20.1193 20.113 18.9647 20.9159 17.574C21.7188 16.1834 22.1413 14.6057 22.1406 12.9999Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>

            <li className="p-4 border-[0.8px] bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-bold capitalize">
                    jane williams
                  </span>
                  <span className="text-xs sm:text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8594 11.3749C16.8594 11.5365 16.7952 11.6915 16.6809 11.8058C16.5666 11.9201 16.4116 11.9843 16.25 11.9843H9.75C9.58838 11.9843 9.43339 11.9201 9.31911 11.8058C9.20483 11.6915 9.14062 11.5365 9.14062 11.3749C9.14062 11.2133 9.20483 11.0583 9.31911 10.944C9.43339 10.8297 9.58838 10.7655 9.75 10.7655H16.25C16.4116 10.7655 16.5666 10.8297 16.6809 10.944C16.7952 11.0583 16.8594 11.2133 16.8594 11.3749ZM16.25 14.0155H9.75C9.58838 14.0155 9.43339 14.0797 9.31911 14.194C9.20483 14.3083 9.14062 14.4633 9.14062 14.6249C9.14062 14.7865 9.20483 14.9415 9.31911 15.0558C9.43339 15.1701 9.58838 15.2343 9.75 15.2343H16.25C16.4116 15.2343 16.5666 15.1701 16.6809 15.0558C16.7952 14.9415 16.8594 14.7865 16.8594 14.6249C16.8594 14.4633 16.7952 14.3083 16.6809 14.194C16.5666 14.0797 16.4116 14.0155 16.25 14.0155ZM23.3594 12.9999C23.3598 14.7957 22.8933 16.5608 22.0057 18.122C21.1182 19.6832 19.84 20.9868 18.2966 21.905C16.7533 22.8232 14.9977 23.3244 13.2022 23.3595C11.4067 23.3945 9.63295 22.9622 8.05492 22.105L4.51344 23.2851C4.26291 23.3687 3.99406 23.3808 3.73703 23.3202C3.48 23.2595 3.24494 23.1285 3.05819 22.9417C2.87145 22.755 2.74041 22.5199 2.67975 22.2629C2.61909 22.0058 2.63122 21.737 2.71477 21.4865L3.89492 17.945C3.14261 16.5587 2.71679 15.0189 2.64994 13.443C2.58308 11.8671 2.87695 10.2968 3.50915 8.85176C4.14134 7.40671 5.09516 6.1251 6.29788 5.10466C7.50059 4.08421 8.92044 3.35188 10.4492 2.96349C11.9779 2.57511 13.5751 2.54094 15.119 2.86358C16.663 3.18622 18.1129 3.85715 19.3581 4.82522C20.6034 5.79328 21.6111 7.03292 22.3046 8.44961C22.998 9.86629 23.3588 11.4226 23.3594 12.9999ZM22.1406 12.9999C22.1403 11.5977 21.8174 10.2145 21.1969 8.95707C20.5764 7.69968 19.6749 6.60189 18.5623 5.74865C17.4496 4.89541 16.1556 4.30958 14.7802 4.03649C13.4049 3.7634 11.9852 3.81038 10.631 4.17378C9.27675 4.53718 8.02426 5.20727 6.97043 6.13219C5.9166 7.05712 5.08968 8.21209 4.55366 9.50775C4.01763 10.8034 3.78687 12.205 3.87922 13.6041C3.97158 15.0032 4.38457 16.3623 5.08625 17.5763C5.12959 17.6511 5.15653 17.7342 5.16529 17.8202C5.17404 17.9062 5.16441 17.993 5.13703 18.075L3.87156 21.8714C3.85963 21.9072 3.85789 21.9456 3.86656 21.9823C3.87523 22.019 3.89395 22.0526 3.92062 22.0793C3.9473 22.106 3.98088 22.1247 4.0176 22.1333C4.05432 22.142 4.09273 22.1403 4.12852 22.1283L7.92188 20.8629C7.98417 20.8424 8.04927 20.8318 8.11484 20.8314C8.22181 20.832 8.32679 20.8603 8.41953 20.9137C9.80918 21.7183 11.3863 22.1427 12.9921 22.1441C14.5979 22.1455 16.1758 21.7238 17.5668 20.9216C18.9578 20.1193 20.113 18.9647 20.9159 17.574C21.7188 16.1834 22.1413 14.6057 22.1406 12.9999Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>

            <li className="p-4 border-[0.8px] bg-white flex items-center justify-between rounded-lg">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center text-white rounded-full text-base font-semibold h-8 w-8 bg-[#4632A8]">
                  1
                </span>

                <div className="flex flex-col">
                  <span className="text-base md:text-xl font-bold capitalize">
                    jane williams
                  </span>
                  <span className="text-xs sm:text-base capitalize text-gray-600 font-medium">
                    mobile app developer
                  </span>
                </div>
              </div>
              <div>
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.8594 11.3749C16.8594 11.5365 16.7952 11.6915 16.6809 11.8058C16.5666 11.9201 16.4116 11.9843 16.25 11.9843H9.75C9.58838 11.9843 9.43339 11.9201 9.31911 11.8058C9.20483 11.6915 9.14062 11.5365 9.14062 11.3749C9.14062 11.2133 9.20483 11.0583 9.31911 10.944C9.43339 10.8297 9.58838 10.7655 9.75 10.7655H16.25C16.4116 10.7655 16.5666 10.8297 16.6809 10.944C16.7952 11.0583 16.8594 11.2133 16.8594 11.3749ZM16.25 14.0155H9.75C9.58838 14.0155 9.43339 14.0797 9.31911 14.194C9.20483 14.3083 9.14062 14.4633 9.14062 14.6249C9.14062 14.7865 9.20483 14.9415 9.31911 15.0558C9.43339 15.1701 9.58838 15.2343 9.75 15.2343H16.25C16.4116 15.2343 16.5666 15.1701 16.6809 15.0558C16.7952 14.9415 16.8594 14.7865 16.8594 14.6249C16.8594 14.4633 16.7952 14.3083 16.6809 14.194C16.5666 14.0797 16.4116 14.0155 16.25 14.0155ZM23.3594 12.9999C23.3598 14.7957 22.8933 16.5608 22.0057 18.122C21.1182 19.6832 19.84 20.9868 18.2966 21.905C16.7533 22.8232 14.9977 23.3244 13.2022 23.3595C11.4067 23.3945 9.63295 22.9622 8.05492 22.105L4.51344 23.2851C4.26291 23.3687 3.99406 23.3808 3.73703 23.3202C3.48 23.2595 3.24494 23.1285 3.05819 22.9417C2.87145 22.755 2.74041 22.5199 2.67975 22.2629C2.61909 22.0058 2.63122 21.737 2.71477 21.4865L3.89492 17.945C3.14261 16.5587 2.71679 15.0189 2.64994 13.443C2.58308 11.8671 2.87695 10.2968 3.50915 8.85176C4.14134 7.40671 5.09516 6.1251 6.29788 5.10466C7.50059 4.08421 8.92044 3.35188 10.4492 2.96349C11.9779 2.57511 13.5751 2.54094 15.119 2.86358C16.663 3.18622 18.1129 3.85715 19.3581 4.82522C20.6034 5.79328 21.6111 7.03292 22.3046 8.44961C22.998 9.86629 23.3588 11.4226 23.3594 12.9999ZM22.1406 12.9999C22.1403 11.5977 21.8174 10.2145 21.1969 8.95707C20.5764 7.69968 19.6749 6.60189 18.5623 5.74865C17.4496 4.89541 16.1556 4.30958 14.7802 4.03649C13.4049 3.7634 11.9852 3.81038 10.631 4.17378C9.27675 4.53718 8.02426 5.20727 6.97043 6.13219C5.9166 7.05712 5.08968 8.21209 4.55366 9.50775C4.01763 10.8034 3.78687 12.205 3.87922 13.6041C3.97158 15.0032 4.38457 16.3623 5.08625 17.5763C5.12959 17.6511 5.15653 17.7342 5.16529 17.8202C5.17404 17.9062 5.16441 17.993 5.13703 18.075L3.87156 21.8714C3.85963 21.9072 3.85789 21.9456 3.86656 21.9823C3.87523 22.019 3.89395 22.0526 3.92062 22.0793C3.9473 22.106 3.98088 22.1247 4.0176 22.1333C4.05432 22.142 4.09273 22.1403 4.12852 22.1283L7.92188 20.8629C7.98417 20.8424 8.04927 20.8318 8.11484 20.8314C8.22181 20.832 8.32679 20.8603 8.41953 20.9137C9.80918 21.7183 11.3863 22.1427 12.9921 22.1441C14.5979 22.1455 16.1758 21.7238 17.5668 20.9216C18.9578 20.1193 20.113 18.9647 20.9159 17.574C21.7188 16.1834 22.1413 14.6057 22.1406 12.9999Z"
                    fill="black"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const Card: React.FC<{
  className: string;
  title: string;
  count: number;
}> = ({ className, title, count }) => {
  return (
    <div className={classNames("p-4 flex justify-between h-auto", className)}>
      <div className="flex flex-col gap-6 h-full flex-shrink-0">
        <div>
          <h3 className="font-bold text-base sm:text-xl">100</h3>
          <p className="capitalize text-base sm:text-lg">{title}</p>
        </div>

        <div>
          <h3 className="font-normal text-base sm:text-xl">{`+${count}`}</h3>
          <p className="capitalize text-base">this month</p>
        </div>
      </div>
      <div className="self-center h-16">
        <svg
          width="119"
          height="76"
          viewBox="0 0 119 76"
          fill="none"
          className=""
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.7"
            d="M1 75C1 75 6.99218 42.4842 25 36.4303C39.523 31.5479 50.3786 49.8099 64 43.1576C76.9722 36.8223 68.6553 21.2068 79.5 12.2121C91.1064 2.58573 115 12.2121 118 1"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
};
