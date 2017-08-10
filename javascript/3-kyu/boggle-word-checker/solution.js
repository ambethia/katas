const DIRS = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]]
const checkWord = (board, word) => {
  const size = board.length
  const check = (x, y, rem, path = []) => {
    const id = y * size + x
    if (path.includes(id)) return false
    if (rem[0] === board[y][x]) {
      if (rem.length === 1) return true
      for (let [dx, dy] of DIRS) {
        const [nx, ny] = [dx + x, dy + y]
        if (nx >= 0 && nx < size && ny >= 0 && ny < size) {
          if (check(nx, ny, rem.slice(1), [...path, id])) {
            return true
          }
        }
      }
    }
    return false
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      if (check(x, y, word)) {
        return true
      }
    }
  }
  return false
}
