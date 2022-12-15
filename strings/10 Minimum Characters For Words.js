// Minimum Characters For Words

// #1
function minimumCharactersForWords(words) {
  const hash = {}
  const result = []
  for (let word of words) {
    const tempHash = {}
    for (ch of word) {
      tempHash[ch] = (tempHash[ch] || 0) + 1
    }
    for (prop in tempHash) {
      if (!(prop in hash)) {
        hash[prop] = tempHash[prop]
      } else {
        hash[prop] = Math.max(hash[prop], tempHash[prop])
      }
    }
  }
  for (const prop in hash) {
    for (let i = 0; i < hash[prop]; i++) {
      result.push(prop)
    }
  }
  return result
}