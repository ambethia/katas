const spiralize = (size) => {
  const spiral = Array(size).fill(null).map(() => Array(size).fill(0))
  const pos = { x: 0, y: 0 }
  const vec = { x: 1, y: 0 }

  const move = () => { pos.x += vec.x; pos.y += vec.y }

  const mark = () => { spiral[pos.y][pos.x] = 1 }

  const turn = () => {
    let x = vec.y * -1
    vec.y = vec.x
    vec.x = x
  }

  const okay = (h) => {
    const x1 = pos.x + vec.x
    const y1 = pos.y + vec.y
    const x2 = x1 + vec.x
    const y2 = y1 + vec.y

    console.log({spiral})
    if (x2 >= 0 && x2 < size && y2 >= 0 && y2 < size) {
      return spiral[y2][x2] === 0
    } else {
      return x1 >= 0 && x1 < size && y1 >= 0 && y1 < size
    }
  }

  mark()
  while (okay()) {
    move()
    mark()
    if (!okay()) { turn() }
  }

  console.log({spiral})
  return spiral
}

spiralize(6)
