// Sum of Linked Lists

// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// #1
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let remainder = 0
  const dummy = new LinkedList(-1)
  let cur = dummy

  while (linkedListOne || linkedListTwo) {
    let one = linkedListOne ? linkedListOne.value : 0 
    let two = linkedListTwo ? linkedListTwo.value : 0
    let sum = one + two + remainder
    let temp = new LinkedList(sum % 10)
    remainder = parseInt(sum / 10)
    cur.next = temp
    cur = cur.next

    if (linkedListOne) linkedListOne = linkedListOne.next
    if (linkedListTwo) linkedListTwo = linkedListTwo.next
  }

  if (remainder)
    cur.next = new LinkedList(1)

  return dummy.next
}

// #2
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  const dummy = new LinkedList(0)
  let cur = dummy
  let carry = 0

  let nodeOne = linkedListOne
  let nodeTwo = linkedListTwo

  while (nodeOne || nodeTwo || carry) {
    const valueOne = nodeOne ? nodeOne.value: 0
    const valueTwo = nodeTwo ? nodeTwo.value: 0
    const sum = valueOne + valueTwo + carry

    const newValue = sum % 10
    const newNode = new LinkedList(newValue)

    cur.next = newNode
    cur = cur.next

    carry = Math.floor(sum / 10)
    nodeOne = nodeOne ? nodeOne.next : null
    nodeTwo = nodeTwo ? nodeTwo.next : null
  }

  return dummy.next
}