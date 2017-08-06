const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]]

const getCommands = (field, power) => {
  const size = Math.sqrt(field.length)
  const goal = field.indexOf('T')
  const gx = goal % size
  const gy = (goal - gx) / size
  const f = {}
  const g = {}
  const h = {}
  const p = {}
  const nodes = {}
  // Implement A*
  const open = [field.indexOf('S')]
  const closed = new Set()
  while (open[0] !== goal && open.length) {
    const current = open.shift()
    closed.add(current)
    const cx = current % size
    const cy = (current - cx) / size
    // locate neighbors, excluding blocked cells
    for (let [dx, dy] of DIRS) {
      const nx = cx + dx
      const ny = cy + dy
      if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
        const ni = size * ny + nx
        // Compute and cache result of heuristic function (estimated
        // minimum cost) using Manhattan distance from the goal
        if (!h[ni]) h[ni] = Math.abs(nx - gx) + Math.abs(ny - gy)
        if (field[ni] !== '#') {
          // `move` might need to be based on Robby's rules, not Manhattan distance...
          const move = Math.abs(nx - cx) + Math.abs(ny - cy)
          const cost = g[current] + move
          const inOpen = open.includes(ni)
          const inClosed = closed.has(ni)
          if (inOpen && cost < g[ni]) open.splice(open.indexOf(ni), 1)
          if (inClosed && cost < g[ni]) closed.remove(ni)
          if (!inOpen && !inClosed) {
            g[ni] = cost
            f[ni] = cost + h[ni]
            p[ni] = current
            open.push(ni)
            open.sort((a, b) => f[a] - f[b])
          }
        }
      }
    }
  }

  // No path was found, we're done here.
  if (!p[goal]) return []

  // Re-construct path from the goal back to start
  let path = []
  let next = goal
  while (field[next]) {
    path.push(next)
    next = p[next]
  }

  // Build Robby's instruction from the path.
  // Robby starts by facing north
  let dx = 0
  let dy = -1
  let instructions = []
  for (let i = path.length - 1; i > 0; i--) {
    const ax = path[i] % size
    const ay = (path[i] - ax) / size
    const bx = path[i - 1] % size
    const by = (path[i - 1] - bx) / size
    const [rx, ry] = [-dy, dx]
    const [lx, ly] = [dy, -dx]
    if (bx - ax === dx && by - ay === dy) {
      instructions.push('f')
    } else if (bx === lx + ax && by === ly + ay) {
      ;[dx, dy] = [lx, ly]
      instructions.push('l', 'f')
    } else if (bx === rx + ax && by === ry + ay) {
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
