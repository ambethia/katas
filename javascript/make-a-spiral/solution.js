const spiralize = (size) => {
  const spiral = Array(size).fill(null).map(() => Array(size).fill(0))
  // const center = Math.floor(size)
  let pos = { x: 0, y: 0 }
  let vec = { x: 1, y: 0 }
  const move = () => { pos.x += vec.x; pos.y += vec.y }
  const mark = () => { spiral[pos.y][pos.x] = 1 }
  const turn = () => {
    console.log('TURNING')
    let x = vec.y * -1
    vec.y = vec.x
    vec.x = x
  }
  const okay = () => {
    const x1 = pos.x + vec.x
    const y1 = pos.y + vec.y
    const x2 = x1 + vec.x
    const y2 = y1 + vec.y
    const inBounds = x1 >= 0 && x1 < size && y1 >= 0 && y1 < size
    const inCorner = (pos.x === 0 && (pos.y === 0 || pos.y === size)) || (pos.y === 0 && (pos.x === 0 || pos.x === size))
    const noTouchy = (x2 >= 0 && x2 < size && y2 >= 0 && y2 < size) && spiral[y1][x1] === 0
    console.log({pos, x1, y1, x2, y2, spiral, vec, inBounds, noTouchy, inCorner})
    return inBounds && !inCorner || noTouchy
  }

  let i = 0
  do {
    mark()
    move()
    if (!okay()) { turn() }
  } while (okay() && i++ < 16)
  return spiral
}

//  1  0
//  0 -1
// -1  0
//  0  1
//  1  0
//  0 -1
// -1  0
