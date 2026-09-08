class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.toLowerCase()
        let n= s.length
        let left = 0
        let right = n-1

        while(left<right){
            while(left<right && !/[a-z0-9]/.test(s[left])){
                left++
            }
            while(left<right && !/[a-z0-9]/.test(s[right])){
                right--
            }

            if(s[left]!==s[right]){
                return false
                
            }
            left++
                right--
        }

        return true

    }
}
