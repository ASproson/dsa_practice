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
    return null;
};
