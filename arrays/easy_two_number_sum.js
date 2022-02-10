// #1
function twoNumberSum(array, target) {
  const obj = {}

  for (let i = 0; i < array.length; i++) {
    let temp = target - array[i]
    if (temp in obj) {
      return [temp, array[i]]
    }

    obj[array[i]] = true
  }

  return []
}

// #2
function twoNumberSum(arr, t) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === t) return [arr[i], arr[j]]
    }
  }

  return []
}

// #3
function twoNumberSum(arr, target) {
  arr.sort((a, b) => a - b)

  let i = 0
  let j = arr.length - 1

  while (i < j) {
    const sum = arr[i] + arr[j]
    if (sum === target) return [arr[i], arr[j]]
    else if (sum < target) i++
    else j--
  }

  return []
}