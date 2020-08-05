function convertToRoman(num) {
  var r = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
  };

  var ans = "";

  // using ([k, v]) instead of (k, v), we use destructuring
  // to get the key and value
  Object.entries(r).forEach(function([sym, number]) {
    let rep = Math.floor(num/number);
    ans += sym.repeat(rep);
    num -= number * rep;
  });
  // this works as the only time we have to place a smaller number before a larger one, is one before a symbol; but as we have put this in the dictionary of roman numerals, we do not have to account for this

  return ans;

}

convertToRoman(16);
