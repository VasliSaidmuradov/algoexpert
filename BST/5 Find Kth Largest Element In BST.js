// Find Kth Largest Element In BST

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// #1 Time O(h + k) | Space O(h)
function findKthLargestValueInBst(tree, k) {
  let latestVisited = -1
  let numberOfVisited = 0

  const inOrder = (tree) => {
    if (tree.right) inOrder(tree.right)

    if (numberOfVisited < k) {
      latestVisited = tree.value
      numberOfVisited++
    }

    if (tree.left) inOrder(tree.left)
  }

  inOrder(tree)

  return latestVisited
}

// #2 O(n) time | O(h + k) space
function findKthLargestValueInBst(tree, k) {
  const arr = []
  
  const inOrder = (tree) => {
    if (arr.length < k) {
      if (tree.right) inOrder(tree.right)
      arr.push(tree.value)
      if (tree.left) inOrder(tree.left)
    }
  }

  inOrder(tree)

  return arr[k-1]
}
