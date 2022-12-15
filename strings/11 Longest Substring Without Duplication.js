// Longest Substring Without Duplication

// #1
function longestSubstringWithoutDuplication(string) {
  const set = new Set()
  let leftIdx = 0
  let rightIdx = 0
  let result = ''
  while (rightIdx < string.length) {
    const currChar = string[rightIdx]
    if (set.has(currChar)) {
      if (result.length < rightIdx - leftIdx) {
        result = string.slice(leftIdx, rightIdx)
      }
      while (string[leftIdx] !== currChar) {
        set.delete(string[leftIdx])
        leftIdx++
      }
      leftIdx++
    }
    set.add(currChar)
    rightIdx++
  }
  if (result.length < rightIdx - leftIdx) {
    result = string.slice(leftIdx, rightIdx)
  }
  return result
}

// #2
function longestSubstringWithoutDuplication(string) {
  const set = new Set()
  let leftIdx = 0
  let rightIdx = 0
  let result = ''
  while (rightIdx <= string.length) {
    const currChar = string[rightIdx]
    if (set.has(currChar) || currChar === undefined) {
      if (result.length < rightIdx - leftIdx) {
        result = string.slice(leftIdx, rightIdx)
      }
      while (string[leftIdx] !== currChar) {
        set.delete(string[leftIdx])
        leftIdx++
      }
      leftIdx++
    }
    set.add(currChar)
    rightIdx++
  }
  return result
}

// #3
function longestSubstringWithoutDuplication(string) {
  const lastSeen = {}
  const longest = [0, 1]
  let startIdx = 0
  for (let idx = 0; idx <string.length; idx++) {
    const char = string[idx]
    if (char in lastSeen) {
      startIdx = Math.max(startIdx, lastSeen[char] + 1)
    }
    if (longest[1] - longest[0] < idx + 1 - startIdx) {
      longest[0] = startIdx
      longest[1] = idx + 1
    }
    lastSeen[char] = idx
  }
  return string.slice(longest[0], longest[1])
}