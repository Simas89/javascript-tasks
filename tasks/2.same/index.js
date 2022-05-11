export default function same(str) {
  let charD = 0;
  let charK = 0;

  str.split("").forEach((el) => {
    el.toLowerCase() === "d" && charD++;
    el.toLowerCase() === "k" && charK++;
  });

  return charD === charK;
}
