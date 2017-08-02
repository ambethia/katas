describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals(integerAverage([1, 2, 3]),true)

Test.assertEquals(integerAverage([1, 2, 2]),false)

Test.assertEquals(integerAverage([1, 9, 8, 2]),true)

Test.assertEquals(integerAverage([1, 2, 3, 4, 5, 6]),false)

Test.assertEquals(integerAverage([8, 1, 6, 5]),true)

Test.assertEquals(integerAverage([1, 1, 1, 1, 1, 1]),true)

})})