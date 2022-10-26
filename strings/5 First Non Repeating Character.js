// First Non Repeating Character

// #1
function firstNonRepeatingCharacter(s) {
  const hashMap = {}
  for (let ch of s) {
    hashMap[ch] = (hashMap[ch] || 0) + 1
  }

  for (let idx =0; idx < s.length; idx++) {
    if (hashMap[s[idx]] === 1)
      return idx
  }
  
  return -1
}