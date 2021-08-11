const searchInsert = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        if (curr === target) {
            return i
        } else {
            nums.push(target)
            break
        }
        
    }
    nums.sort((a, b) => a - b)
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === target) {
            return j
        }
        
    }
    
}

console.log(searchInsert([1,2,3,4,5,10], 3))