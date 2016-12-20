const lastDigit = (digits, last) => {
  let expo = last === undefined ? 1 : last
  if (digits.length > 0) {
    const base = digits.pop()
    // if (expo === 0 && base === 0) { return lastDigit(digits, 1) }
    console.log(digits, base, (base % 100) ** (expo % 400))
    return lastDigit(digits, ((base % 10) ** (expo % 400)) % 100)
  } else {
    return expo % 10
  }
}
