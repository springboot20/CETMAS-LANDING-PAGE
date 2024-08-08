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
  ProfileIcon,
  WalletIcon,
} from "@/components/Icons";
import { classNames } from "@/util";
import { SearchField } from "@/components/forms/SearchField/SearchField";
import { Notification } from "@/components/panel/NotificationPanel";

export const ClientLayout: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { pathname } = useLocation();
  const title = pathname.split("/")[2];

  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  console.log(title);

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

  const handleClose = () => {
    setOpen(false);
  };

  let displayText: string | undefined;

  switch (title) {
    case "dashboard":
      displayText = "hi jane williams";
      break;
    case "messages":
      displayText = "chat with admin";
      break;
    case "wallet":
      displayText = "wallet";
      break;
    case "profile":
      displayText = "profile";
      break;
    default:
      displayText = undefined;
      break;
  }

  console.log(title);

  const routes = [
    {
      to: "/client/dashboard",
      label: "dashboard",
      Icon: DashBoardIcon,
      current: true,
    },
    {
      to: "/client/jobs",
      label: "jobs",
      Icon: JobIcon,
      current: true,
    },
    {
      to: "/client/messages",
      label: "messages",
      Icon: MessageIcon,
      current: true,
    },
    {
      to: "/client/wallet",
      label: "wallet",
      Icon: WalletIcon,
      current: true,
    },
    {
      to: "/client/profile",
      label: "profile",
      Icon: ProfileIcon,
      current: true,
    },
  ];

  return (
    <Disclosure as="div">
      <>
        <Notification
          open={openNotification}
          setOpenNotification={setOpenNotification}
        />
        <div className="relative z-10 w-full flex lg:justify-between items-stretch h-screen flex-shrink-0">
          {/* Navigation starts */}
          <DashBoardNavigation
            open={open}
            close={handleClose}
            routes={routes}
          />
          {/* Navigation starts */}

          {/* Main section starts */}
          <main className="absolute w-full left-0 lg:w-[calc(100%-8rem)] lg:left-32 min-h-screen right-0">
            <div className="w-full relative flex flex-col justify-between h-full">
              <header
                className={classNames(
                  "fixed top-0 right-0 h-20 sm:h-24 left-0 lg:left-32 bg-[#F9F9F9] px-10 z-20",
                  scrolling ? "lg:bg-[#F9F9F9]" : "g:bg-transparent",
                )}
              >
                <div className="flex justify-between items-center h-full">
                  <div className="flex items-start space-x-4">
                    <div>
                      {title === "applicants" ? (
                        <div className="flex items-center space-x-3">
                          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold capitalize text-gray-800">
                            talents
                          </h2>
                          <span className="inline-flex items-center bg-[#4632A8] justify-center h-9 w-10 rounded-xl text-white text-base sm:text-lg font-thin">
                            12
                          </span>
                        </div>
                      ) : null}
                      <h3 className="text-xl sm:text-3xl font-bold lg:text-2xl xl:text-4xl capitalize text-gray-800">
                        {displayText}
                      </h3>
                    </div>
                  </div>

                  {pathname.includes("/jobs") ||
                    (pathname.includes("/applicants") && (
                      <div className="hidden lg:flex items-center space-x-3">
                        <div className="hidden lg:block">
                          <SearchField ref={searchInputRef} />
                        </div>
                      </div>
                    ))}

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
                        <Bars3Icon
                          className="block h-8 w-8 sm:h-10 sm:w-10"
                          aria-hidden="true"
                        />
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
