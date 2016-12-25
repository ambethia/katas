// should return true
Test.expect([ 1, 1, 1 ].sameStructureAs([ 2, 2, 2 ]))
Test.expect([ 1, [ 1, 1 ] ].sameStructureAs([ 2, [ 2, 2 ] ]))

// should return false
Test.expect(![ 1, [ 1, 1 ] ].sameStructureAs([ [ 2, 2 ], 2 ]))
Test.expect(![ 1, [ 1, 1 ] ].sameStructureAs([ [ 2 ], 2 ]))

// should return true
Test.expect([ [ [ ], [ ] ] ].sameStructureAs([ [ [ ], [ ] ] ]))

// should return false
Test.expect(![ [ [ ], [ ] ] ].sameStructureAs([ [ 1, 1 ] ]))
