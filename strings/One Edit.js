// One Edit

// #1 O(m + n) time | O(m + n) space
function oneEdit(stringOne, stringTwo) {
  const m = stringOne.length
  const n = stringTwo.length
  if (Math.abs(m - n) > 1) return false

  for (let i = 0; i < Math.min(m, n); i++) {
    if (stringOne[i] !== stringTwo[i]) {
      if (m > n) {
        return stringOne.slice(i+1) === stringTwo.slice(i)
      } else if (n > m) {
        return stringOne.slice(i) === stringTwo.slice(i+1)
      } else {
        return stringOne.slice(i+1) === stringTwo.slice(i+1)
      }
    }
  }

  return true
}

// #2 O(n) time | O(1) space where n is length of shorter string
function oneEdit(stringOne, stringTwo) {
  const m = stringOne.length
  const n = stringTwo.length
  if (Math.abs(m - n) > 1) return false
  let madeEdit = false
  let idxOne = 0
  let idxTwo = 0

  while (idxOne < m && idxTwo < n) {
    if (stringOne[idxOne] !== stringTwo[idxTwo]) {
      if (madeEdit) return false
      madeEdit = true
      if (m > n) {
        idxOne++
      } else if (n > m) {
        idxTwo++
      } else {
        idxOne++
        idxTwo++
      }
    } else {
      idxOne++
      idxTwo++
    }
  }

  return true
}