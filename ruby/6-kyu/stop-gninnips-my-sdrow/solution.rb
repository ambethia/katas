def spinWords(string)
  string.split(' ').map { |w| w.length > 4 ? w.reverse : w }.join(' ')
end