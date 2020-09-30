var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (arr, e) => {
  return arr.unshift(e)
}

var destructivelyAddElementToBeginningOfArray = (arr, e) => {
  let newArr = [... arr];
  newArr.unshift(e)
  return newArr
}
