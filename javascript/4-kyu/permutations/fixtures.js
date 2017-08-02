describe('permutations', function() {
  it('examples from description', function() {
    Test.assertSimilar(permutations('a'), ['a']);
    Test.assertSimilar(permutations('ab').sort(), ['ab', 'ba'].sort());
    Test.assertSimilar(permutations('aabb').sort(), ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'].sort());
  });
});