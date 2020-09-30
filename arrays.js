const chocolateBars = ['snickers', 'hundred grad', 'kitkat', 'skittles'];

const addElementToBeginningOfArray = (arr, e) => {
  return arr.unshift(e)
}

const destructivelyAddElementToBeginningOfArray = (arr, e) => {
  return [e, ...arr]
}
