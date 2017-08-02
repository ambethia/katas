const sum_pairs = (ints, s) => {
  let pairs = [], pair, p, q
  for (let i = 0; i < ints.length - 1; i++) {
    if (ints[i] === p) continue
    for (let j = i + 1; j < ints.length; j++) {
      if (ints[j] === q) continue
      if (ints[i] + ints[j] === s) {
        pairs.push([i, j])
      }
      q = ints[j]
    }
    q = null
    p = ints[i]
  }
  pair = pairs.sort((a, b) => Math.max(...a) - Math.max(...b))[0]
  if (pair) { return [ints[pair[0]], ints[pair[1]]] }
}