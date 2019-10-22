/*

4. Pandigital Numbers
Note: The following question is weird, we know. In interviews, you will absolutely be given coding challenges
 with "weird" questions and you'll need to be very careful when reading these types of questions to make 
 sure you understand what you're being asked to do.

A number of length n is 1-to-n pandigital if it makes use of all the digits 1 to n exactly once.

The number 15234 is 1-to-n pandigital because it is 5 numbers long and includes 1, 2, 3, 4, and 5.
The number 333 is not 1-to-n pandigital.
The number 0 is not 1-to-n pandigital.
The number 987654321 is 1-to-n pandigital.
Write a function that checks if a number is 1-to-n pandigital.



*/
let pan = (num) => {

	let numArray = num.toString().split('').sort();

		for (let i = 0; i < numArray.length - 1; i++) {
			//check for repeating numbers 
			if (numArray[i] === numArray[i + 1]){
				console.log(numArray);
					return false; 
			
			} 	else {
				//check sorted array if index is equal to digits place.
				if (parseInt(numArray[i]) != i+1) {
					console.log(numArray); 
					return false;
				}
			}

		}

		console.log(numArray); 
		return true; 
}



let testNum = 882345
console.log(pan(testNum)); 






/*

//let pandigitalCheck = (number) => 

//turn number into an array 


/*function isPan(num) => { 

let numArray = string(num)num.toString().split('').sort();

let checker = true; 

for (let i=0; i < numArray.length; i++) {

	if numArray[i] != (i+1) {


	checker= false;
	console.log(((i+1)) 
}
}
// now we make the comparisson 
if (num.tostring().split('').sort() === (panDigits)) {

	return true; }

}

 
console.log(isPan(12345))
*/

