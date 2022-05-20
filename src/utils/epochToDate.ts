export const epochToDate = (date: number) => {
  const convertedDate = new Date(date * 1000);

  return convertedDate;
};
