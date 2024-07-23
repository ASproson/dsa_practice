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

/**
 * @todo Determine whether or not the passed linked list has a cycle
 * @param head ListNode | null
 * @returns boolean based on existence of a cycle within the linked list
 * @satisfies O(n) time as we must traverse the entire list, O(1) space as we check for a cycle in memory
 */
export const hasCycle = (head: ListNodeOrNull): boolean => {
    // Create two pointers that reference head, they will move at different speeds
    let fast = head;
    let slow = head;
    // whilst fast and fast.next are not null, loop
    while (fast && fast.next) {
        // Advance slow one node at a time
        slow = slow!.next;
        // Advance fast two nodes at a time
        fast = fast.next.next;
        // If the pointers ever overlap, then their values will be the same; indicating we have a cycle
        if (slow === fast) return true;
    }
    // Loop has completed because we reached the end of the list and hit a null, therefore no cycle is present
    return false;
};

/**
 * @todo You are given two sorted lists, merge them into a single linked list and return the head of the new merged list
 * @param list1 ListNodeOrNull
 * @param list2 ListNodeOrNull
 * @returns merged linked list from list1 && list2
 * @satisfies O(n) time as we must traverse the longest list, O(n) space as we must create a new list
 */
export const mergeTwoSortedLists = (
    list1: ListNodeOrNull,
    list2: ListNodeOrNull
): ListNodeOrNull => {
    // Create a dummy node to serve as the starting point of the merged list
    const dummy = new ListNode();
    let curr = dummy; // This will be used to build the new list

    // Traverse both lists and append the smaller node to the merged list
    while (list1 && list2) {
        if (list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next; // Move to the next node in the merged list
    }

    // Append any remaining nodes from either list
    // if (list1) {
    //     curr.next = list1;
    // } else if (list2) {
    //     curr.next = list2;
    // }

    if (!list1) curr.next = list2;
    if (!list2) curr.next = list1;

    // Return the merged list, starting from the node after the dummy
    return dummy.next;
};
