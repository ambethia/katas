func diamond(_ size: Int) -> String? {
    if size < 1 || size % 2 == 0 { return nil }
    var lines = [String(repeating: "*", count: size)]
    var n = size - 2
    while n > 0 {
        let line = String(repeating: " ", count: (size - n) / 2) + String(repeating: "*", count: n)
        lines.insert(line, at: 0)
        lines.append(line)
        n -= 2
    }
    return lines.joined(separator: "\n") + "\n"
}