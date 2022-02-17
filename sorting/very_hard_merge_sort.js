// Merge Sort

// #1
function mergeSort(array) {
  if (array.length < 2) return array

  const mid = Math.floor(array.length / 2)
  const left = mergeSort(array.slice(0, mid))
  const right = mergeSort(array.slice(mid))

  return merge(left, right)
}

const merge = (arr1, arr2) => {
  const res = []

  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    res.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    res.push(arr2[j])
    j++
  }

  return res
}
