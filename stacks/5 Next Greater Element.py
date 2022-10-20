# Next Greater Element

# 1
def nextGreaterElement(array):
  res = [-1] * len(array)
  stack = []

  for idx in range(len(array) * 2):
    currIdx = idx % len(array)

    while stack and array[currIdx] > array[stack[len(stack) - 1]]:
      topOfStack = stack.pop()
      res[topOfStack] = array[currIdx]
    
    stack.append(currIdx)

  return res

  # 2
def nextGreaterElement(array):
  stack = []
  res = [-1] * len(array)

  for idx in reversed(range(2* len(array))):
    currIdx = idx % len(array)

    while stack and stack[len(stack) - 1] <= array[currIdx]:
      stack.pop()

    if stack:
      res[currIdx] = stack[len(stack) - 1]

    stack.append(array[currIdx])

  return res