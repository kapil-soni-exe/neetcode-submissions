class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length){
        return false
      }

      let freq = new Map()
      for(let chars of s){
        freq.set(chars,(freq.get(chars)||0) +1)
      }

      for(let chars of t){
        if(!freq.has(chars)||freq.get(chars)===0){
            return false
        }
        freq.set(chars,freq.get(chars)-1)
      }

      return true
    }
}
