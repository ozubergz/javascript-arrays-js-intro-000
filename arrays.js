var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(a, e) { return [e, ...a]; }

function destructivelyAddElementToBeginningOfArray(a, e) {
  a.unshift(e)
  return a
}

// function addElementToEndOfArray (array, element) { return [array..., element] }

// var destructivelyAddElementToEndOfArray = (a, e) => {
//   a.push(e)
//   return a
// }
