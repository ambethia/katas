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
  while ((match = regex.exec(formula)) !== null) {
    atoms[match[1]] = (atoms[match[1]] || 0) + parseInt(match[2])
  }
  return atoms
}