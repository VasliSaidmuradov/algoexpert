// Breadth First Search
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  breadthFirstSearch(array) {
    const queue = [ this ]

    while (queue.length) {
      const curr = queue.shift()

      array.push(curr.name)

      for (let child of curr.children) {
        queue.push(child)
      }
    }

    return array
  }
}
