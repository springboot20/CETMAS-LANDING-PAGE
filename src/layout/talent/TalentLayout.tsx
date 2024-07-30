import React, { useState, useEffect, useRef } from "react";
import { Disclosure, DisclosureButton } from "@headlessui/react";
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

export const TalentLayout: React.FC = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const { pathname } = useLocation();
  const title = pathname.split("/")[2];

  console.log(title);

  const [openNotification, setOpenNotification] = useState<boolean>(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

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

  let displayText: string | undefined;

  switch (title) {
    case "dashboard":
      displayText = "hi jane williams";
      break;
    case "jobs":
      displayText = "list of jobs";
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

  const routes = [
    {
      to: "/talent/dashboard",
      label: "dashboard",
      Icon: DashBoardIcon,
      current: true,
    },
    {
      to: "/talent/jobs",
      label: "jobs",
      Icon: JobIcon,
      current: true,
    },
    {
      to: "/talent/messages",
      label: "messages",
      Icon: MessageIcon,
      current: true,
    },
    {
      to: "/talent/wallet",
      label: "wallet",
      Icon: WalletIcon,
      current: true,
    },
    {
      to: "/talent/profile",
      label: "profile",
      Icon: ProfileIcon,
      current: true,
    },
  ];

  return (
    <Disclosure as="div">
      {({ open, close }) => (
        <>
          <Notification
            open={openNotification}
            setOpenNotification={setOpenNotification}
          />
          <div className="relative z-10 w-full flex lg:justify-between items-stretch h-screen flex-shrink-0">
            {/* Navigation starts */}
            <DashBoardNavigation open={open} close={close} routes={routes} />
            {/* Navigation starts */}

            {/* Main section starts */}
            <main className="absolute w-full left-0 lg:w-[calc(100%-9rem)] lg:left-36 min-h-screen right-0">
              <div className="w-full relative flex flex-col justify-between h-full">
                <header
                  className={classNames(
                    "fixed top-0 right-0 h-28 left-0 lg:left-36 xl:px-20 p-8 bg-[#F9F9F9] mx-auto z-20",
                    scrolling ? "lg:bg-[#F9F9F9]" : "g:bg-transparent",
                  )}
                >
                  <div className="flex justify-between items-center h-full">
                    <div className="flex items-start space-x-4">
                      <h3 className="text-3xl font-bold lg:text-2xl xl:text-4xl capitalize text-gray-800">
                        {displayText}
                      </h3>
                    </div>

                    {pathname.includes("/jobs") && (
                      <div className="hidden lg:flex items-center space-x-3">
                        <div className="hidden lg:block">
                          <SearchField ref={searchInputRef} />
                        </div>{" "}
                      </div>
                    )}

                    <div className="flex items-center space-x-4 sm:space-x-8">
                      <button
                        type="button"
                        onClick={() => setOpenNotification(true)}
                        className="rounded-full h-12 w-12 border border-gray-800 flex items-center justify-center"
                      >
                        <span className="sr-only">open notification</span>
                        <BellIcon className="fill-gray-800" />
                      </button>
                      <div className="lg:hidden flex items-center justify-center rounded-full">
                        <DisclosureButton className="inline-flex items-center justify-center rounded-md text-gray-900">
                          <span className="sr-only">Open Menu</span>
                          <Bars3Icon
                            className="block h-10 w-10"
                            aria-hidden="true"
                          />
                        </DisclosureButton>
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
      )}
    </Disclosure>
  );
};
