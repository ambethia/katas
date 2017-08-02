describe("Basic Tests", function(){
it("It should works for basic tests.", function(){

Test.assertEquals( htmlEndTagByStartTag("<button type='button' disabled>"),"</button>")

Test.assertEquals( htmlEndTagByStartTag("<i>"),"</i>")

Test.assertEquals( htmlEndTagByStartTag("<div id='my_area' class='data' title='This is a test for title on Div tag'>"),"</div>")

})})