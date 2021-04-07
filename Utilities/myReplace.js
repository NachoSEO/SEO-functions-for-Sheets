/**
 * Replace a string or substring for another one
 * 
 * @param {String} str String affected
 * @param {String} charToReplace String/Substring that's gonna be replaced
 * @param {String} charReplaced The new value of the replaced string
 * @returns {String} - The string replaced
 * @customfunction
 */

 function myReplace(str, charToReplace, charReplaced) {
  return str.replace(charToReplace, charReplaced);
}
