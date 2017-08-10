Test.describe('Example list tests', function() {
  var mt, l1, l2, l3, l4

  Test.before(function() {
    mt = new EmptyList()
    l1 = mt.push('c').push('b').push('a')
    l2 = l1.append(l1)
    l3 = l1.remove('b')
    l4 = l2.remove('b')
  })

  Test.it('Simple checks', function() {
    Test.expect(mt.isEmpty(), 'Empty List is empty')
    Test.expect(!l1.isEmpty(), 'Non-empty list is not empty')
    Test.expect(mt.toString() === '()', '()')
    Test.expect(l3.toString() === '(a c)', '(a c)')
    Test.expect(mt.length() === 0, 'Empty list has length zero')
    Test.expect(l1.length() === 3, '(a b c) length 3')
  })

  Test.it('Shared structure', function() {
    Test.expect(l2.tail().tail().tail() === l1, '(a b c a b c) shares')
    Test.expect(l2 !== l1, "(a b c a b c) doesn't share too much")
    Test.expect(l3.tail() === l1.tail().tail(), '(a b c) remove b shares c')
  })
})
