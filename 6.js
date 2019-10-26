/*6. Modify it to make any size grid.
When you have a function that generates this pattern, modify it to take a parameter size. Make the function work for any size, outputting a properly formatted grid of the given width and height. If it helps you to have this set. The very first square should always be white.

Remember to give it a nice semantic name

This problem was adapted from one in Eloquent Javascript.
*/


let newGrid = function(gridSize) {

    for (i = 1; i <= gridSize; i ++) {

    let square = " "

     if (i % 2 !== 0) {
    for (let a = 1; a <= gridSize; a++) {
         if (a % 2 !== 0) {
                    square += " "
                } else if (a % 2 === 0) {
                    square += "#"
                }
            }
            console.log(square);
        } else if (i % 2 === 0) {
            for (let a = 1; a <= gridSize; a++) {
                if (a % 2 !== 0) {
                    square += "#"
                } else if (a % 2 === 0) {
                    square += " "
                }
            }
            console.log(square);
        }
    }
};
newGrid (12);



