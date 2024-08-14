import React, { useRef, useState } from "react";
import { Card } from "@/components/card/Card";
import { InputField } from "@/components/forms/TextField/InputField";
import { EmojiIcon, MagnifyingGlass } from "@/components/Icons";
import { Bars3Icon, PaperAirplaneIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/util";

export const AdminMessages: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(false);

  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <section className="mt-32 px-4">
      {
        <button
          onClick={() => setIsPanelOpen(true)}
          className="lg:hidden mb-4 p-2 text-gray-700 flex items-center"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      }
      <div className="w-full flex items-stretch flex-shrink-0 justify-between">
        <div
          className={classNames(
            "md:w-[26rem] fixed lg:left-36 xl:w-[30rem] bg-white lg:bg-transparent top-32 h-[calc(100%-8rem)] overflow-y-auto panel transition lg:translate-x-0",
            isPanelOpen ? "translate-x-0 left-3 z-20" : "-translate-x-full -left-full",
          )}
        >
          <div className="h-full w-full pl-2">
            <nav className="w-full">
              <button
                onClick={() => setIsPanelOpen(false)}
                className="lg:hidden p-2 text-gray-700 flex items-center justify-end w-full"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
              <div className="flex lg:flex-none items-center w-full h-14 bg-white border rounded-xl">
                <InputField
                  ref={inputRef}
                  label="Search"
                  value={searchQuery}
                  placeholder="Search for jobs"
                  htmlFor="search"
                  labelClass="hidden"
                  onChange={handleChange}
                  className="h-full flex-1 block w-full border-0 focus:outline-none focus:border-none focus:ring-0 rounded-tl-xl rounded-bl-xl text-lg font-normal pl-6 pr-2 text-gray-700"
                />
                <button className="flex px-3 items-center justify-center" onClick={handleFocus}>
                  <span className="sr-only">search</span>
                  <MagnifyingGlass className="h-7 cursor-pointer" />
                </button>
              </div>
            </nav>
            <div className="mt-4 bg-white rounded-2xl h-full overflow-y-auto relative border">
              <div className="h-full flex flex-col overflow-y-auto chat-list">
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>

                <div
                  role="button"
                  className="flex items-stretch justify-between p-4 border-b hover:bg-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-14 w-14 rounded-full bg-gray-300 border"></span>
                    <p className="flex flex-col -space-y-1">
                      <span className="text-sm sm:text-base font-bold capitalize">
                        smith johnson
                      </span>
                      <span className="text-base font-medium">Lorem ipsum dolor sit amet</span>
                    </p>
                  </div>
                  <div className="self-end">
                    <span className="text-base font-medium text-[#4632A8]">10:15pm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative left-0 lg:left-[26rem] flex-1 lg:flex-none lg:w-[calc(100%-26rem)] xl:left-[30rem] xl:w-[calc(100%-30rem)]">
          <Card className="lg:ml-2 bg-[#A79BE1B2]/30 w-full h-screen rounded-xl lg:h-auto lg:rounded-2xl flex flex-col mx-auto bg-white">
            <div className="flex flex-col flex-grow p-4 gap-10">
              <div className="flex flex-col flex-grow overflow-y-auto h-full gap-10">
                <div className="flex w-full mt-2 gap-2 max-w-xl lg:max-w-3xl">
                  <div className="flex flex-col items-center text-center gap-1">
                    <div className="h-14 w-14 rounded-full bg-white border flex-shrink-0"></div>
                    <span className="capitalize text-base font-semibold sm:text-lg text-gray-900">
                      admin
                    </span>
                  </div>
                  <div className="bg-[#A79BE1B2] w-full rounded-2xl p-4">
                    <p className="text-sm sm:text-base font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur. Erat nisl egestas mauris euismod nec
                      leo. Interdum eu massa amet tellus enim. Pellentesque rutrum lacus sit sit
                      lacinia quam imperdiet feugiat. Velit est rutrum tincidunt nisi amet egestas
                      egestas libero.
                    </p>
                  </div>
                </div>

                <div className="flex mt-2 gap-2 max-w-xl lg:max-w-4xl ml-auto justify-end w-full">
                  <div className="bg-[#A79BE1B2] w-full rounded-2xl p-4">
                    <p className="text-sm sm:text-base font-medium text-gray-900">
                      Lorem ipsum dolor sit amet consectetur. Erat nisl egestas mauris euismod nec
                      le
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center gap-1">
                    <div className="h-14 w-14 rounded-full bg-white border flex-shrink-0"></div>
                    <span className="capitalize text-base font-semibold sm:text-lg text-gray-900">
                      you
                    </span>
                  </div>
                </div>

              </div>

              <div className="flex-none sticky bottom-0 bg-[#ACB4F470] border-2 border-[#4632A8] rounded-lg h-14 xl:w-1/2 mx-auto gap-2 flex items-center">
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
                  className="rounded-lg bg-[#4632A8] h-10 w-10 flex items-center justify-center mr-2"
                >
                  <span className="sr-only">send button</span>
                  <PaperAirplaneIcon className="text-white h-6" />
                </button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
