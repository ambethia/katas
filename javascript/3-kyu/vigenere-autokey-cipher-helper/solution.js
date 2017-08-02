class VigenèreAutokeyCipher {

  constructor (key, abc) {
    this.key = key
    this.abc = abc
  }

  encode (input) {
    let output = ''
    const key = this.key + input.split('').filter(n => this.abc.includes(n)).join('')
    for (let i = 0, j = 0; i < input.length; i++) {
      if (this.abc.includes(input[i])) {
        const k = this.abc.indexOf(key[j++])
        const l = this.abc.indexOf(input[i])
        output += this.abc[(k + l) % this.abc.length]
      } else {
        output += input[i]
      }
    }
    return output
  }

  decode (input) {
    let output = ''
    let key = this.key
    for (let i = 0, j = 0; i < input.length; i++) {
      if (this.abc.includes(input[i])) {
        const k = this.abc.indexOf(key[j++])
        const l = this.abc.indexOf(input[i])
        const m = this.abc[(this.abc.length - (k - l)) % this.abc.length]
        output += m
        key += m
      } else {
        output += input[i]
      }
    }
    return output
  }
}
