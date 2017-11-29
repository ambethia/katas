Test.describe("Your BF Hello World Program", function () {
  Test.it("should return the string \"Hello World!\"", function () {
    Test.assertEquals(runBF(), "Hello World!");
  });
});