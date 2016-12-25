Array.prototype.sameStructureAs = function (other) {
  const stringify = a => `[${a.map(b => Array.isArray(b) ? stringify(b) : '|').join('')}]`
  return stringify(this) === stringify(other)
}
