Test.describe("findNextSquare", function() {
  Test.it("should return the next square for perfect squares", function() {
    Test.assertEquals(findNextSquare(121), 144, "Wrong output for 121");
    Test.assertEquals(findNextSquare(625), 676, "Wrong output for 625");
    Test.assertEquals(findNextSquare(319225), 320356, "Wrong output for 319225");
    Test.assertEquals(findNextSquare(15241383936), 15241630849, "Wrong output for 15241383936");
  });
  
  Test.it("should return -1 for numbers which aren't perfect squares", function() {
    Test.assertEquals(findNextSquare(155), -1, "Wrong output for 155");
    Test.assertEquals(findNextSquare(342786627), -1, "Wrong output for 342786627");
  });
});
