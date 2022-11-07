// Sort K Sorted Array

// #1
function sortKSortedArray(array, k) {
  const res = []
  const minHeap = new MinHeap()
  for (let i = 0; i < array.length; i++) {
    minHeap.insert(array[i])
  }

  while (minHeap.size()) {
    res.push(minHeap.extractMin())
  }

  return res
}

class MinHeap {
  constructor () {
    this.values = []
  }

  insert(value){
    this.values.push(value)
    this.siftUp()
  }

  extractMin(){
    this.swap(0, this.size() - 1, this.values)
    const removed = this.values.pop()
    this.siftDown()
    return removed
  }

  siftUp(){
    let currIdx = this.size() - 1
    let parentIdx = this.getParentIdx(currIdx)

    while (currIdx > 0 && this.values[currIdx] < this.values[parentIdx]) {
      this.swap(currIdx, parentIdx, this.values)
      currIdx = parentIdx
      parentIdx = this.getParentIdx(currIdx)
    }
  }
  
  siftDown(){
    let currIdx = 0
    let childOneIdx = this.getChildOneIdx(currIdx)

    while (childOneIdx < this.size()) {
      let childTwoIdx = this.getChildTwoIdx(currIdx) < this.size() ? this.getChildTwoIdx(currIdx) : -1
      let idxToSwap = null

      if (childTwoIdx !== -1 && this.values[childOneIdx] >= this.values[childTwoIdx]) {
        idxToSwap = childTwoIdx
      } else {
        idxToSwap = childOneIdx
      }

      if (!idxToSwap) {
        break;
      }

      if (this.values[currIdx] > this.values[idxToSwap]) {
        this.swap(currIdx, idxToSwap, this.values)
      }

      currIdx = idxToSwap
      childOneIdx = this.getChildOneIdx(currIdx)
    }
  }

  getChildOneIdx(idx){
    return 2*idx+1
  }

  getChildTwoIdx(idx){
    return 2*idx+2
  }

  getParentIdx(idx){
    return Math.floor((idx-1)/2)
  }

  swap(i, j, heap){
    [heap[i], heap[j]] = [heap[j], heap[i]]
  }

  size() {
    return this.values.length
  }
}