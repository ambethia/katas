import times

proc elapsedSeconds*(startTime: Time, endTime: Time): int64 =
  endTime - startTime
