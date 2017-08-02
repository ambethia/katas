func triangular(_ n: Int) -> Int {
  var count: Int = 0
  
  if n > 0 {
    for i in 1...n {
      count += i
    }
  }
  
  return count
}