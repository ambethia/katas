const htmlize = cells => {
  cells.forEach(row => console.log(row))
}

Test.describe('Glider \n' + htmlize([[1, 0, 0], [0, 1, 1], [1, 1, 0]]), function() {
  var gliders = [[[1, 0, 0], [0, 1, 1], [1, 1, 0]], [[0, 1, 0], [0, 0, 1], [1, 1, 1]]]

  it('Glider 1', function() {
    var resp = getGeneration(gliders[0], 1)
    Test.expect(
      Test.inspect(resp) == Test.inspect(gliders[1]),
      'Got \n' + htmlize(resp) + '\n instead of \n' + htmlize(gliders[1])
    )
  })
})
