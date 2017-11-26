pigIt = (str) ->
  str.split(' ').map (word) ->
    if /^[a-zA-Z]+$/.test(word) then word.slice(1) + word[0] + 'ay' else word
  .join(' ')
