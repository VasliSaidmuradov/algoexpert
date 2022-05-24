// Branch Sums - easy

// #1
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // Write your code here.
  const res = []

  const helper = (tree, sum) => {
    if (!tree) return
    
    let newSum = sum + tree.value
    
    if (!tree.left && !tree.right) {
      res.push(newSum)
      return
    }

    helper(tree.left, newSum)
    helper(tree.right, newSum)
  }
  helper(root, 0)

  return res
}