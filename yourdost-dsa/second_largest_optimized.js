/**
 * Problem: Find the second largest unique (distinct) number in an array.
 * If it doesn't exist, return -1.
 *
 * Example:
 * [3, 5, 2, 5, 6, 6, 1] -> 5
 * [7, 7, 7] -> -1
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function secondLargestUniqueOptimized(arr) {
    if (!Array.isArray(arr) || arr.length === 0) return -1;

    // Step 1: Remove duplicates using Set (distinct values only)
    const uniqueNums = [...new Set(arr)];

    // Step 2: If there are less than 2 distinct numbers, return -1
    if (uniqueNums.length < 2) return -1;

    // Step 3: Find top two numbers in a single pass (O(n))
    let first = -Infinity;
    let second = -Infinity;

    for (const num of uniqueNums) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second && num < first) {
            second = num;
        }
    }

    return second === -Infinity ? -1 : second;
}

// --- Sample test cases ---
const testCases = [
    { input: [3, 5, 2, 5, 6, 6, 1], expected: 5 },
    { input: [7, 7, 7], expected: -1 },
    { input: [10, 2], expected: 2 },
    { input: [1], expected: -1 },
    { input: [], expected: -1 },
    { input: [5, 4, 3, 2, 1], expected: 4 },
    { input: [10, 10, 9, 8], expected: 9 },
];

for (const { input, expected } of testCases) {
    const result = secondLargestUniqueOptimized(input);
    console.log(`Input: [${input}] => Output: ${result} (Expected: ${expected})`);
}

