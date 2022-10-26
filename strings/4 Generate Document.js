// Generate Document

// #1
function generateDocument(characters, document) {
  if (characters.length < document.length)
    return false

  const hashMap = {}

  for (let ch of characters) {
    hashMap[ch] = (hashMap[ch] || 0) + 1
  }

  for (let ch of document) {
    if (hashMap.hasOwnProperty(ch)) {
      hashMap[ch] -= 1
    }
    if (!hashMap.hasOwnProperty(ch) || hashMap[ch] < 0) {
      return false
    }
  }

  return true
}
