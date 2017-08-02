func dontGiveMeFive(_ start: Int, _ end: Int) -> Int {
    var count = 0
    counting: for n in start ... end {
        var m = abs(n)
        while m > 0 {
            if (m % 10 == 5) { continue counting }
            m /= 10
        }
        count += 1
    }
   return count
}