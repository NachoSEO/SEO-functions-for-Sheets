/**
 * Vertical lookup using two elements to find an output
 * 
 * @param {Array} matrix Data to search for
 * @param {Number} index Column where the to find the data
 * @param {String} firstItem First item to match
 * @param {...Object} args Second item to match
 * @returns {String} - The string matched with the specified criteria
 * @customfunction
 */
function unlimitedVlookup(matrix, index, firstItem, ...args) {
  if(args.length + 1 >= matrix[0].length && index >= matrix[0].length) {
    return;
  }
  if(args.length === 0) {
    const ro = matrix.find(row => row.includes(firstItem));
    return ro[index - 1];
  }

  let itemIndexFirst, itemIndexLast;
  for(const [i, row] of matrix.entries()) {
    const [ col1, ...cols ] = row;

    if(col1 === firstItem) {
      itemIndexFirst = i;
    } else if(itemIndexFirst){
      if (i === matrix.length -1 || col1 !== '' &&  col1 !== firstItem) {
        itemIndexLast = i;
        break;
      }
    }
  }

  if(itemIndexFirst && itemIndexLast) {
    const newMatrix = matrix.slice(itemIndexFirst, itemIndexLast).map(([, ...row]) => row);
    console.log(newMatrix);
    return unlimitedVlookup(newMatrix, index - 1 , args[0], ...args.slice(1));
  } else {
    const newMatrix = matrix.slice(itemIndexFirst, itemIndexLast).map(([, ...row]) => row);
    console.log(newMatrix);
    return unlimitedVlookup(newMatrix, index - 1, firstItem, ...args)
  }
}
