# Bubble Sort

# 1
def bubbleSort(array):
  for i in range(len(array)):
    swaped = False
    for j in range(1, len(array) - i):
      if array[j-1] > array[j]:
        swap(j-1, j, array)
        swaped = True

      if swaped == False:
        break
  return array


def swap(i, j, arr):
  arr[i], arr[j] = arr[j], arr[i]