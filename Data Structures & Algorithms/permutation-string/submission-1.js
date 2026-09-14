class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let s1map = new Map()
        for(let char of s1){
            s1map.set(char,(s1map.get(char)||0)+1)
        }

        function mapsMatch(map1,map2){
            for(let[key,value] of map1){
                if(map2.get(key)!==value){
                    return false
                }
            }
            return true
        }

        for(let i=0; i<=s2.length-s1.length;i++){
            let window = s2.slice(i,i+s1.length)
            let windowMap= new Map()

            for(let char of window){
                windowMap.set(char,(windowMap.get(char)||0)+1)
            }

             if(mapsMatch(s1map,windowMap)){
            return true
             }
        }
        return false
    }
}
