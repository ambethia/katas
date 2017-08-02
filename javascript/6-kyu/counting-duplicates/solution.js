const duplicateCount = (text) => {
  let counts = {}
  for (let char of text.toLowerCase()) { counts[char] = (counts[char] || 0) + 1 }
  return Object.keys(counts).map(k => counts[k]).filter(n => n > 1).length
}
