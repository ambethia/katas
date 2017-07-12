const parseMolecule = (formula, m) => {
  const regex = /([A-Z][a-z]?)(\d*)/g
  const atoms = {}
  let match
  formula = formula.replace(/[[{]/g, '(').replace(/[\]}]/g, ')').replace(regex, (_, a, n) => {
    return a + (n === '' ? '1' : n)
  })
  while ((match = formula.match(/\(([A-Za-z0-9]*)\)(\d)?/))) {
    const foo = match[1].replace(/([A-Za-z]+)(\d+)/g, (a, b, c) => b + c * (match[2] || '1'))
    formula = formula.replace(match[0], foo)
  }
  console.log(formula)
  while ((match = regex.exec(formula)) !== null) {
    atoms[match[1]] = (atoms[match[1]] || 0) + parseInt(match[2])
  }
  return atoms
}

console.log(parseMolecule('H2O'))
console.log(parseMolecule('Mg(OH)2'))
console.log(parseMolecule('K4[ON(SO3)2]2'))
console.log(parseMolecule('(C5H5)1Fe(CO)2CH3'))
console.log(parseMolecule('Pd[P(C6H5)3]4'))
console.log(parseMolecule('As2{Be4C5[BCo3(CO2)3]2}4Cu5'))
console.log(parseMolecule('{[Co(NH3)4(OH)2]3Co}(SO4)3'))
