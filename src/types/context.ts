export interface CalenderInterface {
  newDays: Date[];
  today: Date;
  selectedDay: Date;
  daysOfWeeks: string[];
  firstDayCurrentMonth: Date;
  handleNextMonth: () => void;
  handlePrevMonth: () => void;
  setSelectedDay: React.Dispatch<React.SetStateAction<Date>>;
}
