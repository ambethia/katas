const toWeirdCase = (phrase) => {
  return phrase.split(' ').map((word) => {
    return Array.from(word).map((c, i) => {
      return i % 2 === 0 ? c.toUpperCase() : c.toLowerCase()
    }).join('')
  }).join(' ')
}