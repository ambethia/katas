const DIRS = [[1, 0], [0, 1], [-1, 0], [0, -1]]

const getCommands = (field, power) => {
  const size = Math.sqrt(field.length)
  const goal = field.indexOf('T')
  const start = field.indexOf('S')
  const sx = start % size
  const sy = (start - sx) / size
  const gx = goal % size
  const gy = (goal - gx) / size

  // There's _definitely_ not enough power to reach the goal. Exit early.
  if (Math.abs(sx - gx) + Math.abs(sy - gy) > power) return []

  const f = {}
  const g = { [start]: 0 }
  const h = {}
  const p = {}
  // Implement A*
  const open = new PriorityQueue((a, b) => f[a] - f[b], [start])
  const closed = new Set()
  while (open.peek() !== goal && open.length) {
    const current = open.pop()
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
          const inOpen = open.has(ni)
          const inClosed = closed.has(ni)
          if (inOpen && cost < g[ni]) open.delete(ni)
          if (inClosed && cost < g[ni]) closed.delete(ni)
          if (!inOpen && !inClosed) {
            g[ni] = cost
            f[ni] = cost + h[ni]
            p[ni] = current
            open.push(ni)
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

class PriorityQueue {
  constructor(comparator, heap = []) {
    this.heap = heap
    this.comparator = comparator
    if (this.length > 0) {
      for (let i = this.length >> 1; i >= 0; i--) this.sink(i)
    }
  }

  push(item) {
    this.bubble(this.heap.push(item) - 1)
  }

  pop() {
    const top = this.heap[0]
    const end = this.heap.pop()
    if (this.length > 0) {
      this.heap[0] = end
      this.sink(0)
    }
    return top
  }

  peek() {
    return this.heap[0]
  }

  has(item) {
    return this.heap.includes(item)
  }

  get length() {
    return this.heap.length
  }

  delete(item) {
    for (let i = 0; i < this.length; i++) {
      if (this.heap[i] !== item) continue
      const end = this.heap.pop()
      if (i == this.length - 1) break
      this.heap[i] = end
      this.bubble(i)
      this.sink(i)
      break
    }
  }

  bubble(n) {
    const item = this.heap[n]
    while (n > 0) {
      const parent = (n - 1) >> 1
      const current = this.heap[parent]
      if (this.comparator(current, item) <= 0) break
      this.heap[n] = current
      n = parent
    }
    this.heap[n] = item
  }

  sink(n) {
    const half = this.length >> 1
    const item = this.heap[n]
    while (n < half) {
      let left = (n << 1) + 1
      let right = left + 1
      let best = this.heap[left]
      if (right < this.length && this.comparator(best, this.heap[right]) >= 0) {
        left = right
        best = this.heap[right]
      }
      if (this.comparator(item, best) < 0) break
      this.heap[n] = best
      n = left
    }
    this.heap[n] = item
  }
}
