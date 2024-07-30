import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from "@headlessui/react";
import React from "react";
import { InputField } from "../forms/TextField/InputField";
import { Button } from "../button/Button";

export const WithdrawModal: React.FC<{
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
          <DialogPanel className="h-auto p-8 lg:p-10 bg-white shadow-lg rounded-xl flex-1 max-w-2xl items-center">
            <header className="text-center">
              <h1 className="text-base ont-normal capitalize sm:text-lg lg:text-2xl sm:font-semibold">
                withdrawal details
              </h1>
            </header>
            <form>
              <div className="space-y-10">
                <fieldset className="space-y-2">
                  <InputField
                    id="full-name"
                    type="text"
                    htmlFor="full-name"
                    label="full name"
                    placeholder="Enter name the recognise"
                    labelClass="capitalize text-base lg:text-xl"
                    className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
                  />
                </fieldset>

                <fieldset className="space-y-2">
                  <InputField
                    id="account-number"
                    type="text"
                    htmlFor="account-number"
                    label="account number"
                    placeholder="Enter bank name"
                    labelClass="capitalize text-base lg:text-xl"
                    className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
                  />
                </fieldset>

                <fieldset className="space-y-2">
                  <InputField
                    id="bank-name"
                    type="text"
                    htmlFor="bank-name"
                    label="bank name"
                    placeholder="Enter account number"
                    labelClass="capitalize text-base lg:text-xl"
                    className="block w-full px-5 rounded-lg border-0 py-2.5 sm:py-4 md:py-3 xl:py-5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#4632A8] text-base sm:leading-6 outline-none"
                  />
                </fieldset>
              </div>
              <div className="mx-auto w-full flex items-center justify-center mt-10">
                <Button className="px-6 py-2.5 bg-[#4632A8] hover:bg-[#4632A8]/70 focus:outline-none focus:ring-[#4632A8]/70 focus:ring-2 focus:ring-offset-2 transition hover:-translate-y-0.5 active:bg-[#4632A8] text-white text-base sm:text-lg font-normal capitalize rounded-lg">
                  withdraw
                </Button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
