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

/*let grid = (length, width) => {


let white = " "
let black = "#"
let blankPage = 

	for (let i = 0; i < 


//for width " "
*/


let map = [];

createMap();

console.log(map);

function createMap() {
    for (let x = 0; x < 5; x++) {
    				map[x] = [];
        for (let y = 0; y < 5; y++) {
            addCell(x, y); 
        }
    }
}

function addCell(x, y) {
    map[x][y] = cell(x,y); // create a new object on x and y
}

function cell(x,y) {
	return (x+1)+":"+(y+1);
}


/*function makeBlocks() {
        for (var i = 0; i < 3; i++) {
            var row = document.createElement('div');
            row.className = "row";
            for (var j = 0; j < 3; j++) {
                var box = document.createElement('div');
                box.className = "box";
                row.appendChild(box);
            }                
            document.getElementById('boxParent').appendChild(row);
        }
    }

console.log(makeBlocks)

*/


