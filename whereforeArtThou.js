function whatIsInAName(collection, source) {
  for (let key in source) {
    collection = collection
      .filter(i => i.hasOwnProperty(key) && i[key] == source[key]);
  }
  return collection;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
