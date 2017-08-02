import XCTest
// XCTest Spec Example:
// TODO: replace with your own tests (TDD), these are just how-to examples to get you started

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        XCTAssertEqual(triangular(0), 0)
        XCTAssertEqual(triangular(2), 3)
        XCTAssertEqual(triangular(3), 6)
        XCTAssertEqual(triangular(-10), 0)
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])