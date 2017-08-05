// Pre-calculate all possible permutations and visibilities for a span
const sizeOfBlocks = 4
const buildingBase = [...Array(sizeOfBlocks).keys()].map(i => i + 1)
const permutations = Array.from(permute(buildingBase.slice())).sort()
const visibilities = permutations.reduce((map, span) => {
  let visible = 1
  let highest = 0
  for (let i = 0; span[i] < sizeOfBlocks; i++) {
    if (span[i] > highest) {
      highest = span[i]
      visible++
    }
  }
  map[visible] = [...map[visible], span.join()]
  return map
}, Object.assign({}, [permutations.map(s => s.join()), ...[...Array(sizeOfBlocks).keys()].map(() => [])]))

const validate = span => {
  return span.slice().sort().join() === buildingBase.join()
}

const solvePuzzle = clues => {
  let solution = []
  for (let i = 0; i < permutations.length; i++) {
    const h1 = permutations[i]
    if (!visibilities[clues[4]].includes(h1.slice().reverse().join())) continue
    if (!visibilities[clues[15]].includes(h1.join())) continue
    for (let j = 0; j < permutations.length; j++) {
      const h2 = permutations[j]
      if (!visibilities[clues[5]].includes(h2.slice().reverse().join())) continue
      if (!visibilities[clues[14]].includes(h2.join())) continue
      for (let k = 0; k < permutations.length; k++) {
        const h3 = permutations[k]
        if (!visibilities[clues[6]].includes(h3.slice().reverse().join())) continue
        if (!visibilities[clues[13]].includes(h3.join())) continue
        for (let l = 0; l < permutations.length; l++) {
          const h4 = permutations[l]
          if (!visibilities[clues[7]].includes(h4.slice().reverse().join())) continue
          if (!visibilities[clues[12]].includes(h4.join())) continue
          // Horizontal rows are all verified at this point, so check vertical columns
          const [v1, v2, v3, v4] = [...Array(sizeOfBlocks).keys()].map(x => [h1, h2, h3, h4].map(row => row[x]))
          if (
            [v1, v2, v3, v4].every(validate) &&
            visibilities[clues[0]].includes(v1.join()) &&
            visibilities[clues[1]].includes(v2.join()) &&
            visibilities[clues[2]].includes(v3.join()) &&
            visibilities[clues[3]].includes(v4.join()) &&
            visibilities[clues[8]].includes(v4.slice().reverse().join()) &&
            visibilities[clues[9]].includes(v3.slice().reverse().join()) &&
            visibilities[clues[10]].includes(v2.slice().reverse().join()) &&
            visibilities[clues[11]].includes(v1.slice().reverse().join())
          ) {
            return [h1, h2, h3, h4]
          }
        }
      }
    }
  }
  return solution
}

// https://en.wikipedia.org/wiki/Heap%27s_algorithm
function* permute(a, n = a.length) {
  if (n === 1) yield a.slice()
  else {
    for (let i = 0; i < n; i++) {
      yield* permute(a, n - 1)
      const j = n % 2 ? 0 : i
      ;[a[n - 1], a[j]] = [a[j], a[n - 1]]
    }
  }
}
