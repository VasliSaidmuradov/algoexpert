// Depth First Search

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  // #1
  depthFirstSearch(array) {
    const stack = [ this ]

    while (stack.length) {
      const { name, children} = stack.pop()
      array.push(name)

      for (let i = children.length - 1; i >= 0; i--) {
        stack.push(children[i])
      }
    }

    return array
  }

  // #2 recursion
  depthFirstSearch(array) {
    const dfs = (root) => {
      if (root) {
        const { name, children } = root
        array.push(name)

        for (let child of children) {
          dfs(child)
        }
      }
    }

    dfs(this)

    return array
  }

  // #3
  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name)

    for (let child of this.children) {
      child.depthFirstSearch(array)
    }

    return array
  }
}