var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

var addElementToBeginningOfArray = (a, e) => [e, ...a]

var destructivelyAddElementToBeginningOfArray = (a, e) => {
  a.unshift(e)
  return a
}

let addElementToEndOfArray = (a, e) => [a..., e]

let destructivelyAddElementToEndOfArray = (a, e) => {
  a.push(e)
  return a
}
