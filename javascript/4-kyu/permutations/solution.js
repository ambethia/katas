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