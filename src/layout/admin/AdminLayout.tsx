import React, { useState, useEffect, useRef } from "react";
import { Disclosure } from "@headlessui/react";
import { Outlet, useLocation } from "react-router-dom";
import { DashBoardNavigation } from "@/components/navigation/DashBoardNavigation.tsx";
import { Bars3Icon } from "@heroicons/react/24/outline";
import {
  BellIcon,
  DashBoardIcon,
  JobIcon,
  MessageIcon,
  SignOutIcon,
  WalletIcon,
} from "@/components/Icons";
import { classNames } from "@/util";
import { SearchField } from "@/components/forms/SearchField/SearchField";
import { SelectField } from "@/components/forms/SelectField/SelectField";
import { Notification } from "@/components/panel/NotificationPanel";

export const AdminLayout: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { pathname } = useLocation();
  const title = pathname.split("/")[2];

  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = (): void => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  console.log(title);

  let displayText: string | undefined;

  switch (title) {
    case "dashboard":
      displayText = "Hi Jane Williams";
      break;
    case "jobs":
      displayText = "List of Jobs";
      break;
    case "messages":
      displayText = "";
      break;
    case "wallet":
      displayText = "Wallet";
      break;
    default:
      displayText = undefined;
      break;
  }

  const routes = [
    {
      to: "/admin/dashboard",
      label: "dashboard",
      Icon: DashBoardIcon,
      current: true,
    },
    {
      to: "/admin/jobs",
      label: "jobs",
      Icon: JobIcon,
      current: true,
    },
    {
      to: "/admin/messages",
      label: "messages",
      Icon: MessageIcon,
      current: true,
    },
    {
      to: "/admin/wallet",
      label: "wallet",
      Icon: WalletIcon,
      current: true,
    },
    {
      to: "/",
      label: "logout",
      Icon: SignOutIcon,
      current: true,
    },
  ];

  return (
    <Disclosure as="div">
      <>
        <Notification open={openNotification} setOpenNotification={setOpenNotification} />
        <div className="relative z-10 w-full flex lg:justify-between items-stretch h-screen flex-shrink-0">
          {/* Navigation starts */}
          <DashBoardNavigation open={open} close={handleClose} routes={routes} />
          {/* Navigation starts */}

          {/* Main section starts */}
          <main className="absolute w-full left-0 lg:w-[calc(100%-8rem)] lg:left-32 min-h-screen right-0">
            <div className="w-full relative flex flex-col justify-between h-full">
              <header
                className={classNames(
                  "fixed top-0 right-0 h-20 sm:h-24 left-0 lg:left-36 bg-[#F9F9F9] px-10 z-20",
                  scrolling ? "lg:bg-[#F9F9F9]" : "g:bg-transparent",
                )}
              >
                <div className="flex justify-between items-center h-full">
                  <div>
                    <div className="flex items-start">
                      <h3 className="text-xl sm:text-3xl font-bold lg:text-2xl xl:text-4xl text-gray-800">
                        {displayText}
                        {pathname.split("/")[3] && "profile"}
                      </h3>
                    </div>
                    {title === "clients" && !pathname.split("/")[3] ? (
                      <div className="flex items-center space-x-3">
                        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold capitalize text-gray-800">
                          clients
                        </h2>
                        <span className="inline-flex items-center bg-[#4632A8] justify-center h-8 w-10 rounded-lg text-white text-base sm:text-lg font-thin">
                          12
                        </span>
                      </div>
                    ) : null}
                  </div>

                  {pathname.includes("/jobs") && (
                    <div className="hidden lg:flex items-center space-x-3">
                      <div className="hidden lg:block">
                        <SearchField ref={searchInputRef} />
                      </div>

                      <SelectField className="bg-white shadow-sm rounded-xl focus:ring-0 h-14 w-48 lg:w-48 px-5 text-base font-bold border-0 capitalize">
                        <option>newer</option>
                        <option>best matches</option>
                        <option>saved jobs</option>
                      </SelectField>

                      {/* <Combobox value={''} options={options} placeholder={'Newer'} onChange={()=> console.log('hello world')}/> */}
                    </div>
                  )}

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

              <Outlet />
            </div>
          </main>
          {/* Main section ends */}
        </div>
      </>
    </Disclosure>
  );
};
