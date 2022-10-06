// Height Balanced Binary Tree

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// # Time O(n) | Space O(h)
class TreeInfo {
  constructor(isbalanced, height) {
    this.isBalanced = isbalanced
    this.height = height
  }
}

function heightBalancedBinaryTree(tree) {
  const dfs = node => {
    if (!node) {
      return new TreeInfo(true, 0)
    }

    const left = dfs(node.left)
    const right = dfs(node.right)

    const isBalanced = left.isBalanced && right.isBalanced && Math.abs(left.height - right.height) <= 1
    const height = Math.max(left.height, right.height) + 1

    return new TreeInfo(isBalanced, height)
  }

  const res = dfs(tree)
  return res.isBalanced
}

// #1
function heightBalancedBinaryTree(tree) {
  const dfs = (root) => {
    if (!root) {
      return [true, 0]
    }

    if (!root.left && !root.right) {
      return [true, 1]
    }

    const left = dfs(root.left)
    const right = dfs(root.right)

    if (!left[0] || !right[0]) {
      return [false]
    }

    const curr = [ left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1, Math.max(left[1], right[1]) + 1 ]
    return curr
  }
  
  const res = dfs(tree)
  return res[0]
}