# Find Kth Largest Element In BST.js

# 1 Time (h + k) | Space O(h)
class BST:
  def __init__(self, value, left=None, right=None):
    self.value = value
    self.left = left
    self.right = right


def findKthLargestValueInBst(tree, k):
  latestNodeValue = -1
  numberOfVisited = 0

  def inOrder(tree):
    nonlocal latestNodeValue, numberOfVisited
    if tree.right: inOrder(tree.right)
    
    if numberOfVisited < k:
      latestNodeValue = tree.value
      numberOfVisited += 1
    
    if tree.left: inOrder(tree.left)

  inOrder(tree)

  return latestNodeValue