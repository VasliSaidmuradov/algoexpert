// Sorted Squared Array

// #1
// O(nlogn) time | O(n) space
function sortedSquaredArray(array) {
  return array.map(el => el ** 2).sort((a, b) => a - b);
}

// #2
// O(n) time | O(n) space
function sortedSquaredArray(array) {
  const res = Array.from({ length: array.length }, () => 0)
  let left = 0
  let right = array.length - 1
  let i = array.length - 1

  while (i >= 0) {
    let leftNum = array[left] ** 2
    let rightNum = array[right] ** 2

    if (leftNum > rightNum) {
      res[i] = leftNum
      left++
    } else {
      res[i] = rightNum
      right--
    }

    i--
  }

  return res
}

// #3
// O(n) time | O(n) space
function sortedSquaredArray(array) {
  const res = Array.from({ length: array.length }, () => 0)
  let left = 0
  let right = array.length - 1

  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[left]) > Math.abs(array[right])) {
      res[i] = array[left] ** 2
      left++
    } else {
      res[i] = array[right] ** 2
      right--
    }
  }

  return res
}