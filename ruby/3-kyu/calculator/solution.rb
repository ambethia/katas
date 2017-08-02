class Calculator
  D = /(-?\d+\.?\d*)/
  OP = {
    (/#{D}(\*|\/)#{D}/) => -> (m, n, o) { m.send(o, n) },
    (/#{D}(\+|\-)#{D}/) => -> (m, n, o) { m.send(o, n) },
    }

  def evaluate string
    e = string.delete ' '
    while e !~ /^#{D}$/ do
      OP.each { |ex, fn| break if e.sub! (ex) { fn.call($1.to_i, $3.to_i, $2) } }
    end  
    e.to_i
  end
end