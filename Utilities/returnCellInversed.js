/**
 * Returns the value of a specific value by its inversed position
 * filtering empty/falsy values
 * 
 * @param {Array} cells List of cells that will be checked
 * @param {Number} inverseIndex Index
 * @returns {String} - The last value of a group of cells.
 * @customfunction
 */

 function returnCellInversed(cells, inverseIndex) {
  const arr = cells.toString().split(',');
  
  return arr
    .filter(item => item)
    .reverse()
    [inverseIndex];
}