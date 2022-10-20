// Invert Binary Tree

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 1
function invertBinaryTree(tree) {
  if (!tree) return

  [tree.left, tree.right] = [tree.right, tree.left]

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
}

// 2
function invertBinaryTree(tree) {
  if (!tree) return

  invertBinaryTree(tree.left)
  invertBinaryTree(tree.right)
  const temp = tree.left
  tree.left = tree.right
  tree.right = temp
}

// 3
function invertBinaryTree(tree) {
  const queue = [ tree ]

  while (queue.length) {
    const curr = queue.shift()

    const left = curr.left
    curr.left = curr.right
    curr.right = left

    if (curr.left) queue.push(curr.left)
    if (curr.right) queue.push(curr.right)
  }
}
