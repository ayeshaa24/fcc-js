function checkCashRegister(price, cash, cid) {
  let original = cid.reduce((sum, e) => sum + e[1], 0) * 100;
  let diff = (cash - price) * 100;

  if (original === diff) {
    return { status: "CLOSED", change: cid }
  }

  if (original < diff) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  }

  let d = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];
  let change = [];
  cid = cid.reverse();

  for (let i = 0; i < cid.length; i++) {
    let c = Math.min(
      cid[i][1] * 100,
      Math.floor(diff / d[i]) * d[i]
    );
      // Minimum between cash in drawer (e[1]) and the maximum possible amount that can actually be taken from that category
      // If latter is minimum, then drawer must have enough to fund the maximum taken from that category
      // (There's no need to change the amount remaining in that category as we won't relook at that category)
      // If former is minimum, then drawer must not have the maximum amount possible, and will take whatever it can give

      if (c > 0) {
        diff -= c;
        change.push([cid[i][0], c/100]);
      }
      // takes difference away
      // and adds what was just taken from the counter to the change list
  }

  if (diff > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] }
  } else {
    return { status: "OPEN", change }
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
