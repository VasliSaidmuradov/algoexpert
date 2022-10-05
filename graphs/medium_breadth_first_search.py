# Breadth First Search

class Node:
  def __init__(self, name):
    self.children = []
    self.name = name

  def addChild(self, name):
    self.children.append(Node(name))
    return self

  def breadthFirstSearch(self, array):
    queue = [ self ]

    while queue:
      curr = queue.pop(0) # remove from idx 0

      array.append(curr.name)

      for child in curr.children:
        queue.append(child)

    return array