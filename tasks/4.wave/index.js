export default function wave(str) {
  const result = [];

  str.split("").forEach((el, idx) => {
    let newStr = str.split("");
    newStr[idx] = el.toUpperCase();
    newStr = newStr.join("");

    result.push(newStr);
  });

  return result;
}
