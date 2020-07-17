function convertHTML(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function altConvertHTML(str) {
  let htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&apos;"
  }
  return str.replace(/([&<>"'])/g, match => htmlEntities[match]);
}

convertHTML("Hamburgers < Pizza < Tacos");
