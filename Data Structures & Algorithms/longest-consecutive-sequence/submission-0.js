class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let numSet = new Set(nums)
        let maxLength=0

        for(let num of numSet){
            if(!numSet.has(num-1)){
                let currentLength=0
                let currentNum=num

                while(numSet.has(currentNum)){
                    currentNum++
                    currentLength++
                }
                
                if(currentLength>maxLength){
                    maxLength=currentLength
                }
            }
        }

        return maxLength
    }
}
