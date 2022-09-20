// First Duplicate Value

// #1 Time O(n) | Space O(n)
function firstDuplicateValue(array) {
  const hashSet = new Set()

  for (let num of array) {
    if (hashSet.has(num)) {
      return num
    }

    hashSet.add(num)
  }

  return -1
}

// #2
function firstDuplicateValue(array) {
// Write your code here.
  for (let val of array) {
    const absVal = Math.abs(val)
    const idx = absVal-1
    
    if (array[idx] < 0) {
      return absVal
    }
    
    array[idx] *= -1
  }

  return -1
}