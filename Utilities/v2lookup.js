/**
 * Vertical lookup using two elements to find an output
 * 
 * @param {String} firstItem First item to match
 * @param {String} secondItem Second item to match
 * @param {Array} matrix Data to search for
 * @param {Number} index Column where the to find the data
 * @returns {String} - The string matched with the specified criteria
 * @customfunction
 */
function v2lookup(firstItem, secondItem, matrix, index) {
  let firstItemIndex, lastMatchFirstIndex;

  let result = "Didn't find a match";

  matrix.forEach((row, i) => {
    const [ col1, ...cols ] = row;

    if(col1 === firstItem && firstItemIndex === undefined) {
      firstItemIndex = i;
    }

    if(firstItemIndex && !lastMatchFirstIndex) {
      if (col1 !== '' &&  col1 !== firstItem) {
        lastMatchFirstIndex = i - 1;
      }
    }

    if(firstItemIndex && !lastMatchFirstIndex) {
      if(cols.indexOf(secondItem) !== -1 ) {

        result = row[index - 1];
      }
    }
  });

  return result;
}
