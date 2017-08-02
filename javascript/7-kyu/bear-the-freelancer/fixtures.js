Test.describe("Tests", function() {
  Test.it("Should work for the examples", function() {
    Test.assertEquals(bearDollars([[10, 'Close Friend'], [3, 'Acquaintance'], [7, 'Lead from web'], [6, 'Friend'], [2, 'It came from Facebook']]), 1975);
    Test.assertEquals(bearDollars([]), 0);
  });
});