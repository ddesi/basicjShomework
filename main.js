// Part B: Complete four of the following problems:

// 1. Create a script with two variables assigned to two numbers. Add them together and output the result to the console. Now do the same with two strings.

var x = 20;
var y = 10;
console.log(x + y);

var youKnow = "You know nothing ";
var firstName = "John Snow";
console.log(youKnow + firstName);


// 2. Create a multidimensional array related to a subject that interests you. Output two of the items in sub-arrays to the console.

var realNominees = ["Idris", "Tessa", "Boyega"];
var soWhite = ["Leo", "Matt", "Michael"];
var oscars = [realNominees, soWhite];
console.log(oscars[0][0] + " not " + oscars[1][0]);


// 3. Write a script that checks if a variable is less than 10. If it is, alert the user that their variable is less than 10. If it is not, using the console, let the user know that what the variable was and that it was greater than 10.

var x = 12;

if(x<10) {
	alert("if x is less than 10 you will see this");
} else {
	alert("if x is greater than 10 you will see this");
}


// 4. Try running the script and then changing the variable's value to see how this affects the program's output.
// done


// 5. Write a similar program to check if a string stored in a variable is the same as another string.

var stringOne = "blue";
var stringTwo = "orange";

if (stringOne === stringTwo) {
	console.log("the strings are the same");
} else {
	console.log("the strings are different");
}


// 6. Declare a function that takes a name as an argument and tells the user what name they've entered. Try running it after it has been declared.

var name = "johnny";

function randomName(name){
	return "the name that you entered is " + name;
}
console.log(randomName(name));


// 7. Declare a function that takes no arguments but prints something to the console. Try running it after it has been declared.

function noArgument(){
	return "";
}
console.log("this function had no arguments");


// Additional Problem
// 1. Declare a function that depending upon which virtual 'door' was entered tells the user they've received a different 'prize' in an alert. After declaring the function, try running it with different options.

function virtualDoor (number) {
	if(number == 1) {
		console.log("you won a cruise");
	} else if(number == 2) {
		console.log("you won a movie ticket");
	} else if(number => 3) {
		console.log("you won a free hug");
	}
};
virtualDoor(1);
