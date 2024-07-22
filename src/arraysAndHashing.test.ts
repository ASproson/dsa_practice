import { hasDuplicate, isAnagram } from './arraysAndHashing';

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

describe('isAnagram()', () => {
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
