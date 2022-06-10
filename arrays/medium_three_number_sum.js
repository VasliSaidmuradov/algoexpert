// Three Number Sum

// #1
function threeNumberSum(array, targetSum) {
  // Write your code here.
  array.sort((a, b) => a - b)
  const result = []

  for (let i = 0; i < array.length - 1; i++) {
    let num = array[i]
    const arr = twoSum(array.slice(i+1), targetSum - num)
    for (let a of arr) {
      result.push([num, ...a])
    }
  }

  return result
}
function twoSum (arr, target) {
  let i = 0
  let j = arr.length - 1
  let res = []

  while (i < j) {
    let sum = arr[i] + arr[j]
    if (sum === target) {
      res.push([arr[i], arr[j]])
      i++
      j--
    } else if (sum < target) {
      i++
    } else {
      j--
    }
  }

  return res
}