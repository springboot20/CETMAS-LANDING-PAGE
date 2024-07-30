import { classNames } from "@/util";
import { XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Notification: React.FC<{
  open: boolean;
  setOpenNotification: React.Dispatch<
    React.SetStateAction<boolean>
  >;
}> = ({ open, setOpenNotification }) => {
  console.log(open);

  return (
    <>
      <div
        className={classNames(
          "fixed inset-0 bg-black/20 top-0 z-20 origin-center transition-all",
          open ? "scale-100" : "scale-0"
        )}
      ></div>
      <div
        id="notification"
        className={classNames(
          "h-auto fixed origin-top-right z-20 bg-white w-1/2 transition-transform border rounded-xl py-8 px-8 ",
          open
            ? "translate-x-0 right-5 scale-100 top-5 "
            : "translate-x-full right-0 scale-0 top-0"
        )}
      >
        <button
          onClick={() => setOpenNotification(false)}
          className="absolute top-5 right-5 cursor-pointer"
        >
          <span className="sr-only">
            Close Notification
          </span>
          <XMarkIcon
            className="h-7 text-gray-800"
            strokeWidth={3}
          />
        </button>

        <header className="p-2 border-b-2 border-b-gray-900/30">
          <h1 className="text-base sm:text-lg md:text-2xl font-normal capitalize text-[#4632A8]">
            notification
          </h1>
        </header>

        <div className="overflow-y-scroll mt-5 notification-list px-2">
          <div className="">
            <div className="rounded-md bg-[#A79BE1B2]/70 p-6">
              <p className="text-lg font-normal">
                Lorem ipsum dolor sit amet consectetur.
                Condimen vitae nisi lectus eu quisque.
                Mollis bibendum duis sem tristique.
              </p>
            </div>
            <div className="flex justify-between items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
};
