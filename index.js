function lowerCaseDrivers(arr) {
  return arr.map(function (el) {
    return el.toLowerCase();
  })
}

function nameToAttributes(arr) {
  
  return arr.map(function (el) {
      debugger; 
      return Object.assign({}, {firstName: el.split(" ")[0], lastName: el.split(" ")[1]})
      
  })
}
