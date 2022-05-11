const isUpperCase = (string) => /^[A-Z]*$/.test(string);

export default function chain(inputString) {
  const polymer = inputString.split("");

  for (let i = polymer.length - 1; i >= 0; i--) {
    const current = polymer[i];
    const next = polymer[i + 1];

    const isSameCharacters = current.toLowerCase() === next?.toLowerCase();

    const hasDiferentCasing =
      (!isUpperCase(current) && isUpperCase(next)) ||
      (isUpperCase(current) && !isUpperCase(next));

    if (isSameCharacters && hasDiferentCasing) {
      polymer.splice(i, 2);
    }
  }

  return polymer.join("");
}
