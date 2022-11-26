# Max Subset Sum No Adjacent

# 1
def maxSubsetSumNoAdjacent(array):
  if len(array) == 0: 
    return 0
  if len(array) == 1: 
    return array[0]

  second = array[0]
  first = max(second, array[1])

  for i in range(2, len(array)):
    curr = max(second + array[i], first)
    second = first
    first = curr

  return first