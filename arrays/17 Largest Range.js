// Largest Range

// #1
function largestRange(array) {
  array = [...new Set(array)].sort((a, b) => a - b)
  let max = 0
  const res = []
  for (let i = 0; i < array.length; i++) {
    let j = i
    while (j < array.length && array[j] + 1 === array[j+1]) {
      j++
    }
    if (j-i+1 > max) {
      max = j-i+1
      res[0] = array[i]
      res[1] = array[j]
    }
    i = j
  }
  return res
}

// #2
function largestRange(array) {
  const set = new Set(array)
  array = [...set]

  let ans = []
  let max = 0
  for (let i = 0; i < array.length; i++) {
    let curr = array[i]
    let count = 0

    while (set.has(curr+1)) {
      count++
      curr = curr + 1
    }

    if (count+1 > max) {
      ans = [array[i], array[i] + count]
      max = count+1
    }
  }
  return ans
}