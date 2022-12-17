// Merging Linked Lists

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// #1 O(n+m) time | O(n) space where n is length of first LL m is length of second LL
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  const set = new Set()
  let currOne = linkedListOne
  let currTwo = linkedListTwo
  while (currOne) {
    set.add(currOne.value)
    currOne = currOne.next
  }
  while (currTwo) {
    if (set.has(currTwo.value)) {
      break
    }
    currTwo = currTwo.next
  }
  return currTwo
}

// #2 O(n+m) time | O(1) space where n is length of first LL m is length of second LL
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currOne = linkedListOne
  let countOne = 0
  while (currOne) {
    countOne++
    currOne = currOne.next
  }
  let currTwo = linkedListTwo
  let countTwo = 0
  while (currTwo) {
    countTwo++
    currTwo = currTwo.next
  }
  const diff = Math.abs(countOne - countTwo)
  let biggerCurrentNode = countOne > countTwo ? linkedListOne : linkedListTwo
  let smallerCurrentNode = countOne > countTwo ? linkedListTwo : linkedListOne
  for (let i = 0; i < diff; i++) {
    biggerCurrentNode = biggerCurrentNode.next
  }
  while (biggerCurrentNode !== smallerCurrentNode) {
    biggerCurrentNode = biggerCurrentNode.next
    smallerCurrentNode = smallerCurrentNode.next
  }
  return biggerCurrentNode
}

// #3 O(n+m) time | O(1) space where n is length of first LL m is length of second LL
function mergingLinkedLists(linkedListOne, linkedListTwo) {
  let currOne = linkedListOne
  let currTwo = linkedListTwo

  while (currOne !== currTwo) {
    if (currOne === null) {
      currOne = linkedListTwo
    } else {
      currOne = currOne.next
    }

    if (currTwo === null) {
      currTwo = linkedListOne
    } else {
      currTwo = currTwo.next
    }
  }
  
  return currOne
}
