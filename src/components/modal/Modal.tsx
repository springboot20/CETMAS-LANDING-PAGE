import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import React from "react";
import checkImage from "@/assets/check-image.png";

export const Modal: React.FC<{
  isOpen: boolean;
  close: () => void;
}> = ({ isOpen, close }) => {
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
        <div className="flex min-h-full items-center justify-center p-4">
          <DialogPanel className="h-[26rem] p-8 bg-white shadow-lg rounded-xl flex-1 max-w-2xl py-16 flex flex-col justify-between items-center">
            <h1 className="font-semibold capitalize text-base sm:text-lg lg:text-2xl xl:text-3xl text-[#4632A8]">
              application sent
            </h1>

            <div>
              <img
                src={checkImage}
                alt="check icon"
                className="h-36"
              />
            </div>

            <p className="text-center text-lg font-normal text-[#4632A8]">
              Your application has been successfully sent.
              Information on screening and time of meeting
              will be sent to you
            </p>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
