// Shorten Path

// #1
function shortenPath(path) {
  const ROOT = ''
  const BACK = '..'
  const SAME = '.'
  const hasRoot = path[0] === '/'
  const stack = new Stack()
  const array = path.split('/').filter(el => el.length && el !== SAME)
  if (hasRoot) stack.push(ROOT)
  for (let elem of array) {
    if (elem === BACK) {
    if (stack.isEmpty() || stack.lastElem() === BACK) stack.push(elem)
      else if (stack.lastElem() !== ROOT) stack.pop()
    } else {
      stack.push(elem)
    }
  }
  if (stack.length() === 1 && stack.firstElem() === ROOT) return '/'
  return stack.stackToArray().join('/')
}

// Just for fun )))
class Stack {
  constructor() {
    this.stack = []
  }

  push(val) {
    this.stack.push(val)
    return val
  }

  pop() {
    return this.stack.pop()
  }

  isEmpty() {
    return this.stack.length === 0
  }

  length () {
    return this.stack.length
  }

  firstElem () {
    return this.stack[0]
  }

  lastElem () {
    return this.stack[this.length() - 1]
  }

  stackToArray () {
    const array = []
    for (let elem of this.stack) {
      array.push(elem)
    }
    return array
  }
}
