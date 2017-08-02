import XCTest

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        XCTAssertEqual(descendingOrder(of: 0), 0)
        XCTAssertEqual(descendingOrder(of: 15), 51)
        XCTAssertEqual(descendingOrder(of: 123456789), 987654321)
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])