// Selection Sort

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let j = i + 2
    let min = i + 1
    for (; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j
      }
    }
    
    if (array[min] < array[i]) {
      swap(i, min, array)
    }
  }

  return array
}


const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}
// Do not edit the line below.
exports.selectionSort = selectionSort;


// [8, 5, 2, 9, 5, 6, 3]