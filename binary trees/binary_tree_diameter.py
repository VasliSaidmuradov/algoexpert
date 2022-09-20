# Binary Tree Diameter

# 1
class BinaryTree:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right


def binaryTreeDiameter(tree):
  ans = 0

  def dfs(root):
    nonlocal ans
    if not root:
      return 0

    left_h, right_h = dfs(root.left), dfs(root.right)

    ans = max(ans, left_h + right_h)

    return 1 + max(left_h, right_h)

  dfs(tree)

  return ans
