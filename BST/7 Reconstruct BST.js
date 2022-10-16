// Reconstruct BST

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// #1
function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null

  const currValue = preOrderTraversalValues[0]
  let rightChildIdx = preOrderTraversalValues.length

  for (let i = 1; i < preOrderTraversalValues.length; i++) {
    if (preOrderTraversalValues[i] >= currValue) {
      rightChildIdx = i
      break;
    }
  }

  const leftChild = reconstructBst(preOrderTraversalValues.slice(1, rightChildIdx))
  const rightChild = reconstructBst(preOrderTraversalValues.slice(rightChildIdx))

  return new BST(currValue, leftChild, rightChild)
}

// #2
class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left) this.left.insert(value)
      else this.left = new BST(value)
    } else {
      if (this.right) this.right.insert(value)
      else this.right = new BST(value)
    }
  }
}

function reconstructBst(arr) {
  const tree = new BST(arr[0])
  for (let i = 1; i < arr.length; i++) {
    tree.insert(arr[i])
  }
  return tree
}

// #3
class TreeInfo {
  constructor(idx) {
    this.rootIdx = idx
  }
}

function reconstructBst(arr) {
  const treeInfo = new TreeInfo(0)

  return helper(-Infinity, Infinity, arr, treeInfo)
}

const helper = (lower, upper, arr, currTreeInfo) => {
  if (currTreeInfo.rootIdx === arr.length) return null

  const rootValue = arr[currTreeInfo.rootIdx]

  if (rootValue < lower || rootValue >= upper) return null

  currTreeInfo.rootIdx += 1

  const leftChild = helper(lower, rootValue, arr, currTreeInfo)
  const rightChild = helper(rootValue, upper, arr, currTreeInfo)

  return new BST(rootValue, leftChild, rightChild)
}