function lowerCaseDrivers(arr) {
  return arr.map(function (el) {
    return el.toLowerCase();
  })
}

function nameToAttributes(arr) {
  
  return arr.map(function (el) {
    el.split(" ")
      debugger; 
      return Object.assign({}, {firstName: el[0], lastName: el[1]})
  })
}
