import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        XCTAssertEqual(8, dontGiveMeFive(1,9));
        XCTAssertEqual(12, dontGiveMeFive(4,17));
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])