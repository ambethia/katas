// Pre-calculate all possible permutations and visibilities for a span
const sizeOfBlocks = 6
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

const validate = span => span.every((el, i) => span.indexOf(el) === i)

// TODO: Profile this to see where to optimize first
// TODO: Recursion

const solvePuzzle = clues => {
  let solution = []
  for (let i = 0; i < permutations.length; i++) {
    const h1 = permutations[i]
    if (!visibilities[clues[6]].includes(h1.slice().reverse().join())) continue
    if (!visibilities[clues[23]].includes(h1.join())) continue
    let [v1, v2, v3, v4, v5, v6] = [...Array(sizeOfBlocks).keys()].map(x => [h1].map(row => row[x]))
    if (
      !visibilities[clues[0]].some(span => span.startsWith(v1.join())) ||
      !visibilities[clues[1]].some(span => span.startsWith(v2.join())) ||
      !visibilities[clues[2]].some(span => span.startsWith(v3.join())) ||
      !visibilities[clues[3]].some(span => span.startsWith(v4.join())) ||
      !visibilities[clues[4]].some(span => span.startsWith(v5.join())) ||
      !visibilities[clues[5]].some(span => span.startsWith(v6.join()))
    )
      continue
    for (let j = 0; j < permutations.length; j++) {
      const h2 = permutations[j]
      if (!visibilities[clues[7]].includes(h2.slice().reverse().join())) continue
      if (!visibilities[clues[22]].includes(h2.join())) continue
      ;[v1, v2, v3, v4, v5, v6] = [...Array(sizeOfBlocks).keys()].map(x => [h1, h2].map(row => row[x]))
      if (
        ![v1, v2, v3, v4, v5, v6].every(validate) ||
        !visibilities[clues[0]].some(span => span.startsWith(v1.join())) ||
        !visibilities[clues[1]].some(span => span.startsWith(v2.join())) ||
        !visibilities[clues[2]].some(span => span.startsWith(v3.join())) ||
        !visibilities[clues[3]].some(span => span.startsWith(v4.join())) ||
        !visibilities[clues[4]].some(span => span.startsWith(v5.join())) ||
        !visibilities[clues[5]].some(span => span.startsWith(v6.join()))
      )
        continue
      for (let k = 0; k < permutations.length; k++) {
        const h3 = permutations[k]
        if (!visibilities[clues[8]].includes(h3.slice().reverse().join())) continue
        if (!visibilities[clues[21]].includes(h3.join())) continue
        ;[v1, v2, v3, v4, v5, v6] = [...Array(sizeOfBlocks).keys()].map(x => [h1, h2, h3].map(row => row[x]))
        if (
          ![v1, v2, v3, v4, v5, v6].every(validate) ||
          !visibilities[clues[0]].some(span => span.startsWith(v1.join())) ||
          !visibilities[clues[1]].some(span => span.startsWith(v2.join())) ||
          !visibilities[clues[2]].some(span => span.startsWith(v3.join())) ||
          !visibilities[clues[3]].some(span => span.startsWith(v4.join())) ||
          !visibilities[clues[4]].some(span => span.startsWith(v5.join())) ||
          !visibilities[clues[5]].some(span => span.startsWith(v6.join()))
        )
          continue
        for (let l = 0; l < permutations.length; l++) {
          const h4 = permutations[l]
          if (!visibilities[clues[9]].includes(h4.slice().reverse().join())) continue
          if (!visibilities[clues[20]].includes(h4.join())) continue
          ;[v1, v2, v3, v4, v5, v6] = [...Array(sizeOfBlocks).keys()].map(x => [h1, h2, h3, h4].map(row => row[x]))
          if (
            ![v1, v2, v3, v4, v5, v6].every(validate) ||
            !visibilities[clues[0]].some(span => span.startsWith(v1.join())) ||
            !visibilities[clues[1]].some(span => span.startsWith(v2.join())) ||
            !visibilities[clues[2]].some(span => span.startsWith(v3.join())) ||
            !visibilities[clues[3]].some(span => span.startsWith(v4.join())) ||
            !visibilities[clues[4]].some(span => span.startsWith(v5.join())) ||
            !visibilities[clues[5]].some(span => span.startsWith(v6.join()))
          )
            continue
          for (let m = 0; m < permutations.length; m++) {
            const h5 = permutations[m]
            if (!visibilities[clues[10]].includes(h5.slice().reverse().join())) continue
            if (!visibilities[clues[19]].includes(h5.join())) continue
            ;[v1, v2, v3, v4, v5, v6] = [...Array(sizeOfBlocks).keys()].map(x =>
              [h1, h2, h3, h4, h5].map(row => row[x])
            )
            if (
              ![v1, v2, v3, v4, v5, v6].every(validate) ||
              !visibilities[clues[0]].some(span => span.startsWith(v1.join())) ||
              !visibilities[clues[1]].some(span => span.startsWith(v2.join())) ||
              !visibilities[clues[2]].some(span => span.startsWith(v3.join())) ||
              !visibilities[clues[3]].some(span => span.startsWith(v4.join())) ||
              !visibilities[clues[4]].some(span => span.startsWith(v5.join())) ||
              !visibilities[clues[5]].some(span => span.startsWith(v6.join()))
            )
              continue
            for (let n = 0; n < permutations.length; n++) {
              const h6 = permutations[n]
              if (!visibilities[clues[11]].includes(h6.slice().reverse().join())) continue
              if (!visibilities[clues[18]].includes(h6.join())) continue
              ;[v1, v2, v3, v4, v5, v6] = [...Array(sizeOfBlocks).keys()].map(x =>
                [h1, h2, h3, h4, h5, h6].map(row => row[x])
              )
              if (
                [v1, v2, v3, v4, v5, v6].every(validate) &&
                visibilities[clues[0]].includes(v1.join()) &&
                visibilities[clues[1]].includes(v2.join()) &&
                visibilities[clues[2]].includes(v3.join()) &&
                visibilities[clues[3]].includes(v4.join()) &&
                visibilities[clues[4]].includes(v5.join()) &&
                visibilities[clues[5]].includes(v6.join()) &&
                visibilities[clues[12]].includes(v6.slice().reverse().join()) &&
                visibilities[clues[13]].includes(v5.slice().reverse().join()) &&
                visibilities[clues[14]].includes(v4.slice().reverse().join()) &&
                visibilities[clues[15]].includes(v3.slice().reverse().join()) &&
                visibilities[clues[16]].includes(v2.slice().reverse().join()) &&
                visibilities[clues[17]].includes(v1.slice().reverse().join())
              ) {
                return [h1, h2, h3, h4, h5, h6]
              }
            }
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
