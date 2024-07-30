import React, { useRef, useState } from "react";
import { Card } from "@/components/card/Card";
import { formatPrice, classNames } from "@/util";
import {
  ArrowLineDownIcon,
  ArrowLineUpIcon,
  BackgroundIcon,
} from "@/components/Icons";
import { Button } from "@/components/button/Button";
import { InputField } from "@/components/forms/TextField/InputField";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { WithdrawModal } from "@/components/modal/Withdraw";
import { useLocation } from "react-router-dom";
import { EllipsisVertical } from "lucide-react";

export const Wallet: React.FC = () => {
  const walletBalance = 100000;
  const inputRef = useRef<HTMLInputElement>(null);
  const [activeHistory, setActiveHistory] = useState<string>("receive");
  const [open, setOpen] = useState<boolean>(false);

  const { pathname } = useLocation();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <WithdrawModal isOpen={open} close={handleClose} />
      <section className="mt-32 px-4 lg:px-20">
        <div className="mx-auto space-y-10">
          <div className="space-y-10">
            <Card className="relative bg-[#4632A8] rounded-3xl xl:p-12">
              <BackgroundIcon className="absolute w-full left-0 h-full top-0" />
              {pathname.includes("/client") ||
                (pathname.includes("/admin") && (
                  <button className="absolute right-5 top-5">
                    <span className="sr-only">open menu</span>
                    <EllipsisVertical
                      className="h-8 text-white"
                      aria-hidden={true}
                    />
                  </button>
                ))}
              <div className="gap-5 grid grid-cols-1 lg:grid-cols-2 place-content-center place-items-center z-10 relative lg:gap-10">
                <Card className="w-full bg-white/30 rounded-2xl flex items-center flex-col justify-center gap-20 h-full py-10  text-white">
                  <h3 className="capitalize text-2xl sm:text-lg md:text-2xl lg:text-3xl font-normal tracking-wide">
                    wallet balance
                  </h3>
                  <p className="text-left text-2xl font-bold md:text-3xl lg:text-5xl xl:text-6xl tracking-widest">
                    {formatPrice(walletBalance)}
                  </p>
                </Card>

                <div className="w-full flex justify-end flex-col items-start sm:h-[16rem] space-y-5">
                  <h1 className="text-lg md:text-xl lg:text-2xl capitalize text-white font-semibold">
                    this month
                  </h1>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    <div className="p-6 bg-white/30 rounded-2xl flex items-start flex-col justify-between text-white w-full flex-shrink-0 h-44">
                      <div className="flex items-start justify-between w-full">
                        <h3 className="capitalize text-xl sm:text-lg lg:text-xl font-normal tracking-wide">
                          received
                        </h3>
                        <span className="flex justify-center items-center h-12 w-12 bg-white rounded-full">
                          <ArrowLineDownIcon />
                        </span>
                      </div>
                      <span className="text-lg md:text-2xl font-bold tracking-widest">
                        {formatPrice(walletBalance)}
                      </span>
                    </div>

                    <div className="p-6 bg-white/30 rounded-2xl flex items-start flex-col justify-between text-white w-full flex-shrink-0 h-44">
                      <div className="flex items-center justify-between w-full">
                        <h3 className="capitalize text-xl sm:text-lg lg:text-xl font-normal tracking-wide">
                          sent
                        </h3>
                        <span className="flex justify-center items-center h-12 w-12 bg-white rounded-full">
                          <ArrowLineUpIcon />
                        </span>
                      </div>
                      <span className="text-lg md:text-2xl font-bold tracking-widest">
                        {formatPrice(walletBalance)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mx-auto w-full flex items-center justify-center">
              <Button
                onClick={() => handleOpen()}
                className="px-6 py-2.5 bg-[#4632A8] hover:bg-[#4632A8]/70 focus:outline-none focus:ring-[#4632A8]/70 focus:ring-2 focus:ring-offset-2 transition hover:-translate-y-0.5 active:bg-[#4632A8] text-white text-base sm:text-lg font-normal capitalize rounded-lg"
              >
                withdraw
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <header className="flex items-center justify-between">
              <h1 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-bold capitalize">
                recent transactions
              </h1>
              <div className="flex items-center h-14 sm:w-[25rem] lg:w-[30rem] border bg-white shadow-sm rounded-xl">
                <InputField
                  ref={inputRef}
                  label="Search"
                  placeholder="Search for history by month"
                  htmlFor="search"
                  labelClass="hidden"
                  className="h-full flex-1 block w-full focus:outline-none border-0 focus:border-none focus:ring-0 rounded-tl-xl rounded-bl-xl text-lg font-normal pl-6 pr-2 text-gray-700"
                />
                <button
                  className="flex px-5 items-center justify-center"
                  onClick={() => {
                    inputRef.current?.focus();
                  }}
                >
                  <span className="sr-only">search</span>
                  <MagnifyingGlassIcon className="h-7 cursor-pointer" />
                </button>
              </div>
            </header>

            <div className="space-x-6">
              <Button
                onClick={() => setActiveHistory("send")}
                className={classNames(
                  activeHistory === "send"
                    ? "text-white bg-[#4632A8] hover:bg-[#4632A8]/80 active:bg-[#4632A8]/80 rounded-lg"
                    : "text-[#4632A8] bg-transparent",
                  "text-lg capitalize px-6 py-1.5 font-semibold shadow-none",
                )}
              >
                send
              </Button>
              <Button
                onClick={() => setActiveHistory("receive")}
                className={classNames(
                  "text-lg capitalize px-6 py-1.5 font-semibold transition",
                  activeHistory === "receive"
                    ? "text-white bg-[#4632A8] hover:bg-[#4632A8]/80 active:bg-[#4632A8]/80 rounded-lg"
                    : "text-[#4632A8] bg-transparent",
                )}
              >
                receive
              </Button>
            </div>

            <div className="mt-5 space-y-2">
              <ul className="p-6 bg-white text-left  text-base sm:text-lg font-semibold capitalize grid grid-cols-4 place-items-center">
                <li>amount</li>
                <li>data</li>
                <li>time</li>
                <li>status</li>
              </ul>

              <ul className="space-y-3">
                <li className="p-6 bg-white text-base sm:text-lg font-semibold grid grid-cols-4 place-items-center text-gray-700">
                  <span className="capitalize">{formatPrice(500)}</span>
                  <span className="capitalize">2024-05-28</span>
                  <span>11:45 am</span>
                  <span className="capitalize">successful</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
