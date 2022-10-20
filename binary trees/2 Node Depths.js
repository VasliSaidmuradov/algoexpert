// Node Depths - easy

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// #1 O(n) time | O(h) space - n is number of nodes in the BT and h is height of the BT
function nodeDepths(root) {
  // Write your code here.
  const helper = (node, depth) => {
    if (!node) {
    return 0
    }

    return depth + helper(node.left, depth + 1) + helper(node.right, depth + 1)
  }

  return helper(root, 0)
}

// #2
function nodeDepths(root, depth = 0) {
  // Write your code here.
  if (!root) return 0

  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// #3
function nodeDepths(root) {
  // Write your code here.
  let sum = 0
  const stack = [{ node: root, depth: 0 }]

  while (stack.length) {
    const { node, depth } = stack.pop()
    if (node) {
      sum += depth
      stack.push({ node: node.left, depth: depth + 1})
      stack.push({ node: node.right, depth: depth + 1})
    }
  }

  return sum
}