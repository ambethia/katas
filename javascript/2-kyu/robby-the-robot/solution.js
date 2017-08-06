const getCommands = (field, power) => {
  const size = Math.sqrt(field.length)
  const goal = field.indexOf('T')
  const [gx, gy] = [goal % size, (goal - goal % size) / size]
  const nodes = {}

  // Initialize the node graph
  for (let index in field) {
    const x = index % size
    const y = (index - x) / size
    const node = { x, y, neighbors: [], g: 0 }
    // locate neighbors, excluding blocked cells
    for (let [dx, dy] of [[1, 0], [0, 1], [-1, 0], [0, -1]]) {
      const [nx, ny] = [x + dx, y + dy]
      if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
        const ni = size * ny + nx
        if (field[ni] !== '#') node.neighbors.push(ni)
      }
    }
    // Pre-calculate the heuristics (estimated minimum cost) using
    // Manhattan distance from the goal
    const [dx, dy] = [x - gx, y - gy].map(Math.abs)
    node.h = dx + dy
    // Finally, save our node
    nodes[index] = node
  }

  // Implement A*
  const open = [field.indexOf('S')]
  const closed = []
  while (open[0] !== goal && open.length) {
    const current = open.shift()
    closed.push(current)
    const [cx, cy] = [nodes[current].x, nodes[current].y]
    for (let n of nodes[current].neighbors) {
      const [nx, ny] = [nodes[n].x, nodes[n].y]
      // `move` might need to be based on Robby's rules, not Manhattan distance...
      const move = [nx - cx, ny - cy].map(Math.abs).reduce((x, y) => x + y)
      const cost = nodes[current].g + move
      if (open.includes(n) && cost < nodes[n].g) open.splice(open.indexOf(n), 1)
      if (closed.includes(n) && cost < nodes[n].g) closed.splice(open.indexOf(n), 1)
      if (!open.includes(n) && !closed.includes(n)) {
        nodes[n].g = cost
        nodes[n].f = nodes[n].g + nodes[n].h
        nodes[n].parent = current
        open.push(n)
        open.sort((a, b) => nodes[a].f - nodes[b].f)
      }
    }
  }

  // No path was found, we're done here.
  if (!nodes[goal].parent) return []

  // Re-construct path from the goal back to start
  let path = []
  let next = goal
  while (nodes[next]) {
    path.push(next)
    next = nodes[next].parent
  }
  path.reverse()

  // Build Robby's instruction from the path.
  // Robby starts by facing north
  let [dx, dy] = [0, -1]
  let instructions = []
  for (let i = 0; i < path.length - 1; i++) {
    const [a, b] = path.slice(i, i + 2).map(n => nodes[n])
    const [fx, fy] = [b.x - a.x, b.y - a.y]
    const [rx, ry] = [-dy, dx]
    const [lx, ly] = [dy, -dx]
    if (fx === dx && fy === dy) {
      instructions.push('f')
    } else if (b.x === lx + a.x && b.y === ly + a.y) {
      ;[dx, dy] = [lx, ly]
      instructions.push('l', 'f')
    } else if (b.x === rx + a.x && b.y === ry + a.y) {
      ;[dx, dy] = [rx, ry]
      instructions.push('r', 'f')
    }
  }
  // Not enough power :(
  if (instructions.length > power) return []
  return instructions
}

// r: (-y, x) - counter-clockwise
// l: (y, -x) - clockwise

// N:  0, -1
// r>  1,  0 (E)
// l> -1,  0 (W)

// E:  1,  0
// r>  0,  1 (S)
// l>  0, -1 (N)

// S:  0,  1
// r> -1,  0 (W)
// l>  1,  0 (E)

// W: -1,  0
// r>  0, -1 (N)
// l>  0,  1 (S)

// Movement cost:
//   1
// 2 0 2
//   3
