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

/**
 * Returns the value of a specific value by its inversed position
 * filtering empty/falsy values
 * 
 * @param {array} cells List of cells that will be checked
 * @param {number} inverseIndex Index
 * @returns {string} - The last value of a group of cells.
 * @customfunction
 */

function returnCellInversed(cells, inverseIndex) {
  const arr = cells.toString().split(',');
  return arr
    .filter(item => item)
    .reverse()
    [inverseIndex];
}

/**
 * Replace a string or substring for another one
 * 
 * @param {string} str String affected
 * @param {string} charToReplace String/Substring that's gonna be replaced
 * @param {string} charReplaced The new value of the replaced string
 * @returns {string} - The string replaced
 * @customfunction
 */

function myReplace(str, charToReplace, charReplaced) {
  return str.replace(charToReplace, charReplaced)
}
