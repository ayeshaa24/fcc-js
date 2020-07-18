function addTogether(first, second) {
  console.log(second);
  if (typeof first !== "number" || (typeof second !== "number" && typeof second !== "undefined")) {
    return
  }
  if (typeof second === "undefined") {
    return function(x) {
      if (typeof x !== "number") {
        return
      }
      return first + x;
    }
  }
  return first + second;
}

addTogether(5)(7);
