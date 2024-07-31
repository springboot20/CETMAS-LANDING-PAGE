import React, { useRef } from "react";
import { DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Logo from "@/assets/logo.png";
import { SignOutIcon } from "@/components/Icons";
import { NavItem } from "@/components/NavItem";
import { classNames } from "@/util";
import { AnimatePresence, motion } from "framer-motion";
import {
  framerText,
  framerSidebarPanel,
  framerIcon,
  framerNavItems,
} from "@/util/configs/framer.config";
import { useLocation } from "react-router-dom";
import { SearchField } from "../forms/SearchField/SearchField";
import { SelectField } from "../forms/SelectField/SelectField";
import { Routes } from "@/types/navigation";

export const DashBoardNavigation: React.FC<{
  open: boolean;
  routes: Routes;
  close: (
    focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>,
  ) => void;
}> = ({ open, close, routes }) => {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const { pathname } = useLocation();

  return (
    <nav className="z-30">
      <>
        <div
          className={classNames(
            `hidden lg:flex fixed left-0 top-0 h-screen lg:bg-black w-32 flex-col items-center`,
          )}
        >
          <div
            className={classNames(
              "hidden lg:flex flex-col items-center h-full w-full",
              !pathname.includes("/admin") ? "justify-between" : "gap-10",
            )}
          >
            <div className="flex flex-col gap-10 w-full">
              {/* logo container starts */}
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center self-stretch h-20">
                  <img src={Logo} alt="cetmas logo" className="w-24" />
                </div>
              </div>
              {/* logo container ends */}

              <div className="flex flex-col items-center w-full">
                {routes.map(({ label, Icon, to, current }) => (
                  <NavItem
                    to={to}
                    key={to}
                    aria-current={current ? "page" : undefined}
                    activeClass='before:content-[" "] before:absolute before:h-full before:bg-white before:top-0 before:w-1 before:right-0 before:z-10 before:transition-all'
                    className={classNames(
                      current ? "hover:bg-white/20 " : "",
                      'flex-col py-6 px-7 w-full transition before:content-[" "] before:absolute before:h-full before:top-0 before:w-1 before:right-0 before:z-10 before:transition-all relative',
                    )}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          className={classNames(
                            isActive ? "fill-white" : "fill-gray-100",
                          )}
                        />
                        <span className="text-lg font-normal capitalize">
                          {label}
                        </span>
                      </>
                    )}
                  </NavItem>
                ))}
              </div>
            </div>

            <>
              {!pathname.includes("/admin") && (
                <NavItem
                  to="/"
                  activeClass='before:content-[" "] before:absolute before:h-full before:bg-white before:top-0 before:w-1 before:right-0 before:z-10 before:transition-all'
                  className={
                    'flex-col py-6 px-7 w-full hover:bg-white/20 transition before:content-[" "] before:absolute before:h-full before:top-0 before:w-1 before:right-0 before:z-10 before:transition-all'
                  }
                >
                  {({ isActive }) => (
                    <>
                      <SignOutIcon
                        className={classNames(
                          isActive ? "fill-white" : "fill-gray-100",
                        )}
                      />
                      <span className="text-lg font-normal capitalize">
                        logout
                      </span>
                    </>
                  )}
                </NavItem>
              )}
            </>
          </div>
        </div>

        {/* Mobile navigation starts */}
        <AnimatePresence initial={false} mode="wait">
          <DisclosurePanel
            as={motion.div}
            {...framerSidebarPanel}
            className={classNames(
              "lg:hidden fixed top-0 h-screen w-full sm:w-[25rem] bg-black",
              open ? "translate-x-0" : "-translate-x-full",
              "transform transition-transform duration-200 ",
            )}
          >
            <div className="h-full flex flex-col justify-between p-4">
              <DisclosureButton className="absolute right-8 top-8">
                <span className="sr-only">Close Side menu</span>
                <XMarkIcon className="h-8 w-8 text-gray-100" />
              </DisclosureButton>

              <div className="flex flex-col gap-5">
                {/* logo container starts */}
                <div className="flex items-center mb-6 w-full">
                  <img src={Logo} alt="cetmas logo" className="w-28" />
                </div>
                {/* logo container ends */}

                {/*  */}
                {pathname.includes("/jobs") && (
                  <div className="flex flex-col gap-4 lg:hidden">
                    <div>
                      <SearchField ref={searchInputRef} />
                    </div>
                    <SelectField className="bg-white shadow-sm rounded-xl focus:ring-0 h-14 w-44 lg:w-48 px-5 text-base font-bold border-0 text-gray-700  ">
                      <option>Newer</option>
                    </SelectField>
                  </div>
                )}
                {/*  */}

                <motion.ul className="space-y-7">
                  {routes.map(({ to, label, Icon }, idx) => (
                    <motion.li key={to} {...framerNavItems(idx, open)}>
                      <NavItem
                        to={to}
                        className="flex-row space-x-3 rounded-lg py-2.5 px-3 hover:bg-white/20"
                        close={close}
                      >
                        {({ isActive }) => (
                          <>
                            <motion.div {...framerIcon(open)}>
                              <Icon
                                className={classNames(
                                  isActive ? "fill-white" : "fill-gray-100",
                                )}
                              />
                            </motion.div>
                            <motion.span
                              {...framerText(idx, open)}
                              className="text-lg font-normal capitalize"
                            >
                              {label}
                            </motion.span>
                          </>
                        )}
                      </NavItem>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div className="">
                {/* SignOut icon */}
                <NavItem
                  to="/"
                  className="flex-row space-x-3 rounded-lg py-2.5 px-3"
                >
                  {({ isActive }) => (
                    <>
                      <SignOutIcon
                        className={classNames(
                          isActive ? "fill-white" : "fill-gray-100",
                        )}
                      />
                      <span className="text-lg font-normal capitalize">
                        logout{" "}
                      </span>
                    </>
                  )}
                </NavItem>
              </div>
            </div>
          </DisclosurePanel>
        </AnimatePresence>
        {/* Mobile navigation ends */}
      </>
    </nav>
  );
};
