// Find Closest Value In BST

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// MY SOLUTIONS
// 1
function findClosestValueInBst(tree, target) {
  let ans = [Infinity, Infinity] // [val, diff]

  const stack = [ tree ]

  while (stack.length) {
    const curr = stack.pop()

    const diff = Math.abs(curr.value - target)

    if (diff < ans[1]) {
      ans[0] = curr.value
      ans[1] = diff
    }

    if (curr.value > target && curr.left) stack.push(curr.left)
    if (curr.value < target && curr.right) stack.push(curr.right)
  }

  return ans[0]
}

// #2
function findClosestValueInBst(tree, target) {
  const queue = [ tree ]
  let ans = null
  let diff = Infinity

  while (queue.length) {
    const curr = queue.shift()
    const currDiff = Math.abs(curr.value - target)
    if (currDiff < diff) {
      diff = currDiff
      ans = curr.value
    }

    if (curr.left) queue.push(curr.left)
    if (curr.right) queue.push(curr.right)
  }

  return ans
}


// #3
function findClosestValueInBst(tree, target) {
  let ans = null
  let diff = Infinity
  
  const dfs = (root) => {
    if (!root) return
    const d = Math.abs(root.value - target)

    if (d <= diff) {
      diff = d
      ans = root.value
    }

    root.value > target ? dfs(root.left) : dfs(root.right)
  }

  dfs(tree)

  return ans
}