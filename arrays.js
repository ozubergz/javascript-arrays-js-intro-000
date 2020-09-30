var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, e) => {
  return [e, ...arr]
}

var destructivelyAddElementToBeginningOfArray = (arr, e) => {
  return arr.unshift(e)
}
