def seq_to_one(n)
  n > 1 ? (1..n).to_a.reverse : (n..1).to_a
end
