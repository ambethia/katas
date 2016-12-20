// I feel like this might be the solution:
//   ((this & (2 ** n - 1)) & this)
// but it also requires left padding with zeros,
// which feels wrong, so I might as well just do something
// else. Unsure if there's a binary trick I don't know.
Number.prototype.twos = function (n) {
  // return (this < 0 ? '1' : '0') + Math.abs(this).toString(2).slice(n * -1 + 1)
  const compliment = ((this & (2 ** n - 1)) & this)
  return ('0'.repeat(32) + compliment.toString(2)).slice(-n)
}
