const input = `apples, pears # and bananas
grapes
bananas !apples`

const output = `apples, pears
grapes
bananas`

describe('Solution', () => {
  it('should work', () => {
    Test.assertEquals(solution(input, ['#', '!']), output)
  })
})
