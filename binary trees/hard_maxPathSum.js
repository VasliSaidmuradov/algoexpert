// Max Path Sum in BST

// #1
class TreeInfo {
  constructor(currSum, maxSum) {
    this.currSum = currSum
    this.maxSum = maxSum
  }
}

function maxPathSum(tree) {
  return getMaxPathSum(tree).maxSum
}

function getMaxPathSum(tree) {
  if (!tree) {
    return new TreeInfo(0, -Infinity)
  }

  const leftMaxPathSumInfo = getMaxPathSum(tree.left)
  const rightMaxPathSumInfo = getMaxPathSum(tree.right)

  // without root node
  const maxPathSumNoRoot = Math.max(leftMaxPathSumInfo.maxSum, rightMaxPathSumInfo.maxSum)

  // with root node
  // just a root
  const maxPathSumSingleRoot = tree.value
  // sinle side with root
  const maxPathSumSingleSide = Math.max(leftMaxPathSumInfo.currSum, rightMaxPathSumInfo.currSum) + tree.value
  // both side with root
  const maxPathSumBothSide = leftMaxPathSumInfo.currSum + rightMaxPathSumInfo.currSum + tree.value

  const currSum = Math.max(maxPathSumSingleSide, tree.value)
  const maxSum = Math.max(maxPathSumNoRoot, maxPathSumSingleRoot, maxPathSumSingleSide, maxPathSumBothSide)

  return new TreeInfo(currSum, maxSum)
}

// Do not edit the line below.
exports.maxPathSum = maxPathSum;
