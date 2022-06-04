// Search in sorting Matrix

// #1
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  for (let i = 0; i < matrix.length; i++) {
    const j = binarySearch(matrix[i], target)
    if (j !== -1) {
      return [i, j]
    }
  }

  return [-1, -1]
}

function binarySearch (arr, t) {
  let l = 0
  let r = arr.length - 1

  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2)

    if (arr[mid] === t) return mid
    else if (arr[mid] < t) l = mid + 1
    else r = mid - 1
  }

  return -1
}

// #2
function searchInSortedMatrix(matrix, target) {
  // Write your code here.
  let row = 0
  let col = matrix[0].length - 1

  while (row < matrix.length && col >= 0) {
    if (matrix[row][col] > target) {
      col--
    } else if (matrix[row][col] < target) {
      row++
    } else {
      return [row, col]
    }
  }

  return [-1, -1]
}