// Monotonic Array

// #1 O(n) Time | O(1) Space
function isMonotonic(array) {
  // Write your code here.
  let isInc = false
  let isDec = false
  for (let i = 0; i < array.length - 1; i++) {
    let curr = array[i]
    let next = array[i + 1]

    if (curr < next) {
      isInc = true
    }
    if (curr > next) {
      isDec = true
    }

    if (isInc && isDec) {
      return false
    }
  }

  return true
}
