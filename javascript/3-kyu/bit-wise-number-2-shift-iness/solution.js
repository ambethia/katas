// I feel like this might be the solution, left padding
// with zeros feels wrong, but there doesn't seem to be
// any other way I'm aware of to format with leading 0's.
// Unsure if there's a binary trick I don't know for the
// compliment.
Number.prototype.twos = function (n) {
  const compliment = ((this & (2 ** n - 1)) & this)
  return ('0'.repeat(32) + compliment.toString(2)).slice(-n)
}
