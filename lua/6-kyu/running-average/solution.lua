local kata = {}

function kata.mean(n)
  table.insert(kata.numbers, n)
  local sum = 0
  local count = 0

  for k, v in pairs(kata.numbers) do
    if type(v) == 'number' then
      sum = sum + v
      count = count + 1
    end
  end
  return tonumber(string.format("%.2f", sum / count))
end

function kata.runningAverage()
  kata.numbers = {}
  return kata.mean
end

return kata
