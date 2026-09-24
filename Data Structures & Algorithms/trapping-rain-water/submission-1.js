class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let n = height.length
        let leftMax = new Array(n)
        let rightMax = new Array(n)

        let currentMax = height[0]

        for(let i=0;i<n;i++){
            currentMax = Math.max(currentMax,height[i])
            leftMax[i]=currentMax 
        }

        currentMax = height[n-1]
        for(let i =n-1;i>=0;i--){
            currentMax = Math.max(currentMax,height[i])
            rightMax[i]=currentMax 
        }
        let totalWater =0 
        for(let i=0;i<n;i++){
            let waterlevel = Math.min(leftMax[i],rightMax[i])
            totalWater+=(waterlevel-height[i])
        }

      return totalWater

    }
}
