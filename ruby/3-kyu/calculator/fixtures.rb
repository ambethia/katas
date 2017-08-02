# TODO: Replace examples and use TDD development by writing your own tests
# These are some of the methods available:
#   Test.expect(boolean, [optional] message)
#   Test.assert_equals(actual, expected, [optional] message)
#   Test.assert_not_equals(actual, expected, [optional] message)

describe "Solution" do
  it "should test for something" do
    Test.assert_equals(Calculator.new.evaluate("2 / 2 + 3 * 4 - 6"), 7)
  end
end