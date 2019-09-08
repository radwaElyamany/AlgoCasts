// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return
  }
  
  if (level.length === 2 * n - 1) {
    console.log(level)
    pyramid(n, row + 1)
    return
  }
  
  var midPoint = Math.floor((2 * n - 1)/2)
  var add
  if (midPoint - row <= level.length && midPoint + row >= level.length) {
    add =  '#'
  } else {
    add = ' '
  }
  
   pyramid(n, row, level + add)
}

module.exports = pyramid;


// function pyramid(n) {
//   var midPoint = Math.floor((2 * n - 1)/2)
//   for (var row = 0; row < n; row++) {
//     var pyramid = ''
//     for (var column = 0; column < 2 * n - 1; column++) {
//       if (midPoint - row <= column && midPoint + row >= column) {
//         pyramid += '#'
//       } else {
//         pyramid += ' '
//       }
//     }
//     console.log(pyramid)
//   }
// }