let abc, key
abc = 'abcdefghijklmnopqrstuvwxyz'
key = 'password'
const c = new VigenèreCipher(key, abc)

Test.assertEquals(c.encode('codewars'), 'rovwsoiv')
Test.assertEquals(c.encode('srawedoc'), 'hrsoarff')

Test.assertEquals(c.encode('it\'s a shift cipher!'), 'xt\'k o vwixl qzswej!')

Test.assertEquals(c.decode('rovwsoiv'), 'codewars')
Test.assertEquals(c.decode('hrsoarff'), 'srawedoc')
