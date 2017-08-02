describe("KataTests", function(){
  it("Basic Tests", function(){
    Test.assertSimilar(averages([2, 2, 2, 2, 2]), [2, 2, 2, 2]);
    Test.assertSimilar(averages([2, -2, 2, -2, 2]), [0, 0, 0, 0]);
    Test.assertSimilar(averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]);
  });
});