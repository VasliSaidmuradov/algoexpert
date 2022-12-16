// LRU Cache

// #1
// Do not edit the class below except for the insertKeyValuePair,
// getValueFromKey, and getMostRecentKey methods. Feel free
// to add new properties and methods to the class.
class LRUCache {
  constructor(maxSize) {
    this.maxSize = maxSize || 1;
    this.maps = new Map()
    this.head = new Node(0, 0)
    this.last = new Node(0, 0)
    this.head.next = this.last
    this.last.prev = this.head
  }

  insertKeyValuePair(key, value) {
    if (this.maps.has(key)) {
      this.remove(this.maps.get(key))
    }
    if (this.maps.size === this.maxSize) {
      this.remove(this.last.prev)
    }
    this.insert(new Node(key, value))
  }

  getValueFromKey(key) {
    let node = this.maps.get(key)
    if (node == null) {
      return null
    }
    this.remove(node)
    this.insert(node)
    return node.value
  }

  getMostRecentKey() {
    return this.head.next.key
  }

  insert(node) {
    this.maps.set(node.key, node)
    node.next = this.head.next
    this.head.next.prev = node
    node.prev = this.head
    this.head.next = node
  }

  remove(node) {
    this.maps.delete(node.key)
    node.prev.next = node.next
    node.next.prev = node.prev
  }
}

class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}