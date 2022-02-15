// Remove Duplicates From Linked List


// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// #1
function removeDuplicatesFromLinkedList(linkedList) {
  let cur = linkedList

  while (cur.next) {
    const next = cur.next
    if (cur.value === next.value) {
      cur.next = next.next
    } else {
      cur = next
    }
  }

  return linkedList
}


// #2
function removeDuplicatesFromLinkedList(linkedList) {
  if (linkedList === null) return linkedList

  let prev = linkedList
  let cur = linkedList.next

  while (cur) {
    if (prev.value === cur.value) prev.next = cur.next
    else prev = cur

    cur = cur.next
  }

  return linkedList
}