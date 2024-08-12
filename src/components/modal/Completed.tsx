import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import React from "react";

export const Completed: React.FC<{
  isOpen: boolean;
  close: () => void;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}> = ({ isOpen, close, setStatus }) => {
  return (
    <Dialog
      open={isOpen}
      as="div"
      transition
      className="w-full relative z-10 rounded-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
      onClose={close}
    >
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center">
          <DialogPanel className="bg-white shadow-lg rounded-xl flex-1 max-w-4xl flex flex-col justify-between items-center p-10">
            <h1 className="font-semibold capitalize text-base sm:text-lg lg:text-2xl xl:text-3xl text-[#4632A8]">
              rate talent
            </h1>
            <div className="w-full max-w-2xl grid grid-cols-2 gap-8 mt-6">
              <div className="bg-gray-100 flex flex-col justify-center space-y-8 py-6 w-full col-span-1 flex-grow border flex-shrink-0 rounded-xl">
                <header className="self-center">
                  <div className="h-36 w-36 rounded-full bg-gray-200"></div>
                </header>

                <div className="text-center">
                  <h3 className="capitalize text-base sm:text-lg lg:text-xl font-bold">
                    jane willams
                  </h3>
                  <h2 className="text-base sm:text-lg capitalize font-normal">
                    mobile app developer
                  </h2>
                </div>
                <div className="flex jusify-center items-center mx-auto"></div>
              </div>

              <div className="bg-gray-100 flex flex-col justify-center space-y-8 py-6 w-full col-span-1 flex-grow border flex-shrink-0 rounded-xl">
                <header className="self-center">
                  <div className="h-36 w-36 rounded-full bg-gray-200"></div>
                </header>

                <div className="text-center">
                  <h3 className="capitalize text-base sm:text-lg lg:text-xl font-bold">
                    jane willams
                  </h3>
                  <h2 className="text-base sm:text-lg capitalize font-normal">
                    mobile app developer
                  </h2>
                </div>
                <div className="flex jusify-center items-center mx-auto"></div>
              </div>
            </div>

            <button
              onClick={() => {
                setStatus("completed")
                close()
              }}
              className="text-base font-normal mt-6 px-4 py-3.5 xl:px-5 rounded-lg border bg-[#4632A8] text-white"
            >
              Move job to completed
            </button>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
