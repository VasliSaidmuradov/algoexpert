# BST Traversal - Medium

# 1
def inOrderTraverse(tree, array):
  if tree is not None:
    inOrderTraverse(tree.left, array)
    array.append(tree.value)
    inOrderTraverse(tree.right, array)
  return array


def preOrderTraverse(tree, array):
  if tree is not None:
    array.append(tree.value)
    preOrderTraverse(tree.left, array)
    preOrderTraverse(tree.right, array)
  return array


def postOrderTraverse(tree, array):
  if tree is not None:
    postOrderTraverse(tree.left, array)
    postOrderTraverse(tree.right, array)
    array.append(tree.value)
  return array


# 2
def inOrderTraverse(tree, array):
  def helper(tree):
    if not tree:
      return

    helper(tree.left)
    array.append(tree.value)
    helper(tree.right)

  helper(tree)

  return array


def preOrderTraverse(tree, array):
  def helper(tree):
    if not tree:
      return

    array.append(tree.value)
    helper(tree.left)
    helper(tree.right)

  helper(tree)

  return array


def postOrderTraverse(tree, array):
  def helper(tree):
    if not tree:
      return

    helper(tree.left)
    helper(tree.right)
    array.append(tree.value)

  helper(tree)

  return array

  # 3
def inOrderTraverse(tree, array):
  if tree.left:
    inOrderTraverse(tree.left, array)
  array.append(tree.value)
  if tree.right:
    inOrderTraverse(tree.right, array)
  return array


def preOrderTraverse(tree, array):
  array.append(tree.value)
  if tree.left:
    preOrderTraverse(tree.left, array)
  if tree.right:
    preOrderTraverse(tree.right, array)
  return array


def postOrderTraverse(tree, array):
  if tree.left:
    postOrderTraverse(tree.left, array)
  if tree.right:
    postOrderTraverse(tree.right, array)
  array.append(tree.value)
  return array