# Invert Binary Tree


# This is the class of the input binary tree.
class BinaryTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

# 1
def invertBinaryTree(tree):
  if tree:
    tree.left, tree.right = tree.right, tree.left
    invertBinaryTree(tree.left)
    invertBinaryTree(tree.right)

# 2
def invertBinaryTree(tree):
  queue = [ tree ]

  while queue:
    curr = queue.pop(0)
    curr.left, curr.right = curr.right, curr.left
    if curr.left: queue.append(curr.left)
    if curr.right: queue.append(curr.right)