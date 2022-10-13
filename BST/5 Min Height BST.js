// 5 Min Height BST
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}

// #1
function minHeightBst(array) {
  const helper = (l, r) => {
    let tree = null
    if (l <= r) {
      const mid = r - Math.floor((r-l)/2)
      tree = new BST(array[mid])

      tree.left = helper(l, mid-1)
      tree.right = helper(mid+1, r)
    }

    return tree
  }

  return helper(0, array.length-1)
}

// #2
function minHeightBst(array, l = 0, r = array.length - 1) {
  if (l <= r) {
    const mid = Math.floor((l+r)/2)
    const tree = new BST(array[mid])

    tree.left = minHeightBst(array, l, mid-1)
    tree.right = minHeightBst(array, mid+1, r)

    return tree
  }

  return null
}

// #3
function minHeightBst(array, l = 0, r = array.length - 1) {
  if (l > r) return null

  const mid = Math.floor((l+r) / 2)
  const tree = new BST(array[mid])

  tree.left = minHeightBst(array, l, mid-1)
  tree.right = minHeightBst(array, mid+1, r)

  return tree
}
