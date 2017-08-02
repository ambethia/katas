function lineupStudents(students) {
  return students
    .trim()
    .split(' ')
    .sort((a, b) => {
      if (a.length !== b.length) {
        return b.length - a.length
      } else {
        return b.localeCompare(a)
      }
    }
  )
}