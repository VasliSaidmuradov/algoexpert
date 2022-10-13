// BST Traversal - Medium

// #1
function inOrderTraverse(tree, array) {
  if (tree.left) inOrderTraverse(tree.left, array)
  array.push(tree.value)
  if (tree.right) inOrderTraverse(tree.right, array)
  return array
}

function preOrderTraverse(tree, array) {
  array.push(tree.value)
  if (tree.left) preOrderTraverse(tree.left, array)
  if (tree.right) preOrderTraverse(tree.right, array)
  return array
}

function postOrderTraverse(tree, array) {
  if (tree.left) postOrderTraverse(tree.left, array)
  if (tree.right) postOrderTraverse(tree.right, array)
  array.push(tree.value)
  return array
}

// #2
function inOrderTraverse(tree, array) {
  const helper = (tree, array) => {
    if (!tree) return

    helper(tree.left, array)
    array.push(tree.value)
    helper(tree.right, array)
  }

  helper(tree, array)

  return array
}

function preOrderTraverse(tree, array) {
  const helper = (tree, array) => {
    if (!tree) return

    array.push(tree.value)
    helper(tree.left, array)
    helper(tree.right, array)
  }

  helper(tree, array)

  return array
}

function postOrderTraverse(tree, array) {
  const helper = (tree, array) => {
  if (!tree) return

  helper(tree.left, array)
  helper(tree.right, array)
  array.push(tree.value)
  }

  helper(tree, array)

  return array
}