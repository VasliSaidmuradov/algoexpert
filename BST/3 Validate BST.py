# Validate BST - Medium

class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

# 1
def validateBst(tree, minVal = float('-inf'), maxVal = float('inf')):
  if tree is None:
    return True
  if tree.value < minVal or tree.value >= maxVal:
    return False
  return validateBst(tree.left, minVal, tree.value) and validateBst(tree.right, tree.value, maxVal)

# 2
def validateBst(tree):
  return helper(tree, float('-inf'), float('inf'))

def helper(tree, minValue, maxValue):
  if tree is None:
    return True
  if tree.value < minValue or tree.value >= maxValue:
    return False

  left = helper(tree.left, minValue, tree.value)
  right = helper(tree.right, tree.value, maxValue)

  return left and right