const DIGITS = [
  [0,0,0,0], [1,1,1,1],
  [2,4,8,6], [3,9,7,1],
  [4,6,4,6], [5,5,5,5],
  [6,6,6,6], [7,9,3,1],
  [8,4,2,6], [9,1,9,1]
]

const lastDigit = (a, b) => {
  if (b === '0') return 1
  let base = parseInt(a.slice(-1))
  let expo = parseInt(b.slice(-4))
  return DIGITS[base][Math.max(expo - 1, 0) % 4]
}