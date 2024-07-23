/**
 * Select specific describe blocks to run with describe.only
 * Select specific it blocks to run with it.only
 */

import {
    reverseList,
    ListNode,
    ListNodeOrNull,
    hasCycle,
    mergeTwoSortedLists,
} from './linkedLists';
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

describe.skip('mergeTwoSortedLists()', () => {
    it('should return null when both lists are empty', () => {
        const list1: ListNode | null = null;
        const list2: ListNode | null = null;
        const mergedList = mergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([]);
    });

    it('should return the non-empty list when one list is empty', () => {
        const list1 = null;
        const list2 = arrayToList([1, 2, 3]);
        const mergedList = mergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 2, 3]);
    });

    it('should merge two non-empty lists without overlap', () => {
        const list1 = arrayToList([1, 3, 5]);
        const list2 = arrayToList([2, 4, 6]);
        const mergedList = mergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should merge two non-empty lists with some overlapping values', () => {
        const list1 = arrayToList([1, 4, 5]);
        const list2 = arrayToList([2, 3, 5, 6]);
        const mergedList = mergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 5, 6]);
    });

    it('should merge lists of different lengths', () => {
        const list1 = arrayToList([1, 3]);
        const list2 = arrayToList([2, 4, 5, 6]);
        const mergedList = mergeTwoSortedLists(list1, list2);
        expect(listToArray(mergedList)).toEqual([1, 2, 3, 4, 5, 6]);
    });
});
