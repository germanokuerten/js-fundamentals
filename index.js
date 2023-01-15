// a statement: a piece of code that expresses an action to be carried out.
// for comments we usually write why's and how's for other developers.
console.log('Hello Mundão');


///////////////////
// Basics
///////////////////

// 1. Variables

// We use to store data temporarily in a computer’s memory.

// Some rules: 

// single quotes for strings are more commonly used
// Cannot be a reserved keyword.
//     - ex: let, if, else, var, const, typeof…
// The name should be meaningful and descriptive.
//     - relative to the data
// Cannot start with a number (ex. 1name)
// Cannot contain a space of hyphen (-)
// Variable names are case-sensitive
// Stick to cammel case notation. (The convention for JS)

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
// Boolean
// undefined
// null

let name2 = 'Germano' // String Literal
let age = 30 // Number Literal
let isApproved = false // Boolean Literal
let firstName2 = undefined;
let selectedColor = null

// In ES6 there's another primitive, and that is symbol. 

///////////////////

// 4. Dynamic typing

// JavaScript is a dynamic language

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

// let person = { key value pairs or properties }  -> an object literal

let person = {
    // key: value
    name3: 'Germano',
    age: 34,
}

// Ways to access the properties:

// Dot Notation (default choice)
console.log(person.name3)

// Bracket Notation (it has uses, ex: when accessing property dinamically)
person['name3']

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


///////////////////


///////////////////
// Operators
///////////////////

// 1. JS Operators

// The different types of operators in JS

// Arithmetic
// Assignment 
// Comparison
// Logical 
// Bitwise


///////////////////

// 2. Arithmetic Operators

let x = 10
let y = 3

// the two operands x + y is an expression in JS
console.log(x + y)  // addition
console.log(x - y)  // subtraction
console.log(x * y)  // multiplication
console.log(x / y)  // division
console.log(x % y)  // remainder of division
console.log(x ** y) // Exponentiation (x to the power of y)

// Increment (++)
console.log(x) // x is 10

console.log(x++)  // x will log 10, but is actually 11 after ++
console.log(++x)  // ++ (increments 1) and x is now 12 and will log 12.

// Decrement (--)
console.log(--x) // here it decrements 1, so x is now 11.
console.log(x--) // x will log 11, minus 1, then x becomes 10. 
console.log(x)   // so now x is 10.


///////////////////

// 3. Assignment Operator

let z = 10

// z++ is the same as z = z + 1

// both the same
z = z + 5
z += 5

// both the same
z = z * 3
z *= 3


///////////////////

// 4. Comparison Operators
console.log('Comparison Operators');

x = 1

// Relational

// Greater than
console.log(x > 0);  // true
// Greater or equal
console.log(x >= 1); // true
// less than   
console.log(x < 1); // false
// less than or equal
console.log(x <= 1); // true

// Equality 
console.log(x === 1); // true
console.log(x !== 1); // false


///////////////////

// 5. Equality Operators
console.log('Equality Operators');

// Strict Equality (same type + value)
console.log(1 === 1);

// Lose Equality (// it converts the type of the right to match the type of the left) (and only checks for the value)
console.log(1 == 1); // true
console.log('1' == 1); // true
console.log(0 == true);
console.log(1 == true); 


///////////////////

// 6. Ternary Operator

// if a customer ha more than 100 points,
// they are a 'gold' customer, 
// otherwise, they are a 'silver' customer.

let points = 110;
let kind = points > 100 ? 'gold' : 'silver';

console.log(kind);


///////////////////

// 7. Logical Operators
console.log('Logical Operators');

// Logical AND (&&)
// Returns TRUE if both operands are TRUE

console.log(true && true)

let highIncome = true
let goodCreditScore = false

let eligibleForLoan = highIncome && goodCreditScore
console.log('Eligible:', eligibleForLoan)

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE

console.log('||', highIncome || goodCreditScore)

// NOT (!) (Returns the opposite)
let applicationRefused = !eligibleForLoan
console.log('Refused:', applicationRefused);


///////////////////

// 8. Logical Operators with Non-booleans

console.log(false || true); // returns true
console.log(false || 'Mano') // returns "Mano"
console.log(false || 1) // returns 1

// Falsy (false):
// undefined
// null
// 0
// false
// ''
// NaN

// With the logical OR || operators as soon as we find a value that is truthy that operand is returned, and this is called short-circuiting.

console.log(false || 1 || 2) // so here it returns 1.


// with this technique, we can provide default values.
let userColor = null
let defaultColor = 'blue'
let currentColor = userColor || defaultColor

console.log(currentColor)


///////////////////

// 9. Bitwise Operators

// Humans use the decimal system
// but machines use binary system (1's and 0's)

// in Binary: 
// 1 = 00000001   (Each digit is a bit, so 8 bits here or 1 byte of information)
// 2 = 00000010

console.log(1 | 2);  // Bitwise OR 

// 3 = 00000011

console.log(1 & 2);  // Bitwise AND   (if both numbers are 1, 1 will be returned. Otherwise returns 0)

// R = 00000000

///

// Read, Write, Execute
// 00000100
// 00000010
// 00000111

const readPermission = 4
const writePermission = 2
const executePermission = 1

let myPermission = 0

// with bitwise OR operator we can add permissions
myPermission = myPermission | readPermission | writePermission

// with bitwise AND operator we can check to see if we have a given permission
let message = (myPermission & readPermission) ? 'yes' : 'no'

console.log(message);


///////////////////

// 9. Operators Precedence

let x1 = 2 + 3 * 4;
console.log(x1);  // result is 14

// thats bc multiplication has higher precedence

// It's hard to memorize all the higher precedences, so when working with more complex expressions you can use parantheses. 

// so in this case (2 + 3) will be evaluated first
let x2 = (2 + 3) * 4
console.log(x2);


/////////////////// 

// 10. Quiz

// 1.
console.log(true && '4' == 6-2);

// 2. 
console.log((true && false) || true);

// 3. What is the value of y3?
let x3 = 10
let y3 = (x3 >= 10) ? 1 : 0

console.log(y3)

// 4. What is the value of x4?

let x4 = (2 + 3) * (4 + 5);
console.log(x4);

// 5. Which expression returns true?

console.log('1' === 1); // false
console.log(1 == 1); // true
console.log(1 === 1); // true

// 6. What is the value of x5?

let x5 = (1 == true)
console.log(x5);

// 7. What is the value of y6?

let x6 = 10;
let y6 = (x6 > 5) && (x6 < 15)

console.log(y6);

// 8. What is the value of x7?

let x7 = 5
x7 += 3

console.log(x7);

// 9. What is the value of y8?

let x8 = 10
let y8 = x8++    // ++ gets computed after x8 is computed into y8

console.log('y8 is ', y8);

// 10. What is the value of y9?

let x9 = 1
let y9 = x9 !== 2

console.log('1 not equal to 2', y9);


/////////////////// 

// 12. Exercise 

let a = 'red'
let b = 'blue'

let c = b

b = a
a = c

console.log(a);
console.log(b);


///////////////////


///////////////////
// Control Flow
///////////////////


// 1. If... else

// Conditional Statemnets (In JS)
// If... else
// Switch... case

// Ex.
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: Good afternoon!
// Otherwise: Good evening!

// So, if (condition is true) then the statement will be executed.
// And, you can have as many conditions as you'd like

// Ps. for neatness, when using a single statement you can get rid of the curly braces.

let hour = 22

let print = console.log()

if (hour >= 6 && hour < 12) 
    console.log('Good Morning!')
else if (hour >= 12 && hour < 18) 
    console.log('Good Afternon')
else 
    console.log('Good Evening!')


// ex. 2
let hour2 = 6

if (true) {

}
else if (true) {

}
else if (false) {

}
else statement 


///////////////////

// 2. Switch... case

// example:
// switch (variable) {
// }

// ps. Once you have a break, it will jump out of the code block.


let role = 'moderator';

switch (role) {
    case 'guest':
        console.log('Guest User')
        break
    
    case 'moderator':
        console.log('Moderator User')
        break
    
    default: 
        console.log('Unknown User');
}

// Basically we can compare the value of a variable against a bunch of other values.
// Ps. these values can be strings, numbers or booleans (less common).

// Same thing below as above but with if statments instead. One is not better than the other, if statements can look cleaner but switch case statements can be more explicit and clearer.

if (role === 'guest') console.log('Guest User');
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown');


///////////////////

// 3. For (loop)

// Loops: In JS we have several kinds of loops, but all these loops essentially do the same thing, they repeat an action a number of times.

// Types of loops:

// - For, 
// - While, 
// - Do...while, 
// - For...in,
// - For...of

// but there's a subtle difference of how they start and how they end.

// - For:
// We need 3 statements

// for (initialExpression, condition, increment expression)
//      statement
// 1. i is short for index (used as a convention, also called the loop variable)
// 2. the loop will run as long as the condition evaluates to true. (once it's false, it stops)
// 3. then we use the increment operator to increment the value of i with 1. (Which happens after the first iteration)
// 4. then finally we can run a statement or more statements (in code block if multiple statements)

for (let i = 0; i < 5; i++) {
    console.log('Hello World', i)
}

// Example: to find even or odd numbers.

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

// Example: to go backwards (reverse order)

for (let i = 5; i > 0; i--) {
    console.log('decrementing:', i)
}


///////////////////

// 4. While loop

// In for loop the loop variable is part of the loop itself.
// but in while loops, you have to declare this while variable externally.

// Ps. this i is different then the i in the previous for loop because of scope, the i in for loop only exists within the for loop scope.

// while (condition) {"the body of the while loop"}

// let i = 9;

// while (i <= 5) {
//     if (i % 2 === 0) {
//         console.log('while:', i) 
//     }
//     i++
// }


///////////////////

// 5. Do... while loop

// Do while loops are very similar to while loops, but with a slight difference. The difference is that in a Do while loop the code is executed as least once (even if the condition at the end evaluates to false).
// in Do while loops, the variable also needs to be declared externally.

let i = 9;

do {
    if (i % 2 !== 0) {
        console.log('do while:', i) 
    }
    i++
} while (i <= 5)  


// ps. Do while loops are not very used in the real world, most of the time you will be using a for loop or a while loop.


///////////////////

// 6. Infinite Loops

// It's a loop that executes infinitely. 
// If you ended up creating one, it may crash your browser or your computer.

//Examples. 

// let i = 0
// while (i < 5) {
//     console.log(i)   
// }

// while (true){
// }


// do {
// } while (true)

// do {
//     // x++ (forget to increment)
// } while (x < 5)


// for (let i = 1; i > 0; i++) {
//     console.log('infinite:', i)
// }

// So avoid infinite loops.


///////////////////

// 7. For...in loop

// So far we've seen 3 kinds of loops.
// for
// while
// do-while

// But we have two more types of loops in JS, and we use them to iterate over the properties of an object, or elements in an array.

const person1 = {
    name: 'Mano',
    age: 30,
}

// key is the loop variable (it can be any name)
for (let key in person1) {
    // to get the key
    console.log('key:', key)
    // to get the value (using bracket notation)
    console.log('value:', person1[key])
}

// dot notation
console.log(person1.name)

// bracket notation  ['name of the target property']
console.log(person1['name'])


// so this is the for in loop and we use it to iterate over the properties of an object. 

// ps. we can also use this to iterate over an array, but it's not ideal. But below is an example.

const colors = ['red', 'green', 'blue']

for (let index in colors) {
    console.log(index, colors[index])
}


///////////////////

// 8. For...of loop

// for-of loop is the ideal way to iterate over arrays

// because the loop variable (color) here holds one element/item at each iteration of the array. 
for (let color of colors)
    console.log(color)


// Summary: 

// So we use "for in" loop to iterate over properties of an object

// and the "for of" loop to iterate over the elements/items in an array.


///////////////////

// 9. Break and Continue 

// break and continue can change how the loop behaves.

let i1 = 0


// Break: with the break keyword we jump out of the loop. and with continue keyword we go into the next iteration (repeat).

// while (i1 <= 10) {
//     if (i1 === 5) break

//     console.log(i1);
//     i1++
// }



// pretty much when i1 is even, it get's iterated again, and then once it hits an odd number, it breaks out and gets consoled out.
// ps. but continue is not used that often, it's an old JS legacy thing. It's also not very recommended (ugly according to Mosh).

while (i1 <= 10) {
    if (i1 % 2 === 0) {
        i1++
        continue
    }
    console.log(i1);
    i1++
}


///////////////////

// 10. Exercise 1 - Max of Two Numbers

// Write a function that takes two numbers and returns the maximum of the two.

function maxOfTwo (num1, num2) {
    // if (num1 > 2) return num1
    // return num2
    return (num1 > num2) ? num1 : num2
}

console.log(maxOfTwo(5, 11))


function maxOfThree (num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1 
    } else if (num2 > num1 && num2 > num3) {
        return num2
    } else return num3
}

console.log('return:', (maxOfThree(89128274, -82632873, 999999999)))

// Ps. When testing functions, always test your function with different possible values.


///////////////////

// 11. Exercise 2 - Landscape or Portrait

function isLandscape (width, height) {
    if (height > width) return 'Portrait'
        else return 'Landscape'
}

console.log(isLandscape(500, 300))


function isLandscape2 (w, h) {
    return (h > w) ? 'Portrait' : 'Landscape'
}

console.log(isLandscape2 (500,300))

// or if you want to just return true or false:

function isLandscape3 (width, height) {
    return (width > height)
}

console.log(isLandscape3 (500,300))


///////////////////

// 12. Exercise 3 - FizzBuzz

// if the number is divisible by 3 => Fizz
// if the number is divisible by 5 => Buzz
// if the number is divisible by 3 and 5 => FizzBuzz
// if the number is not divisble, we just get the input back.
// if you don't pass a number, then we get a NaN

// const output = fizzBuzz(3)
// console.log(output)

 function fizzBuzz (input) {
    if (typeof input !== 'number') return NaN
    if ((input % 3 === 0) && (input % 5 === 0)) return 'FizzBuzz'
    if (input % 3 === 0) return 'Fizz'
    if (input % 5 === 0) return 'Buzz'
    
    return input
    
}

console.log(fizzBuzz(true))

// the type if NaN is number.
console.log(typeof(NaN));


///////////////////

// 13. Exercise 4 - Demerit Points

// Speed Limit = 70 miles /h
// for every 5 miles above speed limit, 1 point.
// tip: use math.floor

// more than 12 points -> license suspended


// My solution:

console.log(checkSpeed(180))

function checkSpeed(speed) {
    if (speed < 75) return 'Ok'
    if (Math.floor(speed) < 80) return '1 point'
    if (Math.floor(speed) < 85) return '2 points'
    if (Math.floor(speed) < 90) return '3 points'
    if (Math.floor(speed) < 95) return '4 points'
    if (Math.floor(speed) < 100) return '5 points'
    if (Math.floor(speed) < 105) return '6 points'
    if (Math.floor(speed) < 110) return '7 points'
    if (Math.floor(speed) < 115) return '8 points'
    if (Math.floor(speed) < 120) return '9 points'
    if (Math.floor(speed) < 125) return '10 points'
    if (Math.floor(speed) < 130) return '11 points'
    if (Math.floor(speed) < 135) return '12 points'
    else return 'License Suspended'
}

// Mosh's solution

function checkSpeed2(speed) {
    const speedLimit = 70
    const kmPerPoint = 5

    if (speed < speedLimit + kmPerPoint) {
        console.log('Ok')
        return;
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12)
        console.log('License Suspended')
    else
        console.log('Points', points)
}

checkSpeed2(130)

// const, should be your default choice
// but if you want to reassign a variable, that's when you use the let keyword


///////////////////

// 14. Exercise 5 - Even and Odd Numbers

// console.log(showNumbers(15))

// function showNumbers(limit) {
//     for (i = limit; i >= 0; i--) 
//     if (i % 2 !== 0) {
//         console.log(i, "Odd")
//     } else {
//         console.log(i, "Even")
//     }
    
// }


function showNumbers2(limit) {
    for (i = 0; i <= limit; i++)
    if (i % 2 !== 0) console.log(i, "Odd")
    else console.log(i, "Even")   
}

showNumbers2(15)


// Mosh's version

function showNumbers3(limit) {
    for (let i = 0; i <= limit; i++) {
        const message = (i % 2 === 0) ? 'Even' : 'Odd'
        console.log(i, message)
    }
}

showNumbers3(15)


///////////////////

// 15. Exercise 6 - Count Truthy

// Falsy: (complete list)

// undefined
// null
// ''
// false
// 0
// NaN

const array = [1, 2, 3, null, 4, undefined, 2, true, 0]
console.log(array);

countTruthy(array)

function countTruthy(array) {
    let arr = []
    for (let element of array) {
        if (element) arr.push(element)
    }
    console.log('answer:', arr.length)
}

// Mosh's solution:

countTruthy2(array)

function countTruthy2(array) {
    let count = 0
    for (let value of array)
        if (value)
            count++
    return count
}


///////////////////

// 16. Exercise 7 - String Properties

const movie2 = { 
    title: "Familia",
    release: 2020,
    rating: 5,
    director: "Germano Kuerten"
}

// Function returning string properties

showProperties(movie2)

function showProperties(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
}

// Function returning number properties

showProperties2(movie2)

function showProperties2(obj) {
    for (let key in obj)
        if (typeof obj[key] === 'number')
            console.log(key, obj[key])
}


///////////////////

// 17. Exercise 8 - Sum of Multiples of 3 and 5

console.log(sum2(10))



function sum2(limit) {
    // initialize sum
    let sum = 0;

    // loop and get modulus of 3 and 5 === 0
    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0)
    
    // sum up the remainders to 'sum' variable
        sum += i
    }
    // return sum
    return sum
}



///////////////////

// 18. Exercise 8 - Grade

// Average = 70

// 1 - 59: F
// 60 - 69: D
// 70 - 79: C
// 80 - 89: B
// 90 - 100: A

const marks = [60, 60, 59]

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    let average = 0;
    for(let grade of marks) {
        average += grade
    }
    average /= marks.length
    if (average < 60) return 'F'
    if (average >= 60 && average < 70) return 'D'
    if (average >= 70 && average < 80) return 'C'
    if (average >= 80 && average < 90) return 'B'
    else return 'A'
}

// Mosh's solution

// divide into 2 functions (single responsibility principle)
// we should have functions that are small and focused only on 1 thing.

console.log(calculateGrade2(marks))

function calculateGrade2(marks) {
    const average = calculateAverage(marks)
    
    if (average < 60) return 'F'
    if (average < 70) return 'D'
    if (average < 80) return 'C'
    if (average < 90) return 'B'
    else return 'A'
}

function calculateAverage(array) {
    let average = 0;
    for(let value of array) {
        average += value
    }
    return (average /= array.length)
}


