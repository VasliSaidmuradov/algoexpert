// Remove Kth Node From End


// O(n) time | O(1) space
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
  // Write your code here.
  let cur = head
  let temp = head
  let i = 1

  while (i <= k) {
    temp = temp.next
    i++
  }

  if (!temp) {
    head.value = head.next.value
    head.next = head.next.next
    return head
  }

  while (temp.next) {
    temp = temp.next
    cur = cur.next
  }

  cur.next = cur.next.next
  return head
}