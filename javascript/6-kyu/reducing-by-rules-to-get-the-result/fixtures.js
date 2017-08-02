describe("Solution", function(){
  it("Example Tests", function(){
    var rules = [ (a, b) => a + b,
                  (a, b) => a - b ];
    Test.assertEquals(reduceByRules([2.0, 2.0, 3.0, 4.0], rules), 5.0);
    
    rules = [ (a, b) => a + b ];
    
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0], rules), 6.0);
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 8.0);
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 10.0);
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 12.0);
    
    rules = [ (a, b) => a + b, (a, b) => a - b, (a, b) => a * b ];
    
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0], rules), 2.0);
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0, 2.0], rules), 4.0);
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0], rules), 6.0);
    Test.assertEquals(reduceByRules([2.0, 2.0, 2.0, 2.0, 2.0, 2.0], rules), 4.0);

    rules = [ (a, b) => Math.min(a, b), (a, b) => Math.max(a, b) ];
    
    Test.assertEquals(reduceByRules([1.3, 2.0, 3.3], rules), 3.3);
    Test.assertEquals(reduceByRules([4.1, 2.2, 2.1, 2.5], rules), 2.2);
    Test.assertEquals(reduceByRules([8.0, 8.1, 4.1, 12.0, 2.0], rules), 8.0);
    Test.assertEquals(reduceByRules([2.9, 2.8, 2.7, 2.6, 2.5, 2.4], rules), 2.4);
  });
});