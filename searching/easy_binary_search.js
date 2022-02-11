// #1
// Iteratively
function binarySearch(array, target) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2)

    if (array[mid] === target) return mid
    else if (target < array[mid]) end = mid - 1
    else start = mid + 1
  }

  return -1
}

// #2
// Recursively
function binarySearch(array, target) {
  const helper = (array, target, start, end) => {
    if (start > end) return -1
    const mid = start + Math.floor((end - start) / 2)

    if (array[mid] === target) return mid
    else if (array[mid] > target) return helper(array, target, start, mid - 1)
    else return helper(array, target, mid + 1, end)
  }

  return helper(array, target, 0, array.length - 1)
}