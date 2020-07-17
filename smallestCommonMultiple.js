function smallestCommons(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let ans = max;
  // iterating through multiples of max(arr) until a multiple is found that divides the range of min() to max() - 1
  while (true) {
    let flag = true;
    for (let i = min; i < max; i++) {
      if (ans % i != 0) {
        ans +=  max
        flag = false;
        break
      }
    }
    if (flag) {
      break
    }
  }
  return ans;
}


smallestCommons([1,5]);
