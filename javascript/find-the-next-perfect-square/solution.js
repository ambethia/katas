const findNextSquare = (sq) => {
  const r = Math.sqrt(sq)
  return Number.isInteger(r) ? (r + 1) ** 2 : -1
}
