func descendingOrder(of number: Int) -> Int {
  return Int(String(String(number).characters.sorted { $0 > $1 }))!
}