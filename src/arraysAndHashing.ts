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
