function convertToRoman(num) {
  var rn = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var d = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];//an array of decimals values that match the index of the roman numerals
  var ans = "";

  for (let i = 0; i < d.length; i++) {
    while (d[i] <= num) {
      num -= d[i];
      ans += rn[i]
    }
  }

  return ans;
}

convertToRoman(16);
