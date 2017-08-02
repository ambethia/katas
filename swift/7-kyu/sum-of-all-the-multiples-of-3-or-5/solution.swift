func findSum(_ n: Int) -> Int {
  return (1...n).reduce(0) { $1 % 3 == 0 || $1 % 5 == 0 ? $0 + $1 : $0 }
}