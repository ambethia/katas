import XCTest
// XCTest Spec Example:
// TODO: extend with your own tests (TDD), these are basic tests to get you started.

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Example", testExample),
    ]

    func testExample() {
        XCTAssertEqual(diamond(3)!, " *\n***\n *\n")
        XCTAssertEqual(diamond(2), nil)
        XCTAssertEqual(diamond(-3), nil)
        XCTAssertEqual(diamond(0), nil)
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])