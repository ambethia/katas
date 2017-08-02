const solution = (digits) => {
  let largest = 0
  for (let i = 0; i < digits.length - 4; i++) {
    const number = Number(digits.slice(i, i + 5))
    if (number > largest) largest = number
  }
  return largest
}
