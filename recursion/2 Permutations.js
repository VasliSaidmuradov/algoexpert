// Permutations

// #1
function getPermutations(array) {
  const res = []

  const helper = (arr, temp) => {
    if (!arr.length && temp.length) {
      res.push(temp)
    } else {
      for (let i = 0; i < arr.length; i++) {
        const newArr = arr.filter((_, idx) => idx !== i)
        const newTemp = temp.concat([arr[i]])
        helper(newArr, newTemp)
      }
    }
  }

  helper(array, [])

  return res
}

// #2
function getPermutations(array) {
  const res = []

  const helper = (i, arr) => {
    if (i === arr.length - 1) {
      res.push(arr.slice())
    } else {
      for (let j = i; j < arr.length; j++) {
        swap(i, j, arr)
        helper(i+1, arr)
        swap(i, j, arr)
      }
    }
  }

  helper(0, array)

  return res
}

const swap = (i, j, arr) => {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}