// Balanced Brackets

// #1
function balancedBrackets(str) {
  const stack = []
  const B = {
    ')': '(',
    '}': '{',
    ']': '['
  }

  for (let i = 0; i < str.length; i++) {
    const codeIdx = str[i].charCodeAt()
    if (codeIdx !== 40 && codeIdx !== 41 && codeIdx !== 91 && codeIdx !== 93 && codeIdx !== 123 && codeIdx !== 125) {
      continue
    }

    if (!stack.length) {
      stack.push(str[i])
      continue
    } else if (!stack.length && B.hasOwnProperty(str[i])) {
      return false
    }

    if (stack.length) {
      const last = stack[stack.length - 1]
      if (last !== B[str[i]]) {
        if (B.hasOwnProperty(str[i])) {
          return false
        } else {
          stack.push(str[i])
        }
      } else {
        stack.pop()
      }
    }
  }

  return !stack.length
}

// #2
function balancedBrackets(str) {
  const opening = '({['
  const closing = ')}]'
  const matching = {
    ')': '(',
    '}': '{',
    ']': '['
  }
  const stack = []

  for (let ch of str) {
    if (opening.includes(ch)) {
      stack.push(ch)
    } else if (closing.includes(ch)) {
      if (!stack.length) {
        return false
      } 
      if (stack[stack.length - 1] === matching[ch]) {
        stack.pop()
      } else {
        return false
      }
    }
  }

  return !stack.length
}