// Next Greater Element

// #1 Time O(N^2) | Space O(N)
function nextGreaterElement(array) {
  const res = Array(array.length).fill(-1)

  for (let i = 0; i < array.length; i++) {
    let k = i
    for (let j = 0; j < array.length; j++) {
      if (k === array.length) {
        k = 0
      }
      if (array[i] < array[k]) {
        res[i] = array[k]
        break
      }

      k++
    }
  }

  return res
}

// #2 Time O(N) | Space O(N)
function nextGreaterElement(array) {
  const n = array.length
  const stack = []
  const res = Array(n).fill(-1)

  for (let i = 2 * n - 1; i >= 0; i--) {
    const currIdx = i % n
    const currElem = array[currIdx]

    while (stack.length && currElem >= stack[stack.length-1]) {
      stack.pop()
    } 

    if (stack.length) res[currIdx] = stack[stack.length-1]
    stack.push(currElem)
  }

  return res
}

// #3
function nextGreaterElement(array) {
  const n = array.length
  const stack = []
  const res = Array(n).fill(-1)

  for (let i = 0; i < 2 * n; i++) {
    const currIdx = i % n
    const currElem = array[currIdx]

    while (stack.length && currElem > array[stack[stack.length-1]]) {
      const top = stack.pop()
      res[top] = currElem
    } 

    stack.push(currIdx)
  }

  return res
}
