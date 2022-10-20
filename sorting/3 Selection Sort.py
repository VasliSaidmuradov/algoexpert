# Selection Sort

# 1
def selectionSort(array):
  currIdx = 0
  while currIdx < len(array) - 1:
    smallestIdx = currIdx
    for i in range(currIdx + 1, len(array)):
      if array[smallestIdx] > array[i]:
        smallestIdx = i
    swap(currIdx, smallestIdx, array)
    currIdx += 1
  return array

def swap(i, j, arr):
  arr[i], arr[j] = arr[j], arr[i]