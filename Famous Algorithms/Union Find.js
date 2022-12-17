// Union Find

// #1
class UnionFind {
  constructor() {
    this.parents = {}
  }
  // O(1) time | O(1) space
  createSet(value) {
    this.parents[value] = value
  }
  // O(n) time | O(1) space
  find(value) {
    if (!(value in this.parents)) return null

    let currParent = value
    while (currParent !== this.parents[currParent]) {
      currParent = this.parents[currParent]
    }
    return currParent
  }
  // O(n) time | O(1) space
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return

    const valueOneRoot = this.find(valueOne)
    const valueTwoRoot = this.find(valueTwo)
    this.parents[valueTwoRoot] = valueOneRoot
  }
}

// #2
class UnionFind {
  constructor() {
    this.parents = {}
    this.ranks = {}
  }
  // O(1) time | O(1) space
  createSet(value) {
    this.parents[value] = value
    this.ranks[value] = 0
  }
  // O(log(n)) time | O(1) space
  find(value) {
    if (!(value in this.parents)) return null

    let currParent = value
    while (currParent !== this.parents[currParent]) {
      currParent = this.parents[currParent]
    }
    return currParent
  }
  // O(log(n)) time | O(1) space
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return

    const valueOneRoot = this.find(valueOne)
    const valueTwoRoot = this.find(valueTwo)
    if (this.ranks[valueOneRoot] < this.parents[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot
    } else if (this.ranks[valueOneRoot] > this.parents[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot
    } else {
      this.parents[valueTwoRoot] = valueOneRoot
      this.ranks[valueOneRoot] += 1
    }
  }
}

// #3
class UnionFind {
  constructor() {
    this.parents = {}
    this.ranks = {}
  }
  // O(1) time | O(1) space
  createSet(value) {
    this.parents[value] = value
    this.ranks[value] = 0
  }
  // O(α(n)), approximately O(1) time | O(α(n)), approximately O(1) space
  find(value) {
    if (!(value in this.parents)) return null

    if (value !== this.parents[value]) {
      this.parents[value] = this.find(this.parents[value])
    }

    return this.parents[value]
  }
  // O(α(n)), approximately O(1) time | O(α(n)), approximately O(1) space
  union(valueOne, valueTwo) {
    if (!(valueOne in this.parents) || !(valueTwo in this.parents)) return

    const valueOneRoot = this.find(valueOne)
    const valueTwoRoot = this.find(valueTwo)
    if (this.ranks[valueOneRoot] < this.parents[valueTwoRoot]) {
      this.parents[valueOneRoot] = valueTwoRoot
    } else if (this.ranks[valueOneRoot] > this.parents[valueTwoRoot]) {
      this.parents[valueTwoRoot] = valueOneRoot
    } else {
      this.parents[valueTwoRoot] = valueOneRoot
      this.ranks[valueOneRoot] += 1
    }
  }
}