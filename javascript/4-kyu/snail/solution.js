const snail = (array) => {
  const result = []
  const pos = { x: 0, y: 0 }
  const vec = { x: 1, y: 0 }
  const move = () => { pos.x += vec.x; pos.y += vec.y }
  const turn = () => {
    let x = vec.y * -1
    vec.y = vec.x
    vec.x = x
  }
  const save = () => {
    if (array[pos.y][pos.x]) result.push(array[pos.y][pos.x])
    array[pos.y][pos.x] = null
  }
  const okay = () => {
    const x = pos.x + vec.x
    const y = pos.y + vec.y
    return x >= 0 && x < array.length && y >= 0 && y < array.length && array[y][x]
  }

  save()
  while (okay()) {
    move()
    save()
    if (!okay()) { turn() }
  }

  return result
}
