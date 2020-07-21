//this solution performs at minimum 7x better, at maximum infinitely better.
//read the explanation for the reason why.
function palindrome(str) {
  //assign a front and a back pointer
  let front = 0;
  let back = str.length - 1;

  // if even length, then eventually, back = front
  // if odd length, then eventually back < front
  // therefore, we check if back < front
  while (back > front) {
    // \W = [^a-zA-Z0-9_] therefore \W_ = [^a-zA-Z0-9]

    //increments front pointer if current character doesn't meet criteria
    if (str[front].match(/[\W_]/)) {
      front++;
      continue;
    }

    //decrements back pointer if current character doesn't meet criteria
    if (str[back].match(/[\W_]/)) {
      back--;
      continue;
    }

    //finally does the comparison on the current character
    if (str[front].toLowerCase() !== str[back].toLowerCase()) {
      return false;
    }
    front++;
    back--;

    // applies .toLowerCase on the 2 characters being checked
    // rather than wasting time on the whole string
    // (which may never be checked in full anyway)
  }

  //if the whole string has been compared without returning false, it's a palindrome!
  return true;

// EXAMPLE BASIC SOLUTION: .toLowerCase, .replace etc. works on the whole string
// multiple times, whereas the solution above only checks each letter once
// (it may not even check each )
function palindrome(str) {
  str = str
    .toLowerCase()
    .replace(/[^a-z1-9]/g, "")
    .split("");
  while (str.length > 0 && str[0] == str[str.length-1]) {
    str.pop()
    str.shift()
  }
  return (str.length === 0);
}
