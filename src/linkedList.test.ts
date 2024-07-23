/**
 * Select specific describe blocks to run with describe.only
 * Select specific it blocks to run with it.only
 */

import { reverseList, ListNode, ListNodeOrNull } from './linkedLists';
import { arrayToList, listToArray } from './utils/utils';

describe('reverseList()', () => {
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
