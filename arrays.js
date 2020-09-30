var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, e) => [e, ...arr]

var destructivelyAddElementToBeginningOfArray = (arr, e) => {
  arr.unshift(e)
  return arr
}
