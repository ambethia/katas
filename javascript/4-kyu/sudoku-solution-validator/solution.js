const validate = (cells) => {
  return cells.filter((cell, i) => {
    const isUnique = cells.indexOf(cell) === i
    const inRange = cell > 0 && cell < 10
    return isUnique && inRange
  }).length === 9
}

const validSolution = (board) => {
  const rows = board.every(validate)
  const cols = board[0].map((x, i) => board.map(x => x[i])).every(validate)
  const grid = board[0].map((_, i) => board.map((_, j) => {
    const x = j % 3 + ((i % 3) * 3)
    const y = ((j - (j % 3)) / 3) + (i - (i % 3))
    return board[y][x]
  })).every(validate)
  return rows && cols && grid
}
