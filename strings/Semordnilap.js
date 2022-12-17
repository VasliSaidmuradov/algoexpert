// semordnilap

// #1
function semordnilap(words) {
  const set = new Set(words)
  const result = []
  for (let word of words) {
    const reversedWord = word.split('').reverse().join('')
    if (set.has(reversedWord) && word !== reversedWord) {
      result.push([word, reversedWord])
      set.delete(word)
      set.delete(reversedWord)
    }
  }
  return result
}