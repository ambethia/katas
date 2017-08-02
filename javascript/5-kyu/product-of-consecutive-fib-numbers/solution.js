const productFib = (prod) => {
  let a = 1, b = 1, c = 1, i = 1, m = {}
  const F = (n) => m[n] || (m[n] = n <= 1 ? n : F(n - 1) + F(n - 2))
  while (c < prod) (a = b) && (b = F(++i)) && (c = a * b)
  return [a, b, c === prod]
}