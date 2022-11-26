// Max Subset Sum No Adjacent

// Time O(n) | Space O(1)

// #1
function maxSubsetSumNoAdjacent(array) {
  let prev = 0
  let prevPrev = 0

  for (let i = 0; i < array.length; i++) {
    const curr = array[i]
    const temp = prev
    prev = Math.max(prev, prevPrev + curr)
    prevPrev = temp
  }

  return prev
}

// #2
function maxSubsetSumNoAdjacent(array) {
  if (!array.length) return 0
  if (array.length === 1) return array[0]
  let second = array[0]
  let first = Math.max(second, array[1])

  for (let i = 2; i < array.length; i++) {
    const curr = Math.max(first, second + array[i])
    second = first
    first = curr
  }

  return first
}