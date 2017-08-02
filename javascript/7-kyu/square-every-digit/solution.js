// A string free solution...
const squareDigits = (n) => {
  return [...Array(Math.log10(n) + 1 | 0).keys()].reverse()
    .map(i => n / Math.pow(10, i) % 10 | 0)
    .reduce((a, c) => a * Math.pow(10, Math.max(Math.log10(c * c) + 1 | 0, 1)) + c * c, 0)
}