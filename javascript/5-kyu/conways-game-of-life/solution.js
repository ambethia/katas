const nextGen = cells => {
  const neighbors = (x, y) => {
    let count = 0
    for (let u = -1; u <= 1; u++) {
      for (let v = -1; v <= 1; v++) {
        if (u === 0 && v === 0) continue
        if (cells[x] && x + u >= 0 && x + u < cells[x].length && y + v >= 0 && y + v < cells.length) {
          if (cells[y + v][x + u] === 1) count++
        }
      }
    }
    return count
  }
  return cells.map((row, y) => {
    return row.map((col, x) => {
      let n = neighbors(x, y)
      return (col === 1 && n === 2) || n === 3 ? 1 : 0
    })
  })
}
