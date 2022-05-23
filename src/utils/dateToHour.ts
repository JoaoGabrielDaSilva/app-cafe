import { format, isValid } from "date-fns";

export const dateToHour = (date: Date) => {
  if (!isValid(date)) return null;

  return format(date, "HH:mm");
};
