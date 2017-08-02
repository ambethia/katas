D = /(-?\d+\.?\d*)/
OP = {
  (/\(#{D}\)/)        => -> (m, n, o) { m },
  (/#{D}(\*|\/)#{D}/) => -> (m, n, o) { m.send(o, n) },
  (/#{D}(\+|\-)#{D}/) => -> (m, n, o) { m.send(o, n) },
  (/--#{D}/)          => -> (m, n, o) { m }
}

def calc e
  e.delete! ' '
  while e !~ /^#{D}$/ do
    OP.each { |ex, fn| break if e.sub! (ex) { fn.call($1.to_f, $3.to_f, $2) } }
  end  
  e.to_f
end