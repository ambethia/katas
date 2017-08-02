//Test a square
var poly = [
  [-5, -5], [5, -5],
  [5, 5], [-5, 5]
];
showAndTest(poly, [-6,0], false);
showAndTest(poly, [1,1], true);