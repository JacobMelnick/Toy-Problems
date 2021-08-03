const merge = (nums1, m, nums2, n) => {
    nums1 = nums1.concat(nums2).sort()
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[0] < 1) {
            nums1.shift()
        }
    }
  return nums1
}


console.log(merge([0], 0, [1], 1));