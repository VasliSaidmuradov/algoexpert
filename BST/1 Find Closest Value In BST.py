# Find Closest Value In BST

# 1
def findClosestValueInBst(tree, target):
  closest = float('inf')
  ans = closest

  def dfs(tree, target):
    nonlocal closest, ans
    if tree:
      if abs(tree.value - target) < closest:
        ans = tree.value
        closest = abs(tree.value - target)


    if tree.value < target:
      dfs(tree.right, target)
    else:
      dfs(tree.left, target)


  dfs(tree, target)

  return ans

# This is the class of the input tree. Do not edit.
class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None


# 2
def findClosestValueInBst(tree, target):
  closest = tree.value
  stack = [ tree ]

  while stack:
    curr = stack.pop()
    diff = abs(curr.value - target)

    if (diff < abs(closest - target)):
      closest = curr.value

    if (curr.value > target and curr.left): stack.append(curr.left)
    if (curr.value < target and curr.right): stack.append(curr.right)


  return closest

# 3
def findClosestValueInBst(tree, target):
  curr = tree
  closest = tree.value

  while curr is not None:
    if abs(curr.value - target) < abs(closest - target):
      closest = curr.value

    if target < curr.value:
      curr = curr.left
    elif target > curr.value:
      curr = curr.right
    else:
      break

  return closest