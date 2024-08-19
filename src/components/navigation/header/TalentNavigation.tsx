import { useRef } from "react";
import { classNames } from "@/util";
import { SearchField } from "@/components/forms/SearchField/SearchField";
import { SelectField } from "@/components/forms/SelectField/SelectField";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { BellIcon, MagnifyingGlass } from "@/components/Icons";
import { InputField } from "@/components/forms/TextField/InputField";
import { useHeader } from "@/context/HeaderContext";

export const TalentNavigation = () => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { setOpen, setOpenNotification, scrolling } = useHeader();

  return (
    <header
      className={classNames(
        "fixed top-0 right-0 h-20 sm:h-24 left-0 lg:left-36 bg-[#F9F9F9] px-10 z-20",
        scrolling ? "lg:bg-[#F9F9F9]" : "g:bg-transparent",
      )}
    >
      <div className="flex justify-between items-center h-full">
        <div>
          <div className="flex items-start">
            <h3 className="text-xl sm:text-3xl font-bold lg:text-2xl xl:text-4xl text-gray-800"></h3>
          </div>
          <div className="flex items-center space-x-3">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold capitalize text-gray-800">
              clients
            </h2>
            <span className="inline-flex items-center bg-[#4632A8] justify-center h-8 w-10 rounded-lg text-white text-base sm:text-lg font-thin">
              12
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <div className="hidden lg:block">
            <SearchField ref={searchInputRef} />
          </div>

          <SelectField className="bg-white shadow-sm rounded-xl focus:ring-0 h-14 w-48 lg:w-48 px-5 text-base font-bold border-0 capitalize">
            <option>newer</option>
            <option>best matches</option>
            <option>saved jobs</option>
          </SelectField>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <div className="hidden lg:flex flex-1 items-center w-full lg:w-[25rem] xl:w-[40rem] h-14 bg-white shadow-sm rounded-xl">
            <InputField
              ref={inputRef}
              label="Search"
              placeholder="Search for skills"
              htmlFor="search"
              labelClass="hidden"
              className="h-full flex-1 block w-full border-0 focus:outline-none focus:border-none focus:ring-0 rounded-tl-xl rounded-bl-xl text-lg font-normal pl-6 pr-2 text-gray-700"
            />
            <button
              className="flex px-3 items-center justify-center"
              onClick={() => {
                inputRef.current?.focus();
              }}
            >
              <span className="sr-only">search</span>
              <MagnifyingGlass className="h-7 cursor-pointer" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-4 sm:space-x-8">
          <button
            type="button"
            onClick={() => setOpenNotification(true)}
            className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border border-gray-800 flex items-center justify-center"
          >
            <span className="sr-only">open notification</span>
            <BellIcon className="fill-gray-800" />
          </button>
          <div className="lg:hidden flex items-center justify-center rounded-full">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md text-gray-900"
            >
              <span className="sr-only">Open Menu</span>
              <Bars3Icon className="block h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
