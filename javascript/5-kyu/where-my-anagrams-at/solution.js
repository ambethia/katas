const anagrams = (word, words) => {
  const sort = w => w.split('').sort().join('')
  const sorted = sort(word)
  return words.filter(w => sort(w) === sorted)
}
