const chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

const addElementToBeginningOfArray = (arr, e) => {
  return arr.unshift(e)
}

const destructivelyAddElementToBeginningOfArray = (arr, e) => {
  let newArr = [... arr];
  newArr.unshift(e)
  return newArr
}
