const validBraces = (braces) => {
  const map = { '(': ')', '[': ']', '{': '}', ')': '(', ']': '[', '}': '{' }
  return braces.split('').map(l => map[l]).reverse().join('') === braces
}
