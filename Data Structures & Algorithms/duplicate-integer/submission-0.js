class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let s = new Set()
        for(let i=0;i<nums.length;i++){
            if(s.has(nums[i])){
                return true
            }else{
                s.add(nums[i])
            }
        }

        return false
    }
}
