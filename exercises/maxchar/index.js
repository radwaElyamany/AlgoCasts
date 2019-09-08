// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  var obj = {}
  for (var char of str) {
    obj[char] = obj[char] + 1 || 1
  }
  
  var max = 0;
  var maxChar = '';
  for (var prop in obj) {
    if (obj[prop] > max) {
       max = obj[prop]
       maxChar = prop
    }
  }

  return maxChar
}

module.exports = maxChar;
