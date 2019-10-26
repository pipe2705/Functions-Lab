
/*
Variable number of arguments
Modify calculate above so that it continues to work as specified in question 3, 
but also lets a user get the square root of a number by specifying only 2 parameters:
the number they want the square root of as the first parameter, and "sqrt" as the second parameter.

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
    if	 (operation == "sqrt" ){//&& ( x || y !== NaN)) {
		return (Math.sqrt(x))
}}

console.log(calculate(9, "sqrt"))


