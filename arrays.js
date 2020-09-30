const chocolateBars = ['snickers', 'hundred grad', 'kitkate', 'skittles'];

const addElementToBeginningOfArray = (arr, e) => {
  return arr.unshift(e)
}

const destructivelyAddElementToBeginningOfArray = (arr, e) => {
  return [e, ...arr]
}
