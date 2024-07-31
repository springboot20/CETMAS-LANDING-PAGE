import React, { useState, createContext } from "react";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  startOfToday,
  parse,
} from "date-fns";
import { CalenderInterface } from "@/types/context";

export const CalenderContext = createContext<CalenderInterface>(
  {} as CalenderInterface,
);

export const CalenderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const daysOfWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  const firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  const startDay = firstDayCurrentMonth;
  const endDay = endOfWeek(endOfMonth(firstDayCurrentMonth));

  const newDays = eachDayOfInterval({ start: startDay, end: endDay });

  const handleNextMonth = () => {
    let firstDayOfNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  const handlePrevMonth = () => {
    let firstDayOfNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayOfNextMonth, "MMM-yyyy"));
  };

  return (
    <CalenderContext.Provider
      value={{
        today,
        firstDayCurrentMonth,
        daysOfWeeks,
        setSelectedDay,
        selectedDay,
        handlePrevMonth,
        handleNextMonth,
        newDays,
      }}
    >
      {children}
    </CalenderContext.Provider>
  );
};
