// Longest Peak

// #1 Time O(N) | Space O(N)
function longestPeak(arr) {
  let peaks = []

  for (let i = 1; i < arr.length-1; i++) {
    if (arr[i-1] < arr[i] && arr[i+1] < arr[i]) {
      peaks.push(i)
    }
  }

  let longest = 0

  for (let peak of peaks) {
    let l = peak-1
    let r = peak+1

    while (arr[l] > arr[l-1] && l >=0) {
      l--
    }
    while (arr[r] > arr[r+1] && r < arr.length) {
      r++
    }

    longest = Math.max(longest, r-l+1)
  }

  return longest
}


// #2 Time O(N) | Space O(1)
function longestPeak(array) {
  let longest = 0
  let i = 1

  while (i < array.length-1) {
    const isPeak = array[i-1] < array[i] && array[i+1] < array[i]
    if (!isPeak) {
      i++
      continue
    }

    let l = i - 1
    let r = i + 1
    while (array[l] > array[l-1] && l >=0) {
      l--
    }
    while (array[r] > array[r+1] && r < array.length) {
      r++
    }

    longest = Math.max(longest, r-l+1)
    i = r
  }

  return longest
}