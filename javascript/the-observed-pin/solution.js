const GOOFS = [
  ['0', '8'],
  ['1', '2', '4'],
  ['1', '2', '3'],
  ['2', '3', '6'],
  ['1', '4', '5', '7'],
  ['2', '5', '4', '6', '8'],
  ['3', '5', '6', '9'],
  ['4', '7', '8'],
  ['5', '7', '8', '9', '0'],
  ['6', '8', '9']
]

const getPINs = observed => {
  if (observed.length === 1) {
    return GOOFS[observed]
  } else {
    return observed.split('').map((s, i) => {
      return getPINs(s).map((p) => {
        return getPINs(observed.slice(i + 1)).map(t => p + t)
      }).reduce((r, x) => r.concat(x), [])
    })
    .reduce((r, x) => r.concat(x), [])
    .filter(r => r.length === observed.length)
  }
}
