// Reverse Linked List - HARD

// #1
// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null
  let cur = head
  
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }

  return prev
}
