import React from "react";
import { Card } from "@/components/card/Card";
import { InputField } from "@/components/forms/TextField/InputField";
import { EmojiIcon } from "@/components/Icons";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

 const ClientMessages: React.FC = () => {
  return (
    <section className="mt-24 px-4 lg:px-20">
      <div className="lg:flex lg:items-center lg:justify-center">
        <div className="bg-[#A79BE1B2] border w-full h-screen rounded-xl lg:h-auto lg:rounded-2xl flex flex-col flex-grow mx-auto bg-white overflow-hidden">
          <div className="flex flex-col flex-grow p-4 overflow-auto gap-10">
            <div className="flex w-full mt-2 gap-2 max-w-xl lg:max-w-3xl">
              <div className="flex flex-col items-center text-center gap-1">
                <div className="h-20 w-20 rounded-full bg-white border flex-shrink-0"></div>
                <span className="capitalize text-base font-semibold sm:text-lg text-gray-900">
                  admin
                </span>
              </div>
              <div className="bg-[#A79BE1B2] w-full rounded-2xl p-4 lg:py-8 lg:px-12">
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur. Erat nisl egestas
                  mauris euismod nec leo. Interdum eu massa amet tellus enim.
                  Pellentesque rutrum lacus sit sit lacinia quam imperdiet
                  feugiat. Velit est rutrum tincidunt nisi amet egestas egestas
                  libero.
                </p>
              </div>
            </div>

            <div className="flex mt-2 gap-2 max-w-xl lg:max-w-4xl ml-auto justify-end w-full">
              <div className="bg-[#A79BE1B2] w-full rounded-2xl p-4 lg:py-8 lg:px-12">
                <p className="text-base sm:text-lg font-medium text-gray-900">
                  Lorem ipsum dolor sit amet consectetur. Erat nisl egestas
                  mauris euismod nec le
                </p>
              </div>
              <div className="flex flex-col items-center text-center gap-1">
                <div className="h-20 w-20 rounded-full bg-white border flex-shrink-0"></div>
                <span className="capitalize text-base font-semibold sm:text-lg text-gray-900">
                  you
                </span>
              </div>
            </div>
          </div>

          <div className="sticky mt-20 mx-auto bottom-11">
            <div className="">
              <fieldset className="overflow-hidden bg-[#ACB4F470] flex items-center border-2 border-[#4632A8] rounded-lg h-16 w-full md:w-[35rem] lg:w-[42rem] gap-2">
                <button type="button" className="px-5">
                  <span className="sr-only">Emoji button</span>
                  <EmojiIcon />
                </button>

                <InputField
                  labelClass="hidden"
                  className="flex-1 w-full h-full bg-transparent border-none focus:ring-0 text-lg font-normal"
                  label="message input"
                  placeholder="Message"
                />

                <button
                  type="button"
                  className="rounded-lg bg-[#4632A8] h-12 w-12 flex items-center justify-center mr-2"
                >
                  <span className="sr-only">send button</span>
                  <PaperAirplaneIcon className="text-white h-9" />
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientMessages