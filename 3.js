/*


Calculate
Write a function called calculate.

This function should take three arguments: two numbers and a string.

Name the parameters x, y, and operation.

If operation is equal to "add" it should return the sum of x and y.
If operation is "subtract" it should return return x minus y.
Do the same thing for multiplication, "multiply", and division, "divide".
Bonus: handle when operation is an unrecognized value.
calculate(4, 3, "subtract")  // Logs "1"


*/

let calculate = (x, y, operation) =>{

	if (operation == "add") { 
		return (x+y);
}
	if (operation == "subtract") {
		return (x-y);
}
	if (operation == "multiply") {
		return (x*y);
}
	if (operation == "divide") { 
		return (x%y)
}

}


console.log(calculate(1,2,"add"))