let chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (a, e) => [e, ...a];

var destructivelyAddElementToBeginningOfArray = (a, e) => {
  a.unshift(e)
  return a
}

// function addElementToEndOfArray (array, element) { return [array..., element] }

// var destructivelyAddElementToEndOfArray = (a, e) => {
//   a.push(e)
//   return a
// }
