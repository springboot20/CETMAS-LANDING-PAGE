import { CalenderContext } from "@/context/CalenderContext";
import { useContext } from "react";

export const useCalendar = ()=> useContext(CalenderContext)