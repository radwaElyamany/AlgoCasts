// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('')
}

module.exports = anagrams;


// function anagrams(stringA, stringB) {
//   var aCharMap = buildCharMap(stringA);
//   var bCharMap = buildCharMap(stringB);
  
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) return false
  
//   for (var char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) return false
//   }
  
//   return true
// }

// function buildCharMap(str) {
//   var charMap = {};
//   for (var char of str.replace(/[^\w]/g, "").toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }
