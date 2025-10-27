# DSA Problem - Second Largest Unique Number

## Problem
Given an array of integers, return the second largest unique number in the array.  
If it doesn’t exist, return -1.

### Example
Input: [3, 5, 2, 5, 6, 6, 1]
Output: 5

Input: [7, 7, 7]
Output: -1

## Approach

1. Convert array to a `Set` to remove duplicates.
2. Convert the set back to an array.
3. Sort it in descending order.
4. Return the element at index `1` (the second largest).
5. If fewer than 2 elements exist, return `-1`.

**Time Complexity:** O(n log n)  
**Space Complexity:** O(n)

---

## Sample Code (JavaScript)

```javascript
function secondLargestUnique(arr) {
  const uniqueNumbers = [...new Set(arr)];
  if (uniqueNumbers.length < 2) return -1;
  uniqueNumbers.sort((a, b) => b - a);
  return uniqueNumbers[1];
}

## Run the Code
node second_largest.js

## Output
Input: [3,5,2,5,6,6,1] => Output: 5
Input: [7,7,7] => Output: -1