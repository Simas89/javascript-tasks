export default function number(numbers) {
  const total = numbers.reduce((a, b) => a + b, 0);
  const average = Math.round(total / numbers.length);

  return average;
}
