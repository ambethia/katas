Test.describe('Fixed Tests', _ => {
  Test.it("Test", __ => {
    Test.assertSimilar(preFizz(1), [1], `Array should be from 1 to 1`);
    Test.assertSimilar(preFizz(2), [1,2], `Array should be from 1 to 2`);
    Test.assertSimilar(preFizz(3), [1,2,3], `Array should be from 1 to 3`);
    Test.assertSimilar(preFizz(4), [1,2,3,4], `Array should be from 1 to 4`);
    Test.assertSimilar(preFizz(5), [1,2,3,4,5], `Array should be from 1 to 5`);
  });
});