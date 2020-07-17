function steamrollArray(arr) {
  let ans = [];
  for (let i of arr) {
    if (!(Array.isArray(i))) {
      ans.push(i);
    } else {
      ans.push(...steamrollArray(i));
    }
  }
  return ans;
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
