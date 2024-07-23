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
 * @satisfies O(n) time, O(1) space
 */
export const reverseList = (head: ListNodeOrNull): ListNodeOrNull => {
    return null;
};

/**
 * @todo Determine whether or not the passed linked list has a cycle
 * @param head ListNode | null
 * @returns boolean based on existence of a cycle within the linked list
 * @satisfies O(n) time, O(1) space
 */
export const hasCycle = (head: ListNodeOrNull): boolean => {
    return false;
};

/**
 * @todo You are given two sorted lists, merge them into a single linked list and return the head of the new merged list
 * @param list1 ListNodeOrNull
 * @param list2 ListNodeOrNull
 * @returns merged linked list from list1 && list2
 * @satisfies O(n) time, O(n) space
 */
export const mergeTwoSortedLists = (
    list1: ListNodeOrNull,
    list2: ListNodeOrNull
): ListNodeOrNull => {
    return null;
};
