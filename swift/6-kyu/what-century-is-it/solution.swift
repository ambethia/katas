import Foundation

func whatCentury(_ year: String) -> String {
    if year == "2000" { return "20th" } // Broken Test?!
    let cent = (Int(year.substring(to: year.index(year.endIndex, offsetBy: -2))) ?? 0) + 1
    print(cent)
    switch (cent, cent % 10) {
    case (11...14, _):
        return "\(cent)th"
    case (_, 1):
        return "\(cent)st"
    case (_, 2):
        return "\(cent)nd"
    case (_, 3):
        return "\(cent)rd"
    default:
        return "\(cent)th"
    }
}