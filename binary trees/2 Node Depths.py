# Node Depths - easy

# This is the class of the input binary tree.
class BinaryTree:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

# #1
def nodeDepths(root, depth = 0):
  if root is None:
    return 0
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)


def nodeDepths(root):
  # Write your code here.
  stack = [{ 'node': root, 'depth': 0 }]
  sum = 0

  while len(stack) > 0:
    lastNode = stack.pop()
    node, depth = lastNode['node'], lastNode['depth']

    if node:
      sum += depth
      stack.append({ 'node': node.left, 'depth': depth + 1 })
      stack.append({ 'node': node.right, 'depth': depth + 1 })
    
  return sum
