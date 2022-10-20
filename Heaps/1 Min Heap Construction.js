// Min Heap Construction

// #1
// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2)
    for (let i = firstParentIdx; i >= 0; i--) {
      this.siftDown(i, array.length - 1, array)
    }
    return array
  }

  siftDown(currIdx, endIdx, heap) {
    let childOneIdx = this.getChildOneIdx(currIdx)

    while (childOneIdx <= endIdx) {
      let childTwoIdx = this.getChildTwoIdx(currIdx) <= endIdx ? this.getChildTwoIdx(currIdx) : -1
      let idxToSwap = -1
      if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }

      if (heap[currIdx] > heap[idxToSwap]) {
        console.log(currIdx, idxToSwap)
        this.swap(currIdx, idxToSwap, heap)
      }

      currIdx = idxToSwap
      childOneIdx = this.getChildOneIdx(currIdx)
    }
  }

  siftUp(currIdx, heap) {
    let parentIdx = this.getParentIdx(currIdx)
    while (currIdx > 0 && this.heap[currIdx] < this.heap[parentIdx]) {
      this.swap(currIdx, parentIdx, heap)
      currIdx = parentIdx
      parentIdx = this.getParentIdx(currIdx)
    }
  }

  peek() {
    return this.heap[0]
  }

  remove() {
    this.swap(0, this.heap.length - 1, this.heap)
    const removedElem = this.heap.pop()
    this.siftDown(0, this.heap.length - 1, this.heap)
    return removedElem
  }

  insert(value) {
    this.heap.push(value)
    this.siftUp(this.heap.length - 1, this.heap)
  }

  swap(i, j, heap) {
    [heap[i], heap[j]] = [heap[j], heap[i]]
  }

  getParentIdx(currIdx) {
    return Math.floor((currIdx - 1) / 2)
  }

  getChildOneIdx(currIdx) {
    return currIdx * 2 + 1
  }

  getChildTwoIdx(currIdx) {
    return currIdx * 2 + 2
  }
}

// Do not edit the line below.
exports.MinHeap = MinHeap;
