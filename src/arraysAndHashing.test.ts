import { hasDuplicate, isAnagram, twoSum } from './arraysAndHashing';

/**
 * Select specific describe blocks to run with describe.only
 * Select specific it blocks to run with it.only
 */

describe.skip('hasDuplicate()', () => {
    const n1 = [1, 2, 3, 3];
    const n2 = [1, 2, 3, 4];
    it('returns type boolean', () => {
        expect(typeof hasDuplicate(n1)).toEqual('boolean');
    });
    it('returns true when given array with duplicates', () => {
        expect(hasDuplicate(n1)).toEqual(true);
    });
    it('returns false when given array with no duplicates', () => {
        expect(hasDuplicate(n2)).toEqual(false);
    });
});

describe.skip('isAnagram()', () => {
    const s1 = 'racecar';
    const t1 = 'carrace';

    const s2 = 'han';
    const t2 = 'luke';

    it('returns type boolean', () => {
        expect(typeof isAnagram(s1, t1)).toEqual('boolean');
    });
    it('return true when passed strings are anagrams', () => {
        expect(isAnagram(s1, t1)).toEqual(true);
    });
    it('return false when passed strings that are not anagrams', () => {
        expect(isAnagram(s2, t2)).toEqual(false);
    });
});

describe.skip('twoSum()', () => {
    const n1 = [3, 4, 5, 6];
    const t1 = 7;

    const n2 = [4, 5, 6];
    const t2 = 10;

    const n3 = [0, 2, 4, 7];
    const t3 = 7;

    it('returns type object (array)', () => {
        expect(typeof twoSum(n1, t1)).toEqual('object');
    });
    it('returns an array of length 2', () => {
        expect(twoSum(n1, t1)).toHaveLength(2);
    });
    it('returns [0, 1] when given n1, t1', () => {
        expect(twoSum(n1, t1)).toEqual([0, 1]);
    });
    it('returns [0, 2] when given n2, t2', () => {
        expect(twoSum(n2, t2)).toEqual([0, 2]);
    });
    it('returns [0, 3] when given n3, t3', () => {
        expect(twoSum(n3, t3)).toEqual([0, 3]);
    });
});
