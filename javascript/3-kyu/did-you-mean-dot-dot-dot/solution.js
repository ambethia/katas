class Dictionary {
  constructor(words) {
    this.words = words
  }

  // https://en.wikipedia.org/wiki/Levenshtein_distance#Iterative_with_two_matrix_rows
  static distance(a, b) {
    // t should be the longer word
    const s = a.length <= b.length ? a : b
    const t = a.length <= b.length ? b : a
    let v0 = new Array(t.length + 1)
    let v1 = new Array(t.length + 1)
    for (let i = 0; i <= t.length; i++) v0[i] = i
    for (let i = 0; i < s.length; i++) {
      v1[0] = i + 1
      for (let j = 0; j < t.length; j++) {
        const cost = s[i] === t[j] ? 0 : 1
        v1[j + 1] = Math.min(v1[j] + 1, v0[j + 1], v0[j] + cost)
      }
      const vT = v0
      v0 = v1
      v1 = vT
    }

    return v0[t.length]
  }

  findMostSimilar(term) {
    const distances = this.words.map(word => Dictionary.distance(word, term))
    return this.words[distances.indexOf(Math.min(...distances))]
  }
}
