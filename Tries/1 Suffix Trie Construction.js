// Suffix Trie Construction

// #1

// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFrom(string);
  }

  populateSuffixTrieFrom(string) {
    for (let i = 0; i < string.length; i++) {
      let pointer = this.root
      for (let j = i; j < string.length; j++) {
        const node = string[j]
        if (!(node in pointer)) {
          pointer[node] = {}
        }
        pointer = pointer[node]
      }
      pointer[this.endSymbol] = true
    }
  }

  contains(string) {
    let pointer = this.root
    for (let i = 0; i < string.length; i++) {
      const char = string[i]
      if (!(char in pointer)) {
        return false
      }
      pointer = pointer[char]
    }

    return this.endSymbol in pointer
  }
}