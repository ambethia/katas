const R = c => ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white'].indexOf(c)
const T = c => ({ gold: 5, silver: 10, undefined: 20 })[c]

const decodeResistorColors = bands => {
  const [tens, ones, expo, tolerance] = bands.split(' ')
  let ohms = (R(tens) * 10 + R(ones)) * Math.pow(10, R(expo))
  if (ohms >= 1e6) ohms = ohms / 1e6 + 'M'
  else if (ohms >= 1e3) ohms = ohms / 1e3 + 'k'
  return `${ohms} ohms, ${T(tolerance)}%`
}