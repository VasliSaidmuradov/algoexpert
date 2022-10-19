# Min Heap Construction

#1
# Do not edit the class below except for the buildHeap,
# siftDown, siftUp, peek, remove, and insert methods.
# Feel free to add new properties and methods to the class.
class MinHeap:
    def __init__(self, array):
        # Do not edit the line below.
        self.heap = self.buildHeap(array)

    # Time O(n) | Space O(1)
    def buildHeap(self, array):
        firstParentIdx = (len(array) - 2) // 2
        for idx in reversed(range(firstParentIdx + 1)):
            self.siftDown(idx, len(array) - 1, array)
        return array

    # Time O(log(n)) | Space O(1)
    def siftDown(self, currIdx, endIdx, heap):
        childIdxOne = currIdx * 2 + 1

        while childIdxOne <= endIdx:
            childIdxTwo = currIdx * 2 + 2 if currIdx * 2 + 2 <= endIdx else -1
            if childIdxTwo != -1 and heap[childIdxTwo] < heap[childIdxOne]:
                idxToSwap = childIdxTwo
            else:
                idxToSwap = childIdxOne

            if heap[idxToSwap] < heap[currIdx]:
                self.swap(idxToSwap, currIdx, heap)
                currIdx = idxToSwap
                childIdxOne = currIdx *2 + 1
            else:
                break

    # Time O(log(n)) | Space O(1)
    def siftUp(self, currIdx, heap):
        parentIdx = (currIdx - 1) // 2
        while currIdx > 0 and heap[currIdx] < heap[parentIdx]:
            self.swap(currIdx, parentIdx, heap)
            currIdx = parentIdx
            parentIdx = (currIdx - 1) // 2
        
    # Time O(1) | Space O(1)
    def peek(self):
        return self.heap[0]

    # Time O(log(n)) | Space O(1)
    def remove(self):
        self.swap(0, len(self.heap) - 1, self.heap)
        removed = self.heap.pop()
        self.siftDown(0, len(self.heap) - 1, self.heap)
        return removed

    # Time O(log(n)) | Space O(1)
    def insert(self, value):
        self.heap.append(value)
        self.siftUp(len(self.heap) - 1, self.heap)

    def swap(self, i, j, heap):
        heap[i], heap[j] = heap[j], heap[i]
