function rot13(str) {
  return str
    .split("")
    .map(function(i) {
      if (i.match(/[^a-zA-Z]/)) {
        return i;
      }

      let c = i.charCodeAt(0) - "A".charCodeAt(0) < 13 ? 13 : -13
      return String.fromCharCode(i.charCodeAt(0) + c);
    })
    .join("");
}

rot13("SERR PBQR PNZC");
