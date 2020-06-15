/**
 * Group a number of cells in only one
 * 
 * @param {array} cells List of cells that will be grouped
 * @returns {string} - All the values separated by a comma.
 * @customfunction
 */

function groupByCell(cells) {
  return cells.toString();
}


/**
 * Returns the last value of an array of cells 
 * filtering empty/falsy values
 * 
 * @param {array} cells List of cells that will be checked
 * @returns {string} - The last value of a group of cells.
 * @customfunction
 */

function returnLastCell(cells) {
  const arr = cells.toString().split(',');
  return arr
    .filter(item => item)
    .reverse()
    [0]
}