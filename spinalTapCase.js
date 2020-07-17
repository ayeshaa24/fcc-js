function spinalCase(str) {
  return str
    .replace(/([A-Z])/g, i => " " + i.toLowerCase())
    .split(/[^a-zA-Z]/)
    .filter(i => i!="")
    .join("-");
}

function altSpinalCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, /$1 $2/)
    .replace(/[^a-zA-Z]/g, "-").toLowerCase();
    // NOTE: $1 is a placeholder handled by REPLACE not regex
    // which is why it is in "" and not //
}



spinalCase("thisIsSpinalTap");
