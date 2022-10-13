# 5 Min Height BST

class BST:
  def __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

  def insert(self, value):
    if value < self.value:
      if self.left is None:
        self.left = BST(value)
      else:
        self.left.insert(value)
    else:
      if self.right is None:
        self.right = BST(value)
      else:
        self.right.insert(value)

# 1
def minHeightBst(array):
  def helper (l, r):
    tree = None
    if l <= r:
      mid = (l+r) // 2
      tree = BST(array[mid])

      tree.left = helper(l, mid-1)
      tree.right = helper(mid+1, r)
    return tree

  return helper(0, len(array)-1)

# 2
def minHeightBst(array):
  return helper(array, 0, len(array)-1)

def helper(arr, l, r):
  if l > r:
    return None
  mid = (l+r)//2
  tree = BST(arr[mid])
  tree.left = helper(arr, l, mid-1)
  tree.right = helper(arr, mid+1, r)
  return tree