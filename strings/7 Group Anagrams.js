// Group Anagrams

// #1
function groupAnagrams(words) {
  const hashMap = {}
  const res = []

  for (let word of words) {
    const sortedWord = [...word].sort().join('')

    if (hashMap.hasOwnProperty(sortedWord)) {
      hashMap[sortedWord].push(word)
    } else {
      hashMap[sortedWord] = [word]
    }
  }

  for (prop in hashMap) {
    res.push(hashMap[prop])
  }

  return res
 }

//  #2
function groupAnagrams(words) {
  const hashMap = {}

  for (let word of words) {
    const sortedWord = [...word].sort().join('')

    if (sortedWord in hashMap) {
      hashMap[sortedWord].push(word)
    } else {
      hashMap[sortedWord] = [word]
    }
  }

  return Object.values(hashMap)
 }