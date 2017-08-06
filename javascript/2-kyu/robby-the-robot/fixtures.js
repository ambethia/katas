// test fixtures from description
Test.expect(getCommands('T.S.', 10).join('') == 'f')
Test.expect(getCommands('S.......T', 10).join('') == 'rffrff')
Test.expect(getCommands('S.......T', 5).join('') == '')
Test.expect(getCommands('S#.##...T', 20).join('') == '')
