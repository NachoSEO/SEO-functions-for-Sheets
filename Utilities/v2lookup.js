/**
 * Vertical lookup using two elements to find an output
 * 
 * @param {Array} matrix Data to search for
 * @param {Number} index Column where the to find the data
 * @param {String} firstItem First item to match
 * @param {String} secondItem Second item to match
 * @returns {String} - The string matched with the specified criteria
 * @customfunction
 */
function v2lookup(matrix, index, firstItem, secondItem) {
  let firstItemFound, secondItemFound;
  
  let result = "Didn't find a match";

  for(const row of matrix) {
    const [ col1, ...cols ] = row;

    if(col1 === firstItem && firstItemFound === undefined) {
      firstItemFound = true;
    }

    if(firstItemFound && !secondItemFound) {
      if (col1 !== '' &&  col1 !== firstItem) {
        secondItemFound = true;
      }
    }

    if(firstItemFound && !secondItemFound) {
      if(cols.indexOf(secondItem) !== -1 ) {
        result = row[index - 1];
        break;
      }
    }
  }

  return result;
}
