Test.describe('Basic tests',_=>{
it ("A resistor under 1000 ohms and with only three bands", function(){
Test.assertEquals(decodeResistorColors("yellow violet black"), "47 ohms, 20%");
});
it ("A resistor between 1000 and 999999 ohms, with a gold fourth band", function(){
Test.assertEquals(decodeResistorColors("yellow violet red gold"), "4.7k ohms, 5%");
});
it ("A resistor of 1000000 ohms or above, with a silver fourth band", function(){
Test.assertEquals(decodeResistorColors("brown black green silver"), "1M ohms, 10%");
});
});
