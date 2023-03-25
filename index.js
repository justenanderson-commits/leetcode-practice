// Remove Elements Problem: 

var removeElement = function(nums, val) {
  // Given an array and a number, search the array for the number and remove any instances of that number.
  // Search 
  // Remove 
  // Decrement i
  // return nums.length so the test can check to see if I did it correctly
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === val) {
      nums.splice(i, 1)
      i--
    }
  }
  console.log('Val: ', val)
  console.log('Nums : ', nums)
  return nums.length
};

// Case 1
const nums1 = [0,1,2,2,3,0,4,2]
const val1 = 2
removeElement(nums1, val1)
// Expected output = [0,1,4,0,3]

// Case 2
const nums2 = [3,2,2,3]
const val2 = 3
removeElement(nums2, val2)
// Expected output = [2,2]

// Runtime 77 ms