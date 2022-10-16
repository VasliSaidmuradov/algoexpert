# 7 Reconstruct BST

# 1
class BST:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right


def reconstructBst(preOrderTraversalValues):
  if len(preOrderTraversalValues) == 0:
    return None

  currValue = preOrderTraversalValues[0]
  rightChildIdx = len(preOrderTraversalValues)

  for idx in range(1, len(preOrderTraversalValues)):
    value = preOrderTraversalValues[idx]
    if value >= currValue:
      rightChildIdx = idx
      break

  leftChild = reconstructBst(preOrderTraversalValues[1:rightChildIdx])
  rightChild = reconstructBst(preOrderTraversalValues[rightChildIdx:])

  return BST(currValue, leftChild, rightChild)

# 2
class BST:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right

# added method
  def insert(self, value):
    if value < self.value:
      if self.left:
        self.left.insert(value)
      else:
        self.left = BST(value)
    else:
      if self.right:
        self.right.insert(value)
      else:
        self.right =BST(value)


def reconstructBst(preOrderTraversalValues):
  tree = BST(preOrderTraversalValues[0])

  for i in range(1, len(preOrderTraversalValues)):
    value = preOrderTraversalValues[i]
    tree.insert(value)

  return tree
