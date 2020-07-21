function telephoneCheck(str) {
  return RegExp(/^(1 |1){0,1}(\(\d\d\d\) {0,1}|\d\d\d(-| ){0,1})\d\d\d(-| ){0,1}\d\d\d\d$/).test(str)
  // 1. can start with 1 or 1space
  // 2. start with (ddd) or (ddd)space or dddspace or ddd- or ddd
  // 3. followed by dddspace or ddd- or ddd
  // 4. followed by dddd
}

console.log(telephoneCheck("1 555-555-5555"));
