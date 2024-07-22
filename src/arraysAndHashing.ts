// npm run test:arrayHash

/**
 * @todo Determine whether or not the passed nums array has duplicates in O(n) time
 * @param nums array of numbers
 * @returns boolean based on whether or not passed array contains duplicates
 * @satisfies O(n) time as traverse the passed array a maximum of one times in the worst case scenario. O(n) space as we potentially store an entirely unique array in the set
 */
export const hasDuplicate = (nums: number[]): boolean => {
  if (nums.length <= 1) return false;

  const set = new Set();
  for (const num of nums) {
    // O(1) lookup to set
    if (set.has(num)) return true;
    // O(1) adding to set
    set.add(num);
  }

  return false;
};

/**
 * @todo Determine whether or not the passed strings are anagrams
 * @param s string
 * @param t string
 * @returns boolean based on whether or not passed strings are anagrams
 * @satisfies O(n) time and O(n) space
 */
export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const sCount: { [key: string]: number } = {};
  const tCount: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = 1 + (sCount[s[i]] || 0);
    tCount[t[i]] = 1 + (tCount[t[i]] || 0);
  }

  for (const key in sCount) {
    if (sCount[key] !== tCount[key]) return false;
  }

  return true;
};
