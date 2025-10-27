/**
 * Problem: Find the second largest unique number in an array.
 * If it doesn't exist, return -1.
 *
 * Example:
 * [3, 5, 2, 5, 6, 6, 1] -> 5
 * [7, 7, 7] -> -1
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function secondLargestUnique(arr) {
    // Step 1: Remove duplicates by converting to a Set
    const uniqueNumbers = [...new Set(arr)];

    // Step 2: If fewer than 2 unique numbers, return -1
    if (uniqueNumbers.length < 2) {
        return -1;
    }

    // Step 3: Sort descending
    uniqueNumbers.sort((a, b) => b - a);

    // Step 4: Return second largest
    return uniqueNumbers[1];
}

// --- Sample test cases ---
const testCases = [
    { input: [3, 5, 2, 5, 6, 6, 1], expected: 5 },
    { input: [7, 7, 7], expected: -1 },
    { input: [10, 2], expected: 2 },
    { input: [1], expected: -1 },
    { input: [], expected: -1 },
    { input: [5, 4, 3, 2, 1], expected: 4 },
];

for (const { input, expected } of testCases) {
    const result = secondLargestUnique(input);
    console.log(`Input: [${input}] => Output: ${result} (Expected: ${expected})`);
}

/* How the Code Works

1. Remove duplicates:
Using new Set(arr) gives only distinct values.

2. Check if we have at least two numbers:
If not, the answer is -1.

3. Sort descending:
uniqueNumbers.sort((a, b) => b - a) sorts from largest to smallest.

4. Return the 2nd largest:
The element at index 1 is the second largest.

**Time complexity: O(n log n) due to sorting
**Space complexity: O(n) due to storing unique numbers */ 