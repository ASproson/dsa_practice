// npm run test:linkedList
// Be sure to remove .skip from relevant describe blocks in linkedList.test.ts

// git diff main..solutions src/linkedList.ts

/**
 * Definition for a singly-linked list
 */
export type ListNodeOrNull = ListNode | null;
export class ListNode {
  val: number;
  next: ListNodeOrNull;
  constructor(val = 0, next = null) {
    (this.val = val), (this.next = next);
  }
}

export const reverseList = (head: ListNodeOrNull): ListNodeOrNull => {
  let curr: ListNodeOrNull = head;
  let prev: ListNodeOrNull = null;

  while (curr) {
    const nextNode: ListNodeOrNull = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }

  return prev;
};
