class List {}

class EmptyList extends List {
  toString() {
    return '()'
  }

  isEmpty() {
    return true
  }

  length() {
    return 0
  }

  push(x) {
    return new ListNode(x, this)
  }

  remove(x) {
    return this
  }

  append(xs) {
    return xs
  }
}

class ListNode extends List {
  constructor(value, next) {
    super()
    this.value = value
    this.next = next
  }

  toString() {
    let values = []
    let node = this
    do {
      values.push(node.value)
    } while ((node = node.next) && node.value)
    return `(${values.join(' ')})`
  }

  isEmpty() {
    return false
  }

  length() {
    return this.tail().length() + 1
  }

  head() {
    return this.value
  }

  tail() {
    return this.next
  }

  push(x) {
    return new ListNode(x, this)
  }

  remove(x) {
    const rest = this.tail().remove(x)
    if (this.head() !== x) {
      if (this.tail() === rest) {
        return this
      } else {
        return new ListNode(this.head(), rest)
      }
    } else {
      return rest
    }
  }

  append(xs) {
    return new ListNode(this.head(), this.tail().append(xs))
  }
}
