

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