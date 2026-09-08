class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b)
        let result = []
        for (let i = 0; i < nums.length; i++) {
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue;
            }
            let left = i + 1
            let right = nums.length - 1
            let targetSum = -nums[i]

            while (left < right) {
                let sum = nums[left] + nums[right]

                if (targetSum === sum) {
                    result.push([nums[i], nums[left], nums[right]])
                    left++
                    right--

                    while (left < right && nums[left] === nums[left - 1]) {
                        left++
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--
                    }
                }else if(sum<targetSum){
                    left++
                }else{
                    right--
                }
            }

        }
        return result
    }
}
