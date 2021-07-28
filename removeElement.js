
const removeElement = (nums, val) => {
let removed = 0

nums.map((curr) => {
    if (curr !== val) {
      nums[removed++] = curr
      
    }
})
return removed
}


console.log(removeElement([0,1,2,2,3,0,4,2], 2));