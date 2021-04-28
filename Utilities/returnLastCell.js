/**
 * Returns the last value of an array of cells 
 * filtering empty & falsy values
 * 
 * @param {Array} cells List of cells that will be checked
 * @returns {String} - The last value of a group of cells.
 * @customfunction
 */

 function returnLastCell(cells) {
  const arr = cells.toString().split(',');
  return arr
    .filter(item => item)
    .reverse()
    [0];
}