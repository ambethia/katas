const anagrams = (word, words) => {
  const sort = w => w.split('').sort().join('')
  const sorted = sort(word)
  return words.filter(w => sort(w) === sorted)
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])) // => ['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])) // => ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy', 'lacer'])) // => []
