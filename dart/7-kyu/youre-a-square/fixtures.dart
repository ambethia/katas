test('should work for some examples', () {
  expect(isSquare(-1), isFalse);
  expect(isSquare(3), isFalse);
  expect(isSquare(4), isTrue);
  expect(isSquare(25), isTrue);
  expect(isSquare(26), isFalse);
});
