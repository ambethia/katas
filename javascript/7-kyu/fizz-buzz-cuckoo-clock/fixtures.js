Test.describe('Basic times tests',_=>{
it ("13:34", function(){
Test.assertEquals(fizzBuzzCuckooClock("13:34"), "tick");
});
it ("21:00", function(){
Test.assertEquals(fizzBuzzCuckooClock("21:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
});
it ("11:15", function(){
Test.assertEquals(fizzBuzzCuckooClock("11:15"), "Fizz Buzz");
});
it ("03:03", function(){
Test.assertEquals(fizzBuzzCuckooClock("03:03"), "Fizz");
});
it ("14:30", function(){
Test.assertEquals(fizzBuzzCuckooClock("14:30"), "Cuckoo");
});
it ("08:55", function(){
Test.assertEquals(fizzBuzzCuckooClock("08:55"), "Buzz");
});
it ("00:00", function(){
Test.assertEquals(fizzBuzzCuckooClock("00:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
});
it ("12:00", function(){
Test.assertEquals(fizzBuzzCuckooClock("12:00"), "Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo Cuckoo");
});
})
