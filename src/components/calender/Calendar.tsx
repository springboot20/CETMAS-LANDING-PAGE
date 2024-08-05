import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { classNames } from "@/util";
import { getDay, isEqual, isSameMonth, isToday, format } from "date-fns";
import { useCalendar } from "@/hooks/useCalender";

export const Calendar: React.FC = () => {
  const {
    firstDayCurrentMonth,
    handleNextMonth,
    handlePrevMonth,
    newDays,
    daysOfWeeks,
    selectedDay,
    setSelectedDay,
    today,
  } = useCalendar();

  return (
    <div className="rounded-xl bg-[#A79BE1B2]/20 p-4 sm:max-w-sm xl:max-w-[26.5rem] w-full">
      <div className="flex items-center justify-between">
        <h2 className="flex-auto font-semibold text-gray-900 text-lg capitalize">
          {format(firstDayCurrentMonth, "MMM yyyy")}
        </h2>
        <button
          onClick={handlePrevMonth}
          className="flex flex-none items-center justify-center p-1 my-1"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon
            className="w-5 h-5"
            aria-hidden={true}
            strokeWidth={2}
          />
        </button>
        <button
          onClick={handleNextMonth}
          className="flex flex-none items-center justify-center p-1 my-1"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon
            className="w-5 h-5"
            aria-hidden={true}
            strokeWidth={2}
          />
        </button>
      </div>
      <div className="grid grid-cols-7 mt-4 text-gray-500 text-sm leading-6 text-center">
        {daysOfWeeks.map((day, index) => (
          <div key={index}>{day}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-sm">
        {newDays.map((day, dayIndx) => (
          <div
            key={dayIndx}
            className={classNames(
              dayIndx === 0 && colStartClasses[getDay(day)],
              "py-2",
            )}
          >
            <button
              onClick={() => {
                setSelectedDay(day);
                console.log(!isEqual(day, selectedDay));
              }}
              className={classNames(
                isEqual(day, selectedDay) && "text-white",
                !isEqual(day, selectedDay) && "hover:bg-white",
                !isEqual(day, selectedDay) && isToday(day) && "text-gray-900",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  isSameMonth(day, today) &&
                  "text-gray-700",
                !isEqual(day, selectedDay) &&
                  !isToday(day) &&
                  !isSameMonth(day, today) &&
                  "text-gray-400",
                isEqual(day, selectedDay) && !isToday(day) && "bg-gray-400",
                isToday(day) && "bg-[#4632A8] text-white",
                isEqual(day, selectedDay) && isToday(day) && "font-semibold ",
                "h-6 w-6 mx-auto flex transition text-sm items-center justify-center rounded-full cursor-pointer",
              )}
            >
              <time dateTime={format(day, "yyyy-MMM-d")}>
                {day.getDate().toString().split("-").pop()?.replace(/^0/, "")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
let colStartClasses = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];
