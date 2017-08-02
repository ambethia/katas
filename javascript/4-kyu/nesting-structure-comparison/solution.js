Array.prototype.sameStructureAs = function (other) {
  const stringify = a => `[${a.map(b => Array.isArray(b) ? stringify(b) : '|').join('')}]`
  return Array.isArray(other) ? stringify(this) === stringify(other) : false
}
