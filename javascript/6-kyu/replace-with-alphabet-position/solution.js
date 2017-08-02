const alphabetPosition = (text) => {
  return Array.from(text)
    .map((c, i) => text.toUpperCase().charCodeAt(i) - 64)
    .filter(c => c > 0 && c <= 26).join(' ')
}