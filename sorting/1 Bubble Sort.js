// Bubble Sort

// #1
function bubbleSort(array) {
  let isSwaped = false

  for (let i = array.length - 1; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (array[j] > array[j + 1]) {
        swap(j, j + 1, array)
        isSwaped = true
      }
    }

    if (!isSwaped) break
  }

  return array
}

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}


// #2
function bubbleSort(array) {
  let isSorted = false
  let count = array.length - 1

  while (!isSorted) {
    isSorted = true

    for (let i = 0; i < count; i++) {
      if (array[i] > array[i + 1]) {
        swap(i, i + 1, array)
        isSorted = false
      }
    }

    count--
  }

  return array
}