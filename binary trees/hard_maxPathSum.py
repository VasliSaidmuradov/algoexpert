# maxPathSum in BST

# 1
def maxPathSum(tree):
  # Write your code here.
  _, maxSum = findMaxSum(tree)
  return maxSum


def findMaxSum(tree):
  if tree is None:
    return (0, float('-inf'))

  leftMaxSumAsBranch, leftMaxPathSum = findMaxSum(tree.left)
  rightMaxSumAsBranch, rightMaxPathSum = findMaxSum(tree.right)

  maxChildSumAsBranch = max(leftMaxSumAsBranch, rightMaxSumAsBranch)

  value = tree.value

  maxSumAsBranch = max(maxChildSumAsBranch + value, value)
  maxSumAsRootNode = max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch)

  maxPathSum = max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)

  return (maxSumAsBranch, maxPathSum)


# 2
def maxPathSum(tree):
  return getMaxPathSum(tree).maxSum


class TreeInfo:
  def __init__(self, currSum, maxSum):
    self.currSum = currSum
    self.maxSum = maxSum

def getMaxPathSum(tree):
  if tree is None:
    return TreeInfo(0, float('-inf'))

  leftSubTreeInfo = getMaxPathSum(tree.left)
  rightSubTreeInfo = getMaxPathSum(tree.right)

  # without root node
  maxSumNoRoot = max(leftSubTreeInfo.maxSum, rightSubTreeInfo.maxSum)

  # with root node
  # case1: contain single side
  maxSumSingleSide = max(leftSubTreeInfo.currSum, rightSubTreeInfo.currSum) + tree.value
  # case2: contain both side
  maxSumBothSide = leftSubTreeInfo.currSum + rightSubTreeInfo.currSum + tree.value
  # case3: contain just itself
  maxSumSingleRoot = tree.value

  maxSum = max(maxSumNoRoot, maxSumSingleSide, maxSumBothSide, maxSumSingleRoot)
  currSum = max(maxSumSingleSide, tree.value)

  return TreeInfo(currSum, maxSum)
    