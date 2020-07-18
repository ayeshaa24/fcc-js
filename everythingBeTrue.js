function truthCheck(collection, pre) {
  return collection.every(i => i[pre]);
}
// to check whether a value is truthy just do: value

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
