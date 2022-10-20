

# #1
# This is the class of the input root. Do not edit it.
class BinaryTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


def branchSums(root):
  # Write your code here.
  res = []
  helper(root, 0, res)
  return res

def helper(tree, sum, res):
  if not tree:
  # if tree is None:
    return

  newSum = sum + tree.value
  if not tree.left and not tree.right:
  # if tree.left is None and tree.right is None: 
    res.append(newSum)
    return

  helper(tree.left, newSum, res)
  helper(tree.right, newSum, res)

