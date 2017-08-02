const fizzBuzzCuckooClock = (time) => {
  let [hours, minutes] = time.split(':')
  switch (minutes) {
  case '30':
    return 'Cuckoo'
  case '00':
    switch(hours) {
      case '00':
      case '12':
        return 'Cuckoo '.repeat(12).trim()
      default:
        return 'Cuckoo '.repeat(hours % 12).trim()
    }
  default:
    if (minutes % 3 === 0 && minutes % 5 === 0) {
      return "Fizz Buzz"
    } else if (minutes % 3 === 0) {
      return "Fizz"
    } else if (minutes % 5 === 0) {
      return "Buzz"
    } else {
      return "tick"
    }
  }
}
