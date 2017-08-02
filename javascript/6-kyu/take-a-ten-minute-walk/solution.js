const map = { n: [0, 1], e: [1, 0], s: [0, -1], w: [-1, 0] }
const isValidWalk = (walk) => {
  if (walk.length !== 10) return false
  return walk.reduce((loc, dir) => [loc[0]+map[dir][0], loc[1]+map[dir][1]], [0, 0]).every((n) => n === 0)
}
