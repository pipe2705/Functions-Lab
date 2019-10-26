/*5. Functions + loops: a special partnership
Write a function that, when called ("call" = "invoke") creates a string 
that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space (a "white square")
 or a # character (representing a black square). 
 Hence, the characters should form a chessboard.

Calling your function should print something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

*/


function makeGrid() {
    
for (i = 1; i  <= 8; i ++) {

    let square = " "

     if (i % 2 !== 0) {
        for (let a = 1; a <= 8; a++) {
         if (a % 2 !== 0) {
              square += " "
                } 
        else if (a % 2 === 0) {
                    square += "#"
                }
            }
        console.log(square);
        } 
        else if (i % 2 === 0) {
            for (let a = 1; a <= 8; a++) {
                if (a % 2 !== 0) {
                    square += "#"
                } else if (a % 2 === 0) {
                    square += " "
                }
            }
            console.log(square);
        }
    }
}
makeGrid();
