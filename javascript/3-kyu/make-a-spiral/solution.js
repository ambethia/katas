const spiralize = (size) => {
  // Initialize a 2D grid of 0s.
  const spiral = Array(size).fill(null).map(() => Array(size).fill(0))

  // Our current position.
  const pos = { x: 0, y: 0 }

  // Unit vector for the direction we're facing.
  const vec = { x: 1, y: 0 }

  // Move forward one step in the current direction.
  const move = () => { pos.x += vec.x; pos.y += vec.y }

  // Mark the current position as visited.
  const mark = () => { spiral[pos.y][pos.x] = 1 }

  // Change directions.
  const turn = () => {
    let x = vec.y * -1
    vec.y = vec.x
    vec.x = x
  }

  // Is the given position on the game board?
  const cool = (x, y) => {
    return x >= 0 && x < size && y >= 0 && y < size
  }

  // Can we move in the current direction?
  const okay = (h) => {
    // One step foward
    const x1 = pos.x + vec.x
    const y1 = pos.y + vec.y
    // Two steps forward
    const x2 = x1 + vec.x
    const y2 = y1 + vec.y
    // A step left
    const xL = x1 + vec.y * -1
    const yL = y1 + vec.x
    // A step right
    const xR = x1 + vec.y
    const yR = y1 + vec.x * -1

    // If moving forward doesnt put me on the edge...
    if (cool(x2, y2)) {
      // If I move again, will I touch myself in front?
      return spiral[y2][x2] === 0 &&
        // Will I touch myself on the left?
        (cool(xL, yL) && spiral[yL][xL] === 0 || !cool(xL, yL)) &&
        // On the right?
        (cool(xR, yR) && spiral[yR][xR] === 0 || !cool(xR, yR))
    } else {
      // I must already be on the edge, can I go foward still.
      return cool(x1, y1)
    }
  }

  // Move and leave a trail until we can't move anymore.
  mark()
  while (okay()) {
    move()
    mark()
    // If we can't move forward after taking the last step, try turning.
    if (!okay()) { turn() }
  }

  console.log({spiral})
  return spiral
}
