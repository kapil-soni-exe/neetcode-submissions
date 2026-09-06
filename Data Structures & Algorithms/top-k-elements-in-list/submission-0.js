class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = new Map()

        for(let chars of nums){
            if(freq.has(chars)){
                freq.set(chars,(freq.get(chars)||0)+1)
            }else{
                freq.set(chars,1)
            }
            
        }
            let entries = Array.from(freq.entries())
          return entries.sort((a,b)=>b[1]-a[1]).slice(0,k).map(pair=>pair[0])
        
    }
}
