import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        XCTAssertEqual("20th", whatCentury("1999"), "With input '1999' solution produced wrong output.")
        XCTAssertEqual("21st", whatCentury("2011"), "With input '2011' solution produced wrong output.")
        XCTAssertEqual("22nd", whatCentury("2154"), "With input '2154' solution produced wrong output.")
        XCTAssertEqual("23rd", whatCentury("2259"), "With input '2259' solution produced wrong output.")
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])