function checkCashRegister(price, cash, cid) {
  let original = cid.reduce((sum, e) => sum + e[1], 0) * 100;
  let diff = (cash - price) * 100;

  if (original === diff) {
    return { status:"CLOSED", change:cid }
  }

  if (original < diff) {
    return { status:"INSUFFICIENT_FUNDS", change:[] }
  }

  let d = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  let change = cid
    .reverse()
    .reduce((acc, e, i) => {
      let c = Math.min(e[1]*100, Math.floor(diff / d[i]) * d[i]);
      // ^ instead of using a while loop to calc how many would be taken from each category
      // we either take the max amount in the category or the amount we need from the category

      if (c > 0) {
        diff -= c;
        acc.push([e[0], c/100]);
      }

      return acc;
    }, []);

  if (diff > 0) {
    return { status: "INSUFFICIENT_FUNDS", change:[] }
  } else {
    return { status: "OPEN", change }
  }
}

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
