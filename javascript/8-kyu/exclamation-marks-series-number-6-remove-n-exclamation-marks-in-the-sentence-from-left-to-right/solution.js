const remove = (s, n) => {
  let l = Math.min(n, s.length)
  while (l > 0) {
    s = s.replace('!', '')
    l--
  }
  return s
}
