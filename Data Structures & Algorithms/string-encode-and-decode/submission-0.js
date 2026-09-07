class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = strs.map((str)=> str.length+"#"+str).join("")
        return newStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let result =[]
        let i=0
        while(i<str.length){
            let hashIndex= str.indexOf("#",i)
            let length = parseInt(str.slice(i,hashIndex))
            let originalStr= str.slice(hashIndex+1,hashIndex+1+length)
            result.push(originalStr)
            i=hashIndex+1+length
        }
        return result
    }
}
