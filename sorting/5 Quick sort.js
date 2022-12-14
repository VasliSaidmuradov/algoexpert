// Quick Sort

// #1
function quickSort(array) {
  helper(array, 0, array.length - 1)
  return array
}

const helper = (arr, l, r) => {
  if (l < r) {
    const pivotIdx = l
    let leftIdx = l + 1
    let rightIdx = r
    while (rightIdx>= leftIdx) {
      if (arr[leftIdx] > arr[pivotIdx] && arr[rightIdx] < arr[pivotIdx]) {
        swap(leftIdx, rightIdx, arr)
      }
      if (arr[leftIdx] <= arr[pivotIdx]) leftIdx++
      if (arr[rightIdx] >= arr[pivotIdx]) rightIdx--
    }
    swap(pivotIdx, rightIdx, arr)

    const leftSubarrayIsSmaller = rightIdx - 1 - l < r - (rightIdx + 1)
    if (leftSubarrayIsSmaller) {
      helper(arr, l, rightIdx - 1)
      helper(arr, rightIdx + 1, r)
    } else {
      helper(arr, rightIdx + 1, r)
      helper(arr, l, rightIdx - 1)
    }
  }
}

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}