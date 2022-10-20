// Insertion Sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (array[j] < array[j - 1]) {
        swap(j, j - 1, array)
      } else {
        break
      }
    }
  }

  return array
}

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
// Do not edit the line below.
exports.insertionSort = insertionSort;