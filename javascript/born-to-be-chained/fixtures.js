const sum = (x, y) => x + y
const double = x => sum(x, x)
const minus = (x, y) => x - y
const addOne = x => sum(x, 1)

let c = chain({sum: sum, minus: minus, double: double, addOne: addOne})

Test.assertEquals(c.sum(4, 5).sum(5).minus(4).sum(7)
  .addOne().double().double().execute(), 72)

let c1 = c.sum(4, 5)
let c2 = c1.sum(5)
Test.assertEquals(c1.execute(), 9)

// var c1 = c.sum(1, 2)
// c1.execute(), 3 // == fns.sum(1, 2) == 3
// c1.double().execute() // == fns.double(fns.sum(1, 2)) == 6
// c1.addOne().execute() // == fns.addOne(fns.sum(1, 2)) == 4
// c1.execute() // == fns.sum(1, 2) == 3
//
// var c2 = c1.sum(5)
// c2.addOne().execute() // == fns.addOne(fns.sum(fns.sum(1, 2) 5)) == 9
// c2.sum(3).execute() // == fns.sum(c1.sum(fns.sum(1, 2), 5), 3) == 11
// c2.execute() // == fns.sum(fns.sum(1, 2), 5) == 8
//
// c1.execute() // == fns.sum(1, 2) == 3
