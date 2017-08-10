const smaller = arr => {
  const len = arr.length
  const out = new Array()
  const map = new Map()
  for (let i = len - 1; i >= 0; i--) {
    const n = arr[i]
    out[i] = 0
    map.set(n, map.get(n) + 1 || 1)
    map.forEach((v, k) => {
      if (n > k) out[i] += v
    })
  }
  return out
}
