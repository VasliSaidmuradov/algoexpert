// Powerset

// #1 Time O(N * 2^N) | Space O(N * 2^N)
function powerset(array) {
  const res = [[]]

  for (let elem of array) {
    let len = res.length
    for (let i = 0; i < len; i++) {
      const currSubset = res[i]
      res.push([...currSubset, elem])
    }
  }

  return res
}

// #2 Time O(N * 2^N) | Space O(N * 2^N)
function powerset(array, idx = null) {
  if (idx === null) {
    idx = array.length - 1
  }
  if (idx < 0) {
    return [[]]
  }

  const elem = array[idx]
  const subsets = powerset(array, idx - 1)
  const len = subsets.length

  for (let i = 0; i < len; i++) {
    const currSubset = subsets[i]
    subsets.push([...currSubset, elem])
  }

  return subsets
}