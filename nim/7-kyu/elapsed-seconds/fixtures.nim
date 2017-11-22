import times, unittest

suite "elapsed seconds":
  test "is everything":
    check(42 == elapsedSeconds(fromSeconds(1511322200), fromSeconds(1511322242)))
