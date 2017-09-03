function TestDictionary(spec) {
  var matcher = new Dictionary(spec.words)
  spec.expectations.forEach(function(e) {
    Test.expect(
      matcher.findMostSimilar(e.query) == e.nearest,
      'expected findMostSimilar("' + e.query + '") == "' + e.nearest + '"'
    )
  })
}

TestDictionary({
  words: ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'],
  expectations: [
    {
      query: 'strawbery',
      nearest: 'strawberry'
    },
    {
      query: 'berry',
      nearest: 'cherry'
    }
  ]
})

TestDictionary({
  words: Test.randomize([
    'javascript',
    'java',
    'ruby',
    'php',
    'python',
    'coffeescript'
  ]),
  expectations: [
    {
      query: 'heaven',
      nearest: 'java'
    },
    {
      query: 'javascript',
      nearest: 'javascript'
    }
  ]
})

TestDictionary({
  words: [
    'mhmkakybpczjbb',
    'tdvibqccxr',
    'karpscdigdvucfr',
    'ggcvrtxrtnafw',
    'xffrkbdyjveb',
    'jhjyasikwyufr',
    'ucxmdeudiycokfnb',
    'xuwahveztwoor',
    'psaysnhfrrqgxwik',
    'osbednerciaai',
    'jcocndjkyb',
    'riyhpvimgaliuxr',
    'iqkyztorburjgiudi',
    'ljxzjjorwgb',
    'clxmqmiycvidiyr',
    'lnjhrzfrosinb',
    'cwhyyzaorpvtnlfr',
    'fgtrjakzlnaebxr',
    'iroezmixmberfr',
    'eglanhfredaykxr',
    'emvquxrvvlvwvsi',
    'pdyjrkaylryr',
    'sefsknopiffajor',
    'hirldidcuzbyb',
    'ajacizfrgxfumzpvi',
    'npyrgrpbdfqhhncdi',
    'cpnqknjyviusknmte',
    'znystgvifufptxr',
    'hwzsemiqxjwfk',
    'tklquxrnhfiggb',
    'cfvruditwcxr',
    'fxpvfhfrujjaifr',
    'nnsoamjkrzgldi',
    'loogviwcojxgvi',
    'hkldhadcxrjbmkmcdi',
    'qojfrlhufr',
    'qifwqgdsijibor',
    'xikoctmrhpvi',
    'kqijoorfkejdcxr',
    'xrgdgqfrldwk',
    'pxyousorusjxxbt',
    'fxjskybblljqr',
    'dihhiczkdwiofpr',
    'afirbipbmkamjzw',
    'hrwuhmtxxvmygb',
    'zqdrhpviqslik',
    'ppctybxgtleipb',
    'ntwmwwmicnjvhtt',
    'vkholxrvjwisrk',
    'dyhxgviphoptak'
  ],
  expectations: [{ query: 'rkacypviuburk', nearest: 'zqdrhpviqslik' }]
})
