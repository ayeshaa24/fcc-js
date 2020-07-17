function uniteUnique(arr) {
  for (let a of Object.values(arguments).slice(1)) {
    for (e of a) {
      if (!(e in arr)) {
        arr.push(e);
      }
    }
  }
  return arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
