class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let n = nums.length
        let left=new Array(n)
        let right=new Array(n)
        let result=new Array(n)
        let runningProduct =1

        for(let i=0;i<n;i++){
            left[i]=runningProduct
            runningProduct = runningProduct*nums[i]
        }
        runningProduct=1
        for(let i=n-1;i>=0;i--){
            right[i]=runningProduct
            runningProduct=runningProduct*nums[i]
        }

        for(let i=0;i<n;i++){
            result[i]=left[i]*right[i]
        }


        return result

    }
}
