// #1

class BinaryTree {
constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function binaryTreeDiameter(tree) {
  // Write your code here.
  let ans = 0

  const height = root => {
    if (!root) {
      return 0
    }

    const leftHeight = height(root.left)
    const rightHeight = height(root.right)

    ans = Math.max(ans, leftHeight + rightHeight)

    return 1 + Math.max(leftHeight, rightHeight)
  }

  height(tree)

  return ans
}