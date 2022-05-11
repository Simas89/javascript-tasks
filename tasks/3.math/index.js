export default function math(...numbers) {
  const res = Math.floor(
    Math.sqrt(numbers.map((el) => el ** 2).reduce((a, b) => a + b, 0)) / 2
  );
  return res;
}
