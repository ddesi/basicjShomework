// Part A: Complete all of the following problems:
// 1. Create a "cheat sheet" JavaScript file that contains working examples with comments of:
// Variables
// Debugging (alerts, comments, the console)
// Different data types
// Arrays
// Comparison (conditionals)
// Logic
// Functions

// ----------------------- CHEATSHEET ----------------------- 

// VARIABLES & ARRAYS

// variables: ways to store values

// give your variables good descriptive names, not x or y or z

// var hello = "Good morning "
// var name = "pretty person "
// var action = "staring at the screen"

// console.log(hello + name + action)

// arrays are listings of data

// remember that index start with ZERO not one!!!
// so the first item on the list is zero

// combine multiple arrays together, called a matrix in math (var porsche + var camera = var cars)

// var hello = ["Good morning ", "Good Evening ", "Oh hi "]
// var names = ["pretty person ", "beautiful soul ", "friend "]
// var greeting = [hello, names]

// console.log(greeting[0][1] + greeting[1][2] + "staring at the screen")


// OBJECTS

// objects: abstract repr of something real
// with attributes (e.g. make and model of the car object)
// name of the key is make or model; the value is toyota or prius
// look at it from left to right

// open bracket plus quotes closed bracket >> you can also use dot notation so use console.log(user.firstName) >> it doesn’t always work instead of console.log(car[‘make’]);

// it is a key value pair so you don’t have to declare it first
// var person = {name: "jenny", height: "5 4"}
// console.log(person["name"])

// if you have more name and height values, the last one is going to overwrite the previous one

// when u define an object u use the curly bracket
// when u define an array you use the square
// but when u need to find the value of both u need to use the []


// LOGIC

// conditionals
// things that happen if a condition is met

// if the name equals orlando, do this
// otherwise do that

// first form of a conditional is a 
// comparison
// comparing 2 strings
// with a triple equal sign ===
// “stringent” === “stringtwo”
// checks that both are strings, besides the value

// it will always return the value of booleans
// so it can other be true or false
// if you compare a string to a number it gives you the value false
// that is why u need to use the triple eq! so you can compare the same type (string w string, number w number)
// it will give you errors eg ig you do 5 + “1” returns “51”
// the plus concatenates eg “s” + “string” returns “string”
// it is an overloaded operator so it depends on what you add it will return a number or a string

// not equal is the sign
// !==
// “stringone” !== “stringtwo”;
// will return true

// also > and < operations, <= and =>

// the IF statement
// if (5>10){
// console.log(“something u will never see”) }
// it will return undefined
// bc you did not give him an alternative for true statement ;)

// chain statements together with a semicolon
// var added = 5 + 5; added * 10
// will return 100

// so 
// if (5>10) {
// console.log (“you won’t see this”) }
// else {
// console.log(“you will see this bc 5 is < 10”);

// when you work with else if and else statements
// only one of them is going to work
// or you can use else else else
// if that is true if will move to the other else


// FUNCTIONS

// pieces of code that u can define and later on run one or multiple times

// eg you have a recipe for something
// the first time u test what works
// then you write a recipe that u are going to use from that point on so u don’t mess up

// also known as an algorithm

// the amount of flour is going to vary though

// function someName(numberOne, otherNumber){
// return numberOne + 10 + otherNumber;
// }
// you are going to return the sum of numberOne, 10 and otherNumber

// then call your are function, giving it a 3 argument values
// so numberOne = 4, otherNumber = 14
// and do console.log(someName(4, 14));
// it will return 28

// they are local variables, they are only valid inside this function bc u have not declared them before
// (variable ghosting replaces them only in that function)

// if you don’t have return you will see undefined in the console
// e.g. if someone clicks on something you don’t wanna return anything, u just wanna run a script

// alerts also return undefined


// DATA TYPES

// var yourData = “this is my data”;
// typeof yourData;
// will return string

// if u wanna get the key from the value >> tell me which index it belongs to

// var snoopyPosition = myArr.indexOf(“Snoopy”);
// console.log
// so it s a predefined function

// list = [“tony”, “orlando”]
// list.indexOf(“orlando”)
// 1

// if you search for something that isn’t there

// list = [orlando, [tony jeremy]]
// list[1].indexOf(jeremy)

// it creates that variable globally
// bc you don’t use var to declare list




// 2. Write 3 different functions that take input and return something via the console or an alert.
var x = 45
console.log(x * 10)


var name = "you "
var what = "are awesome "

console.log(name + what)


var hello = ["Good morning ", "Good Evening ", "Oh hi "]
var names = ["pretty person ", "beautiful soul ", "friend "]
var greeting = [hello, names]

alert(greeting[0][2] + greeting[1][1] + "staring at the screen")













