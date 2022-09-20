

# 1 Time O(n) | Space O(n)
def firstDuplicateValue(array):
  hashSet = set()

  for i in array:
    if i in hashSet:
      return i
    hashSet.add(i)

  return -1


# 2 Time O(n) | Space O(1)
def firstDuplicateValue(array):
  for val in array:
    absVal = abs(val)
    if(array[absVal-1] < 0):
      return absVal
    array[absVal-1] *= -1

  return -1
