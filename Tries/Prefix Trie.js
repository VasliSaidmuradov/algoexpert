// Trie (Prefix Tree)

const Trie = function() {
  this.root = new TrieNode()
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  let node = this.root
  for (let ch of word) {
    if (!(ch in node.children)){
      node.children[ch] = new TrieNode()
    }
    node = node.children[ch]
  }
  node.isEndOfWord = true
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  let node = this.root
  for (let ch of word) {
    if (!(ch in node.children)) {
      return false
    }
    node = node.children[ch]
  }
  return node.isEndOfWord
};


/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  let node = this.root
  for (let ch of prefix) {
    if (!(ch in node.children)) {
      return false
    }
    node = node.children[ch]
  }
  return true
};

class TrieNode {
  constructor() {
    this.children = {}
    this.isEndOfWord = false
  }
}