import { hasDuplicate } from './arraysAndHashing';

describe('hasDuplicate()', () => {
  const n1 = [1, 2, 3, 3];
  const n2 = [1, 2, 3, 4];
  const n3 = [100];
  it('returns type boolean', () => {
    expect(typeof hasDuplicate(n1)).toEqual('boolean');
  }),
    it('returns true when given array with duplicates', () => {
      expect(hasDuplicate(n1)).toEqual(true);
    }),
    it('returns false when given array with duplicates', () => {
      expect(hasDuplicate(n2)).toEqual(false);
    }),
    it('returns false when given an array length of 1', () => {
      expect(hasDuplicate(n3)).toEqual(false);
    });
});
