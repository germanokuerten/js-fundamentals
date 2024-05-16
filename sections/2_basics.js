///////////////////
// Basics
///////////////////

// 1. Variables

// We use to store data temporarily in a computer’s memory.

// Some rules: 

// variables value are set to undefined by default
// single quotes for strings are more commonly used
// Cannot be a reserved keyword.
//     - ex: let, if, else, var, const, typeof…
// The name should be meaningful and descriptive.
//     - relative to the data
// Cannot start with a number (ex. 1name)
// Cannot contain a space of hyphen (-)
// Variable names are case-sensitive
// Stick to cammel case notation. (The convention for JS)
// variable names are case-sensitive

// best practice is to declare each variable in it's own single line.

let name = 'Germano';
console.log(name)

let firstName = 'Germano'; 
let lastName = 'Kuerten';

///////////////////

// 2. Constants

// The value of a constant cannot change.
// Best practice: if you do not need to reasign, const should be your default choice, otherwise use let.

const interestRate = 0.3;


console.log(interestRate)


///////////////////

// 3. Primite Types

// Primitives / Value Types:
// String
// Number
// Boolean (true / false)
// undefined
// null

let name2 = 'Germano' // String Literal
let age = 30 // Number Literal
let isApproved = false // Boolean Literal (used with logic)
let firstName2 = undefined; // undefined is also a primitive type
let selectedColor = null // We use null in situations where we want to clear the value of a variable.

// ps. true and false are reserved key words. (so they cannot be variable names).

// In ES6 there's another primitive, and that is symbol. 

name2 = 21

typeof name2

///////////////////

// 4. Dynamic typing

// JavaScript is a dynamic language (it's something that separates JS from many other languages)

// 2 types of languages: Static (statically - typed) or Dynamic (Dynamically - typed)

// In JS all numbers (including "float") are number types.

// undefined is the value here, but also the type.

console.log(typeof(name2))
console.log(typeof(firstName2))
console.log(typeof(selectedColor))

///////////////////

// 5. Objects

// Refence Types:
// - Object
// - Array
// - Functions

// Object, a container with properties

// let person = { key value pairs or properties } 
// {} -> an object literal

let person = {
    // key: value
    name: 'Germano',
    age: 34,
}

let car = {
    brakes: 4.5,
    speed: 5.6 
}

// Ways to access the properties:

// Dot Notation (default choice)
console.log(person.name)

car.speed = 5.99

console.log(car.speed)

// Bracket Notation (it has uses, ex: when accessing property dinamically)
person['name']

person['name'] = 'Germanus'

console.log(person.name);
console.log(person);

///////////////////

// 6. Arrays

// List of objects

// A data structure, that we use to represent a list of items
// (A container/list that holds, items)

// ex: a list of products in a shopping cart
// or a list of colors the user has selected

let selectedColors = ['red', 'blue']  // array literal (an empty array)
selectedColors[2] = 55

console.log(selectedColors[0], selectedColors[1]);
console.log(selectedColors);

// Ps. JS is a dynamic language, so the type of variables can change at runtime. And the same principles applys to arrays.

// So the lenght of arrays as well as the type of object we have in an array are dynamic, and can change.

// In other languages every item or object are the same type in an array, in JS array can store many different types.

// Ps. Technically an Array is an object in JS. So therefore Dot Notation will also work. Therefore it also inherits all the properties of an Object.

// .lenght returns the numbers of items/elements in an array.
console.log(selectedColors.length);


///////////////////

// 7. Functions

// Functions are one of the fundamental building blocks in JS.
// A Function is basically a set of statements that performs a task or calculates (and returns) a value.

// The syntax: declare a function, using the function keyword

            // name here is a parameter (a variable that is only meaningful inside of this function)
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// The input here is an argument (the value we suply for the function parameter)
greet('Mano', 'Kuerten')
greet('Manu')


///////////////////

// 8. Types of Functions


// Performing a task (in this case to display something in the console)
function greetExample(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

greetExample()

// Calculates a value
function square(number) {
    return number * number
}

let numberExample = square(2)
console.log(numberExample)


// A real world application is essentially a collection of hundreds or thousands of functions working together to provide the functionality of that application