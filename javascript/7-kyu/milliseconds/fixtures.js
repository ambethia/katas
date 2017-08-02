Test.assertEquals(toString(1), "0:00");
Test.assertEquals(toString(3000), "0:03");
Test.assertEquals(toString(180000), "3:00");
Test.assertEquals(toString(3600000), "1:00:00");
Test.assertEquals(toString(3780000), "1:03:00");
Test.assertEquals(toString(3783000), "1:03:03");
Test.assertEquals(toString(10800000), "3:00:00");
Test.assertEquals(toString(43200999), "12:00:00");