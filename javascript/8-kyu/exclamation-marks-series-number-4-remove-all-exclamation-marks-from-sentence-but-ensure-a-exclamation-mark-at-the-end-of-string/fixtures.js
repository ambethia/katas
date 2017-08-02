describe("Basic Tests", function(){
  it("It should works for basic tests", function(){
Test.assertSimilar(remove("Hi!") , "Hi!")
Test.assertSimilar(remove("Hi!!!") ,"Hi!")
Test.assertSimilar(remove("!Hi") , "Hi!")
Test.assertSimilar(remove("!Hi!") , "Hi!")
Test.assertSimilar(remove("Hi! Hi!") , "Hi Hi!")
Test.assertSimilar(remove("Hi") , "Hi!")
})})