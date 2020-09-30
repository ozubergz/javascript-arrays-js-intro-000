var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  return [element, ...array];
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
  return array
}

// function addElementToEndOfArray(array, element) { return [array..., element] }

// var destructivelyAddElementToEndOfArray = (a, e) => {
//   a.push(e)
//   return a
// }
