/**
 * Check if a value is in a list of elements
 *
 * @param {String} value The value to check if exists in a column
 * @param {Array} arr The column of items to search in
 * @return {Boolean} True or False
 * @customfunction
 */

 function existsInColumn(value, arr) {
  return arr.flat().some(item => item.includes(value));
}