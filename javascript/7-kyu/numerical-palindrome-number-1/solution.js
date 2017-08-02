const palindrome = n => { 
  if (typeof n !== 'number' || n < 0) return "Not valid" 
  return String(n).split('').reverse().join('') === String(n)
} 