var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (a, e) => [e, ...a];

var destructivelyAddElementToBeginningOfArray = (a, e) => {
  a.unshift(e)
  return a
}

// function addElementToEndOfArray (a, e) { return [a..., e] }

// var destructivelyAddElementToEndOfArray = (a, e) => {
//   a.push(e)
//   return a
// }
