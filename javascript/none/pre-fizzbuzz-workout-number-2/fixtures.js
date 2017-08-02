Test.describe('Fixed Tests', _ => {
  Test.it("Test", __ => {
    Test.assertSimilar(preFizz(11), 11, 'Sould return 11');
    Test.assertSimilar(preFizz(33), 'Fizz', 'Should return Fizz');
    Test.assertSimilar(preFizz(50), 'Buzz', 'Should return Buzz');
    Test.assertSimilar(preFizz(120), 'FizzBuzz', 'Should return FizzBuzz');
  });
});