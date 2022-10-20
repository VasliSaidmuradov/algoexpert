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


// #2
function branchSums(root) {
  let res = []

  const helper = (node, sum) => {
    if (!node.left && !node.right) {
      res.push(sum + node.value)
      return
    }
    node.left && helper(node.left, sum + node.value)
    node.right && helper(node.right, sum + node.value)
  }

  helper(root, 0)

  return res
}