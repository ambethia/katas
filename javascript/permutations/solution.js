const permutations = (string) => {
  const l = string.length
  if (l > 1) {
    const letters = string.split('').sort()
    // Cheating for uniqueness by using Set
    const list = new Set()
    // Should only need to do this l! not l^2 times,
    // but cheating by making sure indexes are unique
    for (let i = 0; i < l ** l; i++) {
      let ix = i.toString(l)
      ix = ('0'.repeat(Math.max(0, l - ix.length)) + ix).split('') // left pad
      if (ix.every((v, i) => ix.indexOf(v) === i)) {
        list.add(ix.map(v => letters[parseInt(v, l)]).join(''))
      }
    }
    return [...list]
  } else {
    return [string]
  }
}

// a a a    0 0 0    0
// a a b    0 0 1    1
// a a c    0 0 2    2
// a b a    0 1 0    3
// a b b    0 1 1    4
// a b c    0 1 2    5
// a c a    0 2 0    6
// a c b    0 2 1    7
// a c c    0 2 2    8
// b a a    1 0 0    9
// b a b    1 0 1   10
// b a c    1 0 2   11
// b b a    0 1 0   12
// b b b    . . .
// b b c
// b c a
// b c b
// b c c
// c a a
// c a b
// c a c
// c b a
// c b b
// c b c
// c c a
// c c b
// c c c
