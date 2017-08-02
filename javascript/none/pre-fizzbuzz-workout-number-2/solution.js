function preFizz(n) {
  let msg = ''
  if (n % 3 === 0) msg += 'Fizz'
  if (n % 5 === 0) msg += 'Buzz'
  return msg || n
}