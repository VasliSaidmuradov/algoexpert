// Find Three Largest Numbers

// #1 - O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  const res = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]

  for (let i = 0; i < array.length; i++) {
    if (res[2] < array[i]) {
      res[0] = res[1]
      res[1] = res[2]
      res[2] = array[i]
      continue
    } else if (res[1] < array[i]) {
      res[0] = res[1]
      res[1] = array[i]
      continue
    } else if (res[0] < array[i]) {
      res[0] = array[i]
    }
  }

  return res
}



// AlgoExpert solution
// #1 - O(n) time | O(1) space
function findThreeLargestNumbers(array) {
  const threeLargest = [null, null, null]

  for (const num of array) {
    updatelargest(threeLargest, num)
  }

  return threeLargest
}

function updatelargest(threeLargest, num) {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2)
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1)
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0)
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}