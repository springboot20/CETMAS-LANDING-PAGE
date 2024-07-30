import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import React, { Fragment } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import CTEMASLOGO from "@/assets/logo.png";
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { Button } from "@/components/button/Button.tsx";
import { Footer } from "@/components/footer/Footer.tsx";

type Routes = Array<{ title: string; to: string; current: boolean }>;

export const LandingLayout: React.FC = () => {
  const navRoutes: Routes = [
    {
      title: "About Us",
      to: "/",
      current: true,
    },
    {
      title: "Talents",
      to: "/talents",
      current: true,
    },
    {
      title: "Testimonials",
      to: "#",
      current: true,
    },
  ];

  const navigate = useNavigate();

  return (
    <Fragment>
      <Disclosure
        as="nav"
        className={"fixed top-0 left-0 right-0 bg-[#4632A8] z-20"}
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-8xl px-2 sm:px-3 w-full">
              <div className="flex h-24 items-center justify-between flex-shrink-0 w-full">
                <div className="lg:hidden flex items-center justify-center rounded-full absolute right-4">
                  <DisclosureButton className="inline-flex items-center justify-center rounded-md text-white">
                    <span className="sr-only">Open Menu</span>
                    {open ? (
                      <XMarkIcon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    ) : (
                      <Bars3Icon
                        className="block h-10 w-10"
                        aria-hidden="true"
                      />
                    )}
                  </DisclosureButton>
                </div>

                <div className="flex flex-1 items-center justify-center lg:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <img
                      src={CTEMASLOGO}
                      alt="CETMAS Logo"
                      className="h-11 sm:h-14"
                    />
                  </div>
                </div>

                <div className="hidden space-x-6 px-2 pb-3 pt-2 lg:flex items-center">
                  {navRoutes.map((item) => (
                    <NavLink
                      key={item.title}
                      to={item.to}
                      className={` inline-block rounded-md px-3 py-3.5 text-lg font-normal transition-all flex-shrink-0 font-lato text-gray-100`}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.title}
                    </NavLink>
                  ))}
                  <Button
                    className="px-8 py-2.5 text-lg font-lato rounded-xl text-[#018ABE] transition-all bg-white font-bold"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </Button>
                </div>
              </div>
            </div>

            <DisclosurePanel className="lg:hidden absolute w-full">
              <div className="space-y-3 px-2 pb-3 pt-2 h-screen fixed w-full bg-white z-20">
                {navRoutes.map((item) => (
                  <NavLink
                    key={item.title}
                    to={item.to}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#4632A8]/70 underline"
                          : "text-[#4632A8]"
                      } block rounded-md px-3 py-3.5 text-xl font-normal transition-all flex-shrink-0`
                    }
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.title}
                  </NavLink>
                ))}
                <Button
                  className="px-4 py-4 w-full hover:ring-2 hover:ring-white text-white transition-all hover:bg-[#4632A8]/70 bg-[#4632A8] font-bold xl:py-2"
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>{" "}
      {/* Render Route Elements start */}
      <Outlet />
      {/* Render Route Elements ends */}
      {/* Footer section start */}
      <Footer />
      {/* Footer section end */}
    </Fragment>
  );
};
