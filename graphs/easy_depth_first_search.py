# Depth First Search

# 1
class Node:
  def __init__(self, name):
    self.children = []
    self.name = name

  def addChild(self, name):
    self.children.append(Node(name))
    return self

  def depthFirstSearch(self, array):
    stack = [ self ]

    while stack:
      curr = stack.pop()

      array.append(curr.name)

      # for i in range(len(curr.children)-1, -1,-1):
      #     stack.append(curr.children[i])
      for i in curr.children[::-1]:
        stack.append(i)

    return array


# 2
  def depthFirstSearch(self, array):
    # Write your code here.
    array.append(self.name)

    for child in self.children:
      child.depthFirstSearch(array)

    return array
