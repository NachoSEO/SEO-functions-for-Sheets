/**
 * Returns the run rate for current month
 * 
 * @param {array} lastWeeksTraffic List of weekly traffic from the last weeks
 * @returns {number} - Traffic run rate for the rest of days of the month.
 * @customfunction
 */

 function getRunRateCurrentMonth(lastWeeksTraffic) {
  const dailyTraffic = getAvgDailytraffic(lastWeeksTraffic);
  const today = new Date();
  const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
  const diffDate = daysInMonth(today.getMonth() + 1, today.getFullYear()) - today.getDate();
  
  return diffDate * dailyTraffic;
}