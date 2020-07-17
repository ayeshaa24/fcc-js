function sumPrimes(num) {
  let ans = []
  for (let i = 2; i <= num; i++) {
    let flag = false;
    for (let j = 2; j <= num/2 ; j++) {
      if (i % j == 0 && i != j) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      ans.push(i)
    }
  }
  ans = ans.reduce((sum, i) => sum + i, 0);
  return ans;
}

sumPrimes(10);
