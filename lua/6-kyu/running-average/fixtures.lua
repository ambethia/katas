local kata = require 'solution'
describe("Solution", function()
  it("Basic tests", function()
    local rAvgSol = kata.runningAverage()
      assert.are.same(rAvgSol(10), 10)
      assert.are.same(rAvgSol(11), 10.5)
      assert.are.same(rAvgSol(12), 11) 
  end)
end)