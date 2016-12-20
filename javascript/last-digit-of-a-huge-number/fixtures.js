Test.assertSimilar(lastDigit([]         ), 1);
Test.assertSimilar(lastDigit([0,0]      ), 1); // 0 ^ 0
Test.assertSimilar(lastDigit([0,0,0]    ), 0); // 0^(0 ^ 0) = 0^1 = 0
Test.assertSimilar(lastDigit([1,2]      ), 1);
Test.assertSimilar(lastDigit([3,4,5]    ), 1);
Test.assertSimilar(lastDigit([4,3,6]    ), 4);
Test.assertSimilar(lastDigit([7,6,21]   ), 1);
Test.assertSimilar(lastDigit([12,30,21] ), 6);
Test.assertSimilar(lastDigit([937640,767456,981242] ), 0);
Test.assertSimilar(lastDigit([123232,694022,140249] ), 6);
Test.assertSimilar(lastDigit([499942,898102,846073] ), 6);

var r1 = Math.floor(Math.random() * 100);
var r2 = Math.floor(Math.random() * 10);

Test.assertSimilar(lastDigit([]), 1);
Test.assertSimilar(lastDigit([r1]), r1 % 10);
Test.assertSimilar(lastDigit([r1, r2]), Math.pow(r1 % 10, r2) % 10);