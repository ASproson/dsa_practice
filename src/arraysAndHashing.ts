// npm run test:arrayHash
// Be sure to remove .skip from relevant describe blocks in arraysAndHashing.test.ts

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
 * @satisfies O(n) time as we must traverse both strings entirely, O(n) space as must store each character and its count in a hash map
 */
export const isAnagram = (s: string, t: string): boolean => {
  // If the strings are not of equal length, they cannot be anagrams
  if (s.length !== t.length) return false;

  // Anagrams must have equal counts for each character
  const sCount: { [key: string]: number } = {};
  const tCount: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    // If character does not exist in map, set it's default to 1
    // If it does exist, add 1 to it's current count
    sCount[s[i]] = 1 + (sCount[s[i]] || 0);
    tCount[t[i]] = 1 + (tCount[t[i]] || 0);
  }

  // Loop over hash map in order, if the values do not match, it is not an anagram
  for (const key in sCount) {
    if (sCount[key] !== tCount[key]) return false;
  }

  // If the loop exists without returning, we know we have an anagram
  return true;
};

/**
 * @todo Given an array of integers and a target, return the indices of the two nums that equal the target
 * @param nums number array
 * @param target number
 * @returns an array containing the two indices that sum to the target
 * @satisfies O(n) time and O(n) space
 */
export const twoSum = (nums: number[], target: number): number[] => {
  const map: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    const diff = target - curr;
    if (map[diff] !== undefined) {
      return [map[diff], i];
    }
    map[curr] = i;
  }

  return [-1, -1];
};
