const decompose (n) => {
  let a = []
  let b = []
  for (let i = n; i * i > 0; i--) { a.push(i) }
  const thing = (m, c) => {
    if (m < 1) { console.log('m', m) }
    for (let j = 0; j < c.length; j++) {
      if (c[j] <= m) {
        b.push(c[j])
        thing(m - c[j], c.slice(j))
        b.pop()
      }
    }
    console.log(c)
  }
  thing(a)

  return a.length > 0 ? a : null
}
