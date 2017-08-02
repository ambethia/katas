const validBraces = (braces) => {
  const map = { '(': ')', '[': ']', '{': '}', ')': '(', ']': '[', '}': '{' }
  for (let i = 0; i < braces.length / 2; i++) { braces = braces.replace(/(\(\)|{}|\[\])/g, '') }  
  return braces.split('').map(l => map[l]).reverse().join('') === braces
}
