// Validate BST

// #1
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function validateBst(tree) {
  return helper(tree, -Infinity, Infinity)
}

function helper(tree, min, max) {
  if (!tree) {
    return true
  }

  if (tree.value < min || tree.value >= max) {
    return false
  }

  return helper(tree.left, min, tree.value) && helper(tree.right, tree.value, max)
}
