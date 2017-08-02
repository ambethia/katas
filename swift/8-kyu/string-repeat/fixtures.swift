import XCTest
// XCTest Spec Example:
// TODO: replace with your own tests (TDD), these are just how-to examples to get you started

class SolutionTest: XCTestCase {
    static var allTests = [
        ("Test Repeat", testRepeat),
    ]

    func testRepeat() {
        XCTAssertEqual(repeatStr(5, "Hello"), "HelloHelloHelloHelloHello")
    }
}

XCTMain([
    testCase(SolutionTest.allTests)
])