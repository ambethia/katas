function longestConsec(strarr, k) {
  let longest = ''
  let length = strarr.length
  if (k < length && k >= 0) {
    for (let i = 0; i < length; i++) {
      let current = ''
      for (let j = i; j < i + k && j < length; j++) {
        current += strarr[j]
        if (current.length > longest.length) longest = current
      }
    }
  }
  return longest
}