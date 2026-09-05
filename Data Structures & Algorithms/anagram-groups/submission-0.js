class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map()
        for(let str of strs){
            let sortedKey = str.split("").sort().join("")
            if(map.has(sortedKey)){
                map.get(sortedKey).push(str)
            }else{
                map.set(sortedKey,[str])
            }
        }
        return Array.from(map.values())
    }
}
