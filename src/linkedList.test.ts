/**
 * Select specific describe blocks to run with describe.only
 * Select specific it blocks to run with it.only
 */

import { reverseList, ListNode, ListNodeOrNull, hasCycle } from './linkedLists';
import { arrayToList, listToArray } from './utils/utils';

describe.skip('reverseList()', () => {
    it('should reverse a non-empty list', () => {
        const originalList = arrayToList([1, 2, 3, 4]);
        const reversedList = reverseList(originalList);
        expect(listToArray(reversedList)).toEqual([4, 3, 2, 1]);
    });

    it('should return null for an empty list', () => {
        const originalList: ListNodeOrNull = null;
        const reversedList = reverseList(originalList);
        expect(reversedList).toBeNull();
    });

    it('should handle a single-element list', () => {
        const originalList = new ListNode(1);
        const reversedList = reverseList(originalList);
        expect(listToArray(reversedList)).toEqual([1]);
    });

    it('should handle a list with two elements', () => {
        const originalList = arrayToList([1, 2]);
        const reversedList = reverseList(originalList);
        expect(listToArray(reversedList)).toEqual([2, 1]);
    });
});

describe.skip('hasCycle()', () => {
    it('should return false for an empty list', () => {
        const head: ListNodeOrNull = null;
        expect(hasCycle(head)).toBe(false);
    });

    it('should return false for a single node without a cycle', () => {
        const head = new ListNode(1);
        expect(hasCycle(head)).toBe(false);
    });

    it('should return true for a single node with a cycle', () => {
        const head = new ListNode(1);
        head.next = head; // Creates a cycle
        expect(hasCycle(head)).toBe(true);
    });

    it('should return false for a list without a cycle', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);

        // Create a list: 1 -> 2 -> 3
        node1.next = node2;
        node2.next = node3;
        expect(hasCycle(node1)).toBe(false);
    });

    it('should return true for a list with a cycle', () => {
        const node1 = new ListNode(1);
        const node2 = new ListNode(2);
        const node3 = new ListNode(3);

        // Create a list: 1 -> 2 -> 3 -> 2 (cycle)
        node1.next = node2;
        node2.next = node3;
        node3.next = node2; // Creates a cycle

        expect(hasCycle(node1)).toBe(true);
    });
});
