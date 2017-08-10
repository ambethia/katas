Test.assertEquals('Man'.toBase64(), 'TWFu')
Test.assertEquals('Ma'.toBase64(), 'TWE=')
Test.assertEquals('M'.toBase64(), 'TQ==')
Test.assertEquals('leasure.'.toBase64(), 'bGVhc3VyZS4=')
Test.assertEquals('easure.'.toBase64(), 'ZWFzdXJlLg==')
Test.assertEquals('this is a string!!'.toBase64(), 'dGhpcyBpcyBhIHN0cmluZyEh')
Test.assertEquals('TWFu'.fromBase64(), 'Man')
Test.assertEquals('TWE='.fromBase64(), 'Ma')
Test.assertEquals('TQ=='.fromBase64(), 'M')
Test.assertEquals('dGhpcyBpcyBhIHN0cmluZyEh'.fromBase64(), 'this is a string!!')

const leviathanASCII = `
  Man is distinguished, not only by his reason, but by this singular passion from
  other animals, which is a lust of the mind, that by a perseverance of delight
  in the continued and indefatigable generation of knowledge, exceeds the short
  vehemence of any carnal pleasure.
`.trim().split('\n  ').join(' ')

const leviathanBASE64 = `
  TWFuIGlzIGRpc3Rpbmd1aXNoZWQsIG5vdCBvbmx5IGJ5IGhpcyByZWFzb24sIGJ1dCBieSB0aGlz
  IHNpbmd1bGFyIHBhc3Npb24gZnJvbSBvdGhlciBhbmltYWxzLCB3aGljaCBpcyBhIGx1c3Qgb2Yg
  dGhlIG1pbmQsIHRoYXQgYnkgYSBwZXJzZXZlcmFuY2Ugb2YgZGVsaWdodCBpbiB0aGUgY29udGlu
  dWVkIGFuZCBpbmRlZmF0aWdhYmxlIGdlbmVyYXRpb24gb2Yga25vd2xlZGdlLCBleGNlZWRzIHRo
  ZSBzaG9ydCB2ZWhlbWVuY2Ugb2YgYW55IGNhcm5hbCBwbGVhc3VyZS4=
`.replace(/\s/g, '')

Test.assertEquals(leviathanBASE64.fromBase64(), leviathanASCII)
Test.assertEquals(leviathanASCII.toBase64(), leviathanBASE64)
