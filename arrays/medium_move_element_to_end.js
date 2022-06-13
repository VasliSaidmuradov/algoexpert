// Move Element To End

// #1
function moveElementToEnd(array, toMove) {
  // Write your code here.
  array.sort((a, b) => {
    if (a === toMove) return 1
    return -1
  })

  return array
}

// #2
function moveElementToEnd(array, toMove) {
  // Write your code here.
  let i = 0
  let n = array.length

  while (i < n) {
    if (array[i] === toMove) {
      array.push(...array.splice(i, 1))
      n--
    } else {
      i++
    }
  }

  return array
}


// #3
function moveElementToEnd(array, toMove) {
  // Write your code here.

  let i = 0
  let j = array.length - 1

  while (i < j) {
    while (i < j && array[j] === toMove) j--

    if (array[i] === toMove) {
      swap(i, j, array)
    }

    i++
  }

  return array
}

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}