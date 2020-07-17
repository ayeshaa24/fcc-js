function translatePigLatin(str) {
  let vowels = "aeiou";
  if (vowels.includes(str.slice(0, 1))) {
    str += "way";
  } else {
    let b = str.match(/[^aeiou]+/)[0];
    str = str.slice(b.length) + b + "ay";
  }
  return str;
}

function altTranslatePigLatin(str) {
  let b = str.match(/^[^aeiou]+/);
  return b != null
    ? str
        .slice(b[0].length)
        .concat(b[0])
        .concat("ay")
    : str.concat("way");

  return str;
}

translatePigLatin("eight");
