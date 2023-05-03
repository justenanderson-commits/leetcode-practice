// Square Root of X
var mySqrt = function(x) {
    for (i = 0; i <= x + 1; i++) {
        if (i * i > x) {
            return i - 1    
        }
    }
};

console.log('Should return 2: ', mySqrt(4))
console.log('Should also return 2: ', mySqrt(8))



// Add Binary - 45ms run time
// If the final index position of each string is 0, then so too will our returned string
// If one is a zero and the other a 1, the final index of our result will be a 1.
// If both are 1s, the returned result will be a zero and we carry the one to the next decremented index position.

// var addBinary = (a, b) => {
//     const binaryA = `0b${a}`
//     const binaryB = `0b${b}`
//     const sum = BigInt(binaryA) + BigInt(binaryB)
//     const result = sum.toString(2)
//     return result
// }

// console.log(addBinary('10', '110'))
// // console.log(addBinary('11', '111'))

// Plus One
// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].
// var plusOne = function(digits) {
    
// };

// var plusOne = function(digits) {
//     // console.log('Digits: ' , digits)
//     // // Given an array of numbers as an array, join them together as an integer
//     // let num = digits.join('')
//     // // // Increment + 1 
//     // // console.log('Num: ', num)
//     // num ++
//     // // console.log('New num: ', num)
//     // let result = num.toString()
//     // let answer = result.split('')
//     // console.log('Result: ', result)
//     // console.log('Answer: ', answer)
//     let num = BigInt(digits.join('')) + BigInt(1)
//     let answer = BigInt(num).toString().split('')
//     return answer
    // Split the new number back into an array
    // Return the array with the newly incremented number
// };

// var plusOne = function(digits) {
//     return (BigInt(digits.join("")) + BigInt(1)).toString().split("");
// };


// Length of Last Word

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// var lengthOfLastWord = function(s) {
//     // Given an input of a string of words with spaces (or at least one word),
//     // if the string length contains more than one word
//     // split the string by spaces, assign to an array
//     // s.split(' ')
    
//     // find the length of the last element in the array
//     // return that value
//     let arrayed = s.split(' ')
//     // console.log('Arrayed: ', arrayed)
//     // Need to filter out the empty strings using .filter
//     let filtered = arrayed.filter(string => string != '')
//     // console.log('filtered: ', filtered)
//     let lastElement = filtered[filtered.length - 1]
//     // console.log('Length of last Element: ', lastElement)
//     // console.log('S: ', s)
//     return lastElement.length
// };

// // lengthOfLastWord('Hello World')
// lengthOfLastWord('Dog')
// // Expected output 

// // ALTERNATE SOLUTION - slightly slower run time
// var lengthOfLastWord = function(s) {
//     let filtered = s.split(' ').filter(string => string != '')
//     return filtered[filtered.length - 1].length 
// };






// Search Insert Position

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Example 2:

// Input: nums = [1,3,5,6], target = 2
// // Output: 1
// var searchInsert = function (nums, target) {
//   // Iterate over an array of numbers, finding the target value.

//   // Use a for loop, return i when found.
//   // If not found, return the index where it would be if it were inserted in order.
//   // Must keep track of index vs element value in order to complete the line above.
//   if (nums[nums.length - 1] >= target) {
//     for (let i = 0; i < nums.length; i++) {
//       console.log('I :', i)
//       if (nums[i] === target || nums[i] > target) {
//         return i
//       }
//     }
//   } else {
//     return nums.length
//   }
// }

// Runtime
// 102 ms

// Index of first occurence
// let haystack1 = "sadbutsad"
// let needle1 = "sad"

// var strStr = function(haystack, needle) {
//   let index = haystack.indexOf(needle)
//   if(haystack.includes(needle)) {
//    return index
//   } else {
//    return -1
//   }
// };

// strStr(haystack1, needle1)

// run time 62 ms

// // Remove duplicates
// let nums1 = [1,1,2]
// let nums2 = [0,0,1,1,1,2,2,3,3,4]
// // Expected output = [0,1,2,3,4}

// var removeDuplicates = function(nums) {
//   // Given an array in non-descending order, remove the duplicate elements in-place
//   // Iterate over the nums array
//     // If the element at index i is the same as the element at index i-1, then slice out the element at index i and decrement the value of i.
//   // Continue iterating. Increment i. Repeat.
//   // Returns nums/length because that's what Leetcode wants.

//   for(let i = 0; i < nums.length; i++){
//     console.log('I: ', i)
//     if(nums[i]===nums[i+1]){
//       nums.splice(i+1, 1)
//       i--
//     }
//     // console.log('Nums: ', nums)
//   }

//   return nums.length
// };

// Runtime
// 768 ms

// // Remove Elements Problem:

// var removeElement = function(nums, val) {
//   // Given an array and a number, search the array for the number and remove any instances of that number.
//   // Search
//   // Remove
//   // Decrement i
//   // return nums.length so the test can check to see if I did it correctly
//   for (let i = 0; i < nums.length; i++) {
//     if(nums[i] === val) {
//       nums.splice(i, 1)
//       i--
//     }
//   }
//   // console.log('Val: ', val)
//   // console.log('Nums : ', nums)
//   return nums.length
// };

// // Case 1
// const nums1 = [0,1,2,2,3,0,4,2]
// const val1 = 2
// removeElement(nums1, val1)
// // Expected output = [0,1,4,0,3]

// // Case 2
// const nums2 = [3,2,2,3]
// const val2 = 3
// removeElement(nums2, val2)
// // Expected output = [2,2]

// // Runtime 77 ms
