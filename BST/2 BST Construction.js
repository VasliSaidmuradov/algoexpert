// BST Construction

// #1
// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    const dfs = (tree) => {
      if (value < tree.value) {
        if (!tree.left) {
          tree.left = new BST(value)
          return
        }

        dfs(tree.left)
      } else {
        if (!tree.right) {
          tree.right = new BST(value)
          return
        }

        dfs(tree.right)
      }
    }

    dfs(this)

    return this;
  }

  contains(value) {
    const dfs = (tree) => {
      if (!tree) return false

      if (tree.value === value) {
        return true
      }

      return tree.value > value ? dfs(tree.left) : dfs(tree.right)
    }

    return dfs(this)
  }

  remove(value, parent = null) {
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this)
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this)
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue()
        this.right.remove(this.value, this)
      } else if (parent === null) {
        if (this.left !== null) {
          this.value = this.left.value
          this.right = this.left.right
          this.left = this.left.left
        } else if (this.right !== null) {
          this.value = this.right.value
          this.left = this.right.left
          this.right = this.right.right
        } else {
          // This is single node tree, do nothing
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left : this.right
      }
    }

    return this
  }
  
  getMinValue() {
    if (!this.left) {
      return this.value
    } else {
      return this.left.getMinValue()
    }
  }
}

// Do not edit the line below.
exports.BST = BST;
