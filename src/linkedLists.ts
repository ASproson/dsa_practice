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

/**
 * @todo Reverse the passed linked list (a -> b -> null becomes null -> b -> a)
 * @param head ListNode | null
 * @returns reversed linked list
 * @satisfies O(n) time as we must traverse the entire list, O(1) space as list reversal is done in-place
 */
export const reverseList = (head: ListNodeOrNull): ListNodeOrNull => {
    // If head does not exist, there's nothing to reverse
    if (!head) return head;

    // Initialize two pointers: curr to traverse the list and prev to track the reversed portion
    let curr: ListNodeOrNull = head;
    // This will represent the new head of the list when it is reversed, think of it as the tail of the list
    let prev: ListNodeOrNull = null;

    while (curr) {
        // Store the next node in the list so that we point curr to prev
        // null -> a -> b now becomes null <- a | b
        const nextNode: ListNodeOrNull = curr.next;
        curr.next = prev;
        // Move prev and curr forward one node in the list
        prev = curr;
        curr = nextNode;
    }

    // Once the loop is complete, prev now points to the new head of the reversed list
    return prev;
};
