/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  let startDate: Date;
  if(typeof targetDate === "string") {
    startDate = new Date(targetDate.split('.').reverse().toString());
  } else {
    startDate = targetDate;
  }
  const newYear = new Date(2026, 0, 1, 0, 0, 0, 0);
  const startDateMs = startDate.getTime();
  const newYearMs = newYear.getTime();
  return (newYearMs - startDateMs) / (24 * 60 * 60 * 1000);
};
