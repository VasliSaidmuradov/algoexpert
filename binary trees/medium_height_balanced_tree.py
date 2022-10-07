# Height Balanced Binary Tree

# This is an input class. Do not edit.
class BinaryTree:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

class TreeInfo:
  def __init__(self, isBalanced, height):
    self.isBalanced = isBalanced
    self.height = height

def heightBalancedBinaryTree(tree):
  res = dfs(tree)

  return res.isBalanced


def dfs(node):
  if node is None:
    return TreeInfo(True, 0)

  left = dfs(node.left)
  right = dfs(node.right)

  isBalanced = left.isBalanced and right.isBalanced and abs(left.height - right.height) <= 1
  height = max(left.height, right.height) + 1

  return TreeInfo(isBalanced, height)