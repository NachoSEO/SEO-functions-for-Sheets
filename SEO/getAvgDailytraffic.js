/**
 * Get the average of daily traffic (or any number on an array)
 * 
 * @param {array} lastWeeksTraffic List of weekly traffic from the last weeks
 * @returns {number} - Traffic run rate for the rest of days of the month.
 * @customfunction
 */
 function getAvgDailytraffic(...args) {
  const lastWeeksTraffic = [...args];
  const totalDays = 7 * lastWeeksTraffic.flat().length
  const totalTraffic = lastWeeksTraffic.flat().reduce((acc, current) => acc + current);
  
  return totalTraffic / totalDays;
}