// Multi String Search

// #1
function multiStringSearch(bigString, smallStrings) {
  const trie = new Trie(bigString)
  const res = []
  for (let str of smallStrings) {
    res.push(trie.includes(str))
  }
  return res
}

class Trie {
  constructor(string) {
    this.trie = {}
    this.createTrieFrom(string)
  }

  createTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let node = this.trie
      for (let j = i; j < string.length; j++) {
        const char = string[j]
        if (!(char in node)) {
          node[char] = {}
        }
        node = node[char]
      }
    }
  }

  includes(string) {
    let node = this.trie
    for (let i = 0; i < string.length; i++) {
      const char = string[i]
      if (!(char in node)) return false
      node = node[char]
    }

    return true
  }
}