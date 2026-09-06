class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = []
        let cols= []
        let boxes=[]

        for(let i=0; i<9;i++){
            rows.push(new Set())
            cols.push(new Set())
            boxes.push(new Set())
        }

        for(let row=0;row<9;row++){
            for(let col=0;col<9;col++){

                let value= board[row][col]

                if(value===".") continue;

                if(rows[row].has(value)){
                    return false
                }else{
                    rows[row].add(value)
                }

                if(cols[col].has(value)){
                    return false
                }else{
                    cols[col].add(value)
                }

                let boxIndex = Math.floor(row/3)*3 + Math.floor(col/3)

                if(boxes[boxIndex].has(value)){
                    return false
                }else{
                    boxes[boxIndex].add(value)
                }
            }
        }

        return true
    }
}
