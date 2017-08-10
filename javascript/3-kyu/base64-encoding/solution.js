const CODES = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

String.prototype.toBase64 = function() {
  let out = ''
  for (let i = 0, length = this.length; i < length; i += 3) {
    let [a, b, c] = [...this.slice(i, i + 3)].map(c => c.charCodeAt(0))
    bits = a << 16 | b << 8 | c
    out += CODES[bits >> 18 & 0x3F]
    out += CODES[bits >> 12 & 0x3F]
    out += b ? CODES[bits >> 6 & 0x3F] : '='
    out += c ? CODES[bits & 0x3F] : '='
  }
  return out
}

String.prototype.fromBase64 = function() {
  let out = ''
  for (let i = 0, length = this.length; i < length; i += 4) {
    let [a, b, c, d] = [...this.slice(i, i + 4)].map(c => CODES.indexOf(c))
    bits = a << 18 | b << 12 | c << 6 | d
    out += String.fromCharCode(bits >> 16)
    if (c !== 64) out += String.fromCharCode(bits >> 8 & 0xFF)
    if (d !== 64) out += String.fromCharCode(bits & 0xFF)
  }
  return out
}
