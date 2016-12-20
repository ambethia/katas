describe("Basic Tests", function(){
  it("It should works for basic tests", function(){

Test.assertSimilar(remove("Hi!",1) , "Hi")
Test.assertSimilar(remove("Hi!",100) , "Hi")
Test.assertSimilar(remove("Hi!!!",1) , "Hi!!")
Test.assertSimilar(remove("Hi!!!",100) , "Hi")
Test.assertSimilar(remove("!Hi",1) , "Hi")
Test.assertSimilar(remove("!Hi!",1) , "Hi!")
Test.assertSimilar(remove("!Hi!",100) , "Hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",1) , "!!Hi !!hi!!! !hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",3) , "Hi !!hi!!! !hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",5) , "Hi hi!!! !hi")
Test.assertSimilar(remove("!!!Hi !!hi!!! !hi",100) , "Hi hi hi")
})})