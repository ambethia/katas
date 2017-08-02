const SeriesSum = (n) => {
  return Array.from(Array(n).keys())
    .map((m) => 1 / (m * 3 + 1))
    .reduce((a, c) => a + c, 0)
    .toFixed(2)
}