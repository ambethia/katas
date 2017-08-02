class VigenèreCipher {

  constructor (key, abc) {
    this.key = key
    this.abc = abc
  }

  encode (input) {
    let output = ''
    for (let i = 0; i < input.length; i++) {
      if (this.abc.includes(input[i])) {
        const k = this.abc.indexOf(this.key[i % this.key.length])
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
    for (let i = 0; i < input.length; i++) {
      if (this.abc.includes(input[i])) {
        const k = this.abc.indexOf(this.key[i % this.key.length])
        const l = this.abc.indexOf(input[i])
        output += this.abc[(this.abc.length - (k - l)) % this.abc.length]
      } else {
        output += input[i]
      }
    }
    return output
  }
}
