 /*reverseString
Write a function, reverseString, that accepts a single argument, a string. 
The function should return a string with the order of the characters reversed.
*/

//reverseString("Hello, world!")  // logs !dlrow ,olleH

let reverseString = (string) => {

let newString = " "; 

for (let i = string.length - 1; i >= 0; i--)	

newString += string[i]; 

return newString 

}

console.log(reverseString("Hello, World!")); 





