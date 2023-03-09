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

// 18. Exercise 9 - Grade

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


// 19 - Exercise 10 - Stars

showStars(10)

function showStars(rows) {
    // for (let row = 1; row <= rows; row++) {
        let pattern = ''
        for (let i = 0; i < rows; i++){
            pattern += '*'
            console.log(pattern)
        }
    }


// 20 - Exercise - Prime Numbers

// Prime (whose factors are only 1 and itself)
// Composite

// Ex:
// 12 = 1, 2, 3, 4, 6, 12
// Can be divided evenly by its factors

// 11 = 1, 11
// 13 = 1, 13

showPrimes(20)


function showPrimes(limit) {
    for (let num = 2; num <= limit; num++) {
        isPrime(num)
    }
}

function isPrime(num) {
    let isPrime = true
        for (let factor = 2; factor < num; factor++) {
            if (num % factor === 0) {
                return false
            }
        }   
        if (isPrime) console.log(num)
}


///////////////////


///////////////////
// Objects
///////////////////

// 1. Basics

// defining an object using the object literal syntax
// the purpose of an object, is to group related variables

// Object oriented (style) programming (or OOP)
// (a collection of objects that talk to each other to perform some functionality)

// here we have properties and a function, and in OOP if a function is inside of an object we call that function a "method"


const circleExample = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    isVisible: true,
    draw: function() {
        console.log('draw')
    }
}


// So this is the .draw() method
circleExample.draw()


// 2. Factory Functions

// A factory is a function that returns an object, and a class is a template for an object.

// Basically the idea here is to create a function that returns an object, that way you can modify parameters each time you assign that function to a new variable thus creating a new object.

// Camel Notation: oneTwoThreeFour


function createCircle(radius) {
    const circle = {
        // radius: radius, (or you can write radius (since it's the same name))
        radius: radius,
        draw() {
            console.log('draw')
        }

        // Ps. Same as code above
        // draw: function() {
        //     console.log('draw')
        // }
    }
    return circle
}

const circle1 = createCircle(2)
circle1.draw()
console.log(circle1)


// 3. Constructor Function (uses Pascal Notation by convention)

// Ps. Factory Functions and Constructor Functions are basically the same shit at the end, it's just "built"/coded differently. (my personal favourite is Factory Functions)

// Pascal Notation: OneTwoThreeFour

function Circle(radius, location) {
    // "this" references an empty object
    this.radius = radius;
    this.location = location
    this.draw = function() {
        console.log('draw')
    }
}

const circle3 = new Circle(1)
console.log(circle3)

////////////

// Example practice

// constructor function (Pascal Notation)

function ExemploDevs1(x, y) {
    this.algumaCoisa = x
    this.algumaCoisa2 = y
}

const exemploDevsNovo = new ExemploDevs1(1, 5)
console.log('1', exemploDevsNovo)

// ou

// factory function (Camel Case Notation)

function exemploDevs2(x) {
    const algumaCoisa = {
        x: x,
    }
    return algumaCoisa
}

const exemploDevsNovo2 = exemploDevs2(3)
console.log('2', exemploDevsNovo2)


/////////////

// 4. Objects are dynamic

// Once you create them, you can always add or remove properties and or functions/methods

const circle = {
    radius: 1,
}

// to add properties

circle.color = 'red'
circle.height = 55

// to add a function/method

circle.draw = function() {
    console.log('draw')
}


// to delete

delete circle.color

delete circle.draw

console.log(circle)



/////////////

// 5. Constructor Property

// Note: Every object in JS has a constructor property.
// And that references the function that was used to create that object.


function createNewCircle(radius) {
    return {
        radius,
        draw: function() {
            console.log('draw again')
        }
    }
}

const newCircle = new createNewCircle(1)

console.log(newCircle.constructor)

//

let newObject = {
    a: 'hello'
}

// JS engine: let newObject = new Object()

console.log(newObject)

// other example of built in constructors in JS

new String() // '', "", ``, (string literals)

new Boolean() // true, false (boolean literals)

new Number() // 1, 2, 3, ...



/////////////

// 6. Functions are Objects

// that's it, in JS functions are objects.

function NewCircle3(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
}

NewCircle3.call({}, 1, 2, 3, 4)
NewCircle3.apply({}, [1, 2, 3, 4])

const newCircleExample = new NewCircle3(77)

console.log(newCircleExample.radius)

// the above code its the same as the one below, because it's actually what happens "under the hood".

const Circle7 = new Function('radius', `
    this.radius = radius;
    this.draw = function() {
        console.log('draw')
    }
`)

const circle7New = new Circle7(7)

console.log(circle7New)



/////////////

// 7. Value vs Reference Types

// Value types (primitives):

// - Number
// - String
// - Boolean
// - Symbold
// - undefined
// - null


// Reference Types (objects):

// - Object
// - Function
// - Array

////////

// so with primitives both of the variables below are independent from each other, so the value of g is copied into a new variable (h). 

let g = 10
let h = g

g = 20

console.log(g)
console.log(h);


// now with reference types:
// when we use an object, the object is not stored in the variable, that object is stored somewhere else in the memory, and the address of that memory location is what is stored in that variable.

let gObject = { value: 10 }

let hObject = gObject 


console.log(gObject)
console.log(hObject);

// Conclusion: 
// PRIMITIVES are copied by their value. 
// OBJECTS are copied by their reference (address in memory).


////////////

// 8. Enumerating Properties of an Object

const circle1000 = {
    radius: 1,
    draw() {
        console.log('draw')
    },
    height: []
}

// Easiest way (for in loop): (my prefered method of iterating over an object)

// iterates over all the properties and methods of an object.

for (let key in circle1000)
    // and to get value of a property, use bracket notation.
    console.log(key, circle1000[key])

///

// Alternative methods (using for of loop):

// Objects are not iterable, so Objects.keys returns an array (string[]). And since arrays are iterable we can use the For Of loop to iterate it.

// .key() is a method built in the Objects constructor function.
for (let key of Object.keys(circle1000))
    console.log('object.keys():', key)

// or you can iterate using Object.entries method. Instead of returning the keys as a string array it returns each key value pair as an array. (in the returned array, the first element is the key, and the 2nd element is the value).

for (let entry of Object.entries(circle1000))
    console.log('Object.entries():', entry)

// To see if a given property or method exists:

if ('draw' in circle1000) console.log('yes')


////////////

// 9. Cloning an Object 

// copy all the properties from an object, and copy into another object.

const circle2000 = {
    radius: 3,
    draw() {
        console.log('draw')
    },
    height: [7,1],
    something: 3,
    somethingElse: 7
}

const circle3000 = {
    radius: 2,
    draw() {
        console.log('paint')
    },
    height: [1],
    something: 5
}

// 1. 1st way (old way):

const newCircle2000 = {}
for (let key in circle2000) 
    newCircle2000[key] = circle2000[key] 
console.log('new copy 1:', newCircle2000)

// 2. using Object.assign()

const newCircle2001 = Object.assign({}, circle2000, circle3000)
console.log('new copy 2:', newCircle2001)

// 3. using Spread Operator

const newCircle2002 = { ...circle2000, ...circle3000 }
console.log('new copy 3:', newCircle2002);


////////////

// 10. Garbage Collection

// Note: in low level languages like C or C++, when creating an object you need to allocate memory to it, and when you are done you need to de-allocate memory. But in JS it is done automatically.

// In JS when you create an object, memory is automatically allocated to that object. JS engine has what is called a Garbage Collector. (it finds constants and variables that are no longer used, and deallocate the memory).

let circle5000 = {}
console.log(circle5000)


////////////

// 11. Math (math object)

// Math object is built into JS, so if you ever have to deal with math calculations, Math object is very handy.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

// Some examples:

// Math.random()

console.log(Math.random())

console.log(Math.round(5.4))

console.log(Math.floor(5.9))

console.log(Math.max());

console.log(Math.min()); 

// example on how to use Math.random()

function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min
}

let getRandomNum = getRandomNumber(100, 105)
console.log(getRandomNum);


////////////

// 12. String (String Object)

// String primitive
const message1 = ' hi my name is Germano   '

// String object
// because this is a construction function we need to apply the 'new' operator
const another123 = new String('hi')

// Example methods
console.log(message1.length);

console.log(message1[1])

// ps. it's case sensitive
console.log(message1.includes('Germano'));

console.log(message1.startsWith('hi'));

console.log(message1.endsWith('Germano'));

// ps. the index includes spaces. 
console.log(message1.indexOf('name'));

// this returns a new string, and it does not modify the original one.
console.log(message1.replace('Germano', 'Kuerten'));

// .toUpperCase() or .toLowerCase()
// Ps. this also returns a new string, and it does not modify original.
console.log(message1.toUpperCase());

// .trim(): get's rid of all the white space before and after our message.
// .trimLeft(), .trimRight().
console.log(message1.trim());

// .split(' ')
console.log(message1.trim().split(' '));


////////////

// Escape Notations
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

// Ex. \n (new line)
//     \' (a quotation mark)

const message2 = 'hi my name is \n\'Shaq\''

console.log(message2);

// Exercise 

const name1000 = 'hannah'

function isThisAPalidrome(name) {
    const nameReverse = name.split('').reverse().toString()
    const nameReg = name.split('').toString()
 
    if (nameReverse === nameReg) return true
    else return false
}

console.log(isThisAPalidrome(name1000))

///

function isThisAPalidrome2(name) {
    const nameReverse = name.split('').reverse().toString()
    return (nameReverse === name) 
}

console.log(isThisAPalidrome(name1000))

///

// Exercise: Even or Odd

function evenOrOdd(x) {
    let result = (x % 2)
    if (result === 0) return 'Even'
    else return 'Odd'
}

console.log(evenOrOdd(2));

function evenOrOdd2(x) {
    if (x % 2 === 0) return "Even"
    else return "Odd"
}

console.log(evenOrOdd2(2));

function evenOrOdd3(x) {
    return x % 2 === 0 ? 'Even' : 'Odd'
}

console.log(evenOrOdd3(2));


////////////

// 13. Template Literals

// String primitive
const message33 = 
'This is my\n' +
'\'first\' message'

// types of literals:

// Object {}
// Boolean true, false
// String '', ""
// Template `` (literals)

// With template literals we can format our string the way we want to look at. 

const message3 = 
`This is my 
'first' message`

console.log(message3);

// Ex: Useful if you want to send out email messages.

const name2000 = 'John'

const message4 =
`Hi ${name2000} ${evenOrOdd3(2)},

Thank you for joining my mailing list.

Best,
Mano`

console.log(message4);


////////////

// 14. Date (object)

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

const nowDate = new Date()
const date1 = new Date('May 11 2018 09:00')

// note: month is 0 based
const date2 = new Date(2018, 4, 11, 9)

console.log(nowDate);
console.log(date1);
console.log(date2);

// now. is now nowDate.
console.log(nowDate.setFullYear(2023))

console.log(nowDate.toDateString())

console.log(nowDate.toTimeString())

// commonly used in web applications, if you are building an app that talks to a backend this is the format you commonly use to transfer date between the client and the server.
console.log(nowDate.toISOString())


////////////

// 15. Exercise 1 - Address Object

// Create an address object with 3 properties.

// Street
// City
// Zipcode

// Then create a function called showAddress(address), that takes an address object, and displays all properties with the value.

// we use the object literal syntax to initialize this object
const myAddress = {
    street: '9660 Durham Dr.',
    city: 'Huntington Beach',
    zipCode: '92646'
}

function showAddress(address) {
    for (value in address)
    console.log(`${value}: ${address[value]}`)
}

showAddress(myAddress) 


////////////

// 16. Exercise 2 - Create Factory and Constructor Functions

// use factory function and constructor function to initialize an object.

// 1. factory function (Camel Case Notation)

function myAddress2() {
    const myAddress2 = {
        street: '9660 Durham Dr. 222',
        city: 'Huntington Beach 222',
        zipCode: '92646 222'
    }
    return myAddress2
}

console.log(myAddress2())

// Factory Function (Mosh's example)

function createAddress2(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    }
} 

console.log(createAddress2('9660 Durham Dr. 2', 'Huntington Beach 2', '92646 2'))


// 2. constructor function (Pascal Notation)

function MyAddress3() {
    this.street = '9660 Durham Dr. 333'
    this.city = 'Huntington Beach 333'
    this.zipCode = '92646 333'

}

const myAddress3 = new MyAddress3()
console.log(myAddress3)


// Constructor Function (Mosh's example)

function Address1(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

const address1 = new Address1('a', 'b', 'c')
const address2 = new Address1('a', 'b', 'c')

console.log(address1);
console.log('ad2:', address2);

// 17. Exercise 3- Object Equality

// create a function that checks to see if both objects have the same properties.
function areEqual(address1, address2) {

    let array1 = []
    let array2 = []

    for (key in address1) {
        array1.push(address1[key])
    }
    for (key in address2) {
        array2.push(address2[key])
    }
    return JSON.stringify(array1) === JSON.stringify(array2)
}

console.log(areEqual(address1, address2))

// Mosh's solution

function areEqualMosh(address1, address2) {
    return address1.street === address2.street && address1.city === address2.city && address1.zipCode === address2.zipCode
}

console.log('Moshs', areEqualMosh(address1, address2))

// this time create a function to see if they both are referencing the same object (in memory).
function areSame(address1, address2) {
    return address1 === address2
}

console.log(areSame(address1, address2));

////////////

// 18. Exercise 4- Blog Post Object

// Create an object with these properties:

// title
// body
// author
// views
// comments
//      (author, body)
// isLive (true of false)

// use Object literal syntax to create and initialize a "blog post".

let blogPost = {
    title: 'breathe',
    body: '?',
    author: 'Germano Kuerten',
    views: 345,
    comments: [
        { author: 'author', body: 'body' },
        { author: 'author2', body: 'body2' },
    ],
    isLive: true,
}

console.log(blogPost);


////////////

// 19. Exercise 5 - Constructor Functions


let blogPost2 = {
    title: 'breathe',
    body: '?',
    author: 'Germano Kuerten',
    views: 345,
    comments: [
        { author: 'author', body: 'body' },
        { author: 'author2', body: 'body2' },
    ],
    isLive: true,
}

// Constructor function (a function that builds objects)

function BlogPost3(title, body, author, views, comments, isLive) {
    this.title = title
    this.body = body
    this.author = author
    this.views = 0
    this.comments = []
    this.isLive = false
}

// Ps. we should always aim to have a function with fewer parameters, the more parameters you have the harder it is to use it. // and in this case views, comments and isLive has default value.

const newBlogPost3 = new BlogPost3('a', 'b', 'c')
console.log(newBlogPost3);


////////////

// 20. Exercise 6 - Price Range Object

const prices = [
    { label: '$', tooltip: 'Inexpensive', minPerson: 0, maxPerson: 10 },
    { label: '$$', tooltip: 'Moderate', minPerson: 11, maxPerson: 20 },
    { label: '$$$', tooltip: 'Expensive', minPerson: 21, maxPerson: 50 },
]

// Pro tip: Whenever you're using an application, look at the features of that application, look at the concepts, and imagine, if you wanted to model one of those concepts using an object, what properties would you put in that object?



///////////////////


///////////////////////
// Arrays (deep dive)
///////////////////////

// 1. Introduction

// - Adding new elements
// - Finding elements
// - Removing elements
// - Splitting arrays
// - Combining arrays

// ps. these operations are extremelly important, specially when you starting out.


///////////////////

// 2. Adding Elements

const numbersArray = [3, 4]

// since we use const keyword, you cannot reassign numbersArray to something else, but you can modify the content in the array.

// ps. Arrays are objects. So using the dot notation we can look up all the properties and methods defined in Arrays.

// add elements at the end, beginning and middle of an array:

// End: .push():
numbersArray.push(5, 6)
console.log(numbersArray)

// Beginning: .unshift()
numbersArray.unshift(1, 2)
console.log(numbersArray);

// Middle: .splice(starting position, how many to delete, what you want to add?)
numbersArray.splice(2, 0, 'a', 'b', 'c', 99, 100)
console.log(numbersArray);


///////////////////

// 3. Finding Elements (Primitives)

// Finding elements depends on if you're storing primitive or reference types in an array.

const numbers999 = [1, 2, 3, 1, 4, 1]


// indexOf(): pass the element / data we are looking for, if the element exists in the array, this method will return the index of that element. and if doesn't exist, it will return -1.

// Ex:
// It will return -1 bc 'a' does not exist
console.log(numbers999.indexOf('a'))

// this will return 0, because the element of 1 is index 0.
// ps. The type matters, so '1' would return -1.
// ps. Also, it will only return the index of the first element that matches (so if there are other 1's for example it will not return those indexes). 
// In other words, it returns the index of the first occurrence of a vale in an array.
console.log(numbers999.indexOf(1))

// lastIndexOf(): It will return the last index that the elemenet is found
console.log(numbers999.lastIndexOf(1))

// PS. To see if a given element exists in an array we can do this:
console.log(numbers999.indexOf(1) !== -1)
// Newer way of doing it, using JS method. 
// It will return false, because 0 does not exist.
console.log(numbers999.includes(0))


// Ps. all these methods have a second parameter (optional). And that is  the starting index of the search.
// Ex: 
// Here it will return 3, because it will begin at index 3, and 1 in this case is at index 3.
console.log(numbers999.indexOf(1, 3))

// Or in this case it will also return 3, because the indexOf() will begin at index 1 (which is 2), and next index for element 1 is 3.
console.log(numbers999.indexOf(1, 1))



///////////////////

// 4. Finding Elements (Reference Types)

// Note: Remember reference types point to a reference in memory.

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]

// Note: Here we will get false because the object we pass down is a different object, because it has a different reference.
console.log(courses.includes({ id: 1, name: 'a' }))

// So in order to find an element or value we need to use the find() method.

// So within find() we have to pass a function (we call it a predicate or a CALL BACK FUNCTION (because this function is called back as part of finding an element in this array ???), and use that to determine if the given element exists in an array or not)

// So this function inside takes a parameter. (that's an element from the array)
// And in the body of that function we should return a boolean. 
// Ps. if there's not "match" it will return undefined
const course1 = courses.find(e => e.id === 1)
console.log(course1);

// Mosh's example:
const course = courses.find(function(element) {
    return element.id === 2
}) 

console.log(course)

// Basically find methods it returns the first element / value that matches the criteria we define.


///

// findIndex(): It works similarly, but instead of returning the object it returns the index in the array.
const courseIndex = courses.findIndex(e => e.name === 'b')
console.log(courseIndex);



///////////////////

// 5. Arrow Functions

const courseArrow = courses.find(e => e.id === 2)

console.log('arrow function:', courseArrow);

// a declared arrow function example (without body and implicit return)
const functionExample = () => 'arrow function example w/ implicit return'

console.log(functionExample())


// Exercises (CODE WARS)

// 1.

list1 = [1, 2, 3, 4]
function reverseList(list) {
    return list.reverse()
}

console.log(reverseList(list1))
console.log(list1.length)


// 2.

const sheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

// declare newArray
// scan through array
// if true, push to newArray
// return newArray.length

function sheepCount(array) {

    let newArray = []

    for (element of array)
    if (element) newArray.push(element)
    
    return newArray.length
}

console.log(sheepCount(sheep));

// 3.

function seatCount(cap, on, wait) {
    let free = (cap - on)
    let final = (free - wait)
    if (final >= 0) 
        return `He can fit all ${wait} passengers`
    else return `He can't fit ${Math.abs(final)} of the ${wait} waiting`
}

console.log(seatCount(100, 60, 50))



///////////////////

// 6. Removing Elements


const numberss = [1, 2, 3, 4]


// End
// .push() (to add)
// .pop() (to remove last element)
const last = numberss.pop()
console.log(last);

// Beginning
// .unshift() (to add)
// .shift() (to remove first element)
const first = numberss.shift()
console.log(first);

console.log('whats left:', numberss);


const numberss2 = [1, 2, 3, 4]

// Middle
// splice(index to start, how many elements to be deleted, and if want to add element then element or elements to be added)
numberss2.splice(2, 1, 'a')
console.log(numberss2)


///////////////////

// 7. Emptying an Array

let numbersArray1 = [1, 2, 3, 4]

// if you create another reference like below, then the array above even if modified, now that has another reference it will not be garbage collected.
let anotherArray1 = numbersArray1

// Solution 1 (only works with let) (but the old array is still in memory) (and when we re-assign the new numbersArray1 variable below, now numbersArray1 is pointing to a new object in memory) (and anotherArray1 created previously will still be pointing to the old object)

// so to conclude this solution works to empty an array if you have no other references (like numbersArray1 in this case) to the original array (numbersArray1).

// If you have multiple references to the original array, then use one of the other solutions.
numbersArray1 = []
console.log(numbersArray1);
console.log('old object:', anotherArray1);

// Solution 2 (Mosh's favourite) 
// this will truncate the array (it will remove all elements).
numbersArray1.length = 0


// Solution 3 (a little noisy, but works)
numbersArray1.splice(0, numbersArray1.length)

// Solution 4 (least recommended, noisy and slow when dealing with very large arrays)
/* while (numbers999.length > 0)
    numbersArray1.pop() */


///////////////////

// 8. Combining and Slicing Arrays

// Ps. with these lessons, instead of having one large doc, create a folder for each module, and a file for each lesson! Also a folder for JS fundamentals, and a folder for JS advanced concepts.
// or at least a file for each module, and a folder for each course (ex JS fundamentals).

// .concat() - For combining arrays

const first1 = [1, 2, 3]
const second1 = [4, 5, 6]

combined1 = first1.concat(second1)

console.log(combined1);

// .slice(index here and after, index that it will stop taking) - For slicing arrays

// combined1 = [ 1, 2, 3, 4, 5, 6 ]

const slice = combined1.slice(2, 5)
console.log(slice);


// when using both methods, they create a new array. So if the elements are primitive types, they are copied by value, if they are reference types then the reference is copied over.
// So that means that if you change the data in an object or other reference type data, it mutates the original object to where the reference is pointing to.


///////////////////

// 9. The Spread Operator

// combined1 = first1.concat(second1)  - so instead of doing this, you can use the spread operator 
// (/spread operator is simpler)
const combinedSpread = [...first1, 'a', ...second1, 'b']

console.log('spread operator:', combinedSpread)


///

// const copy123 = combined.slice()   - then instead of using .slice() method to create a copy, we can use the spread operator.

const copy123 = [...combinedSpread]

console.log('copy: ', copy123)


///////////////////

// 10. Iterating an Array

const newArray1 = [1, 2, 3]
console.log('new array:',newArray1);

// to get elements
for (number of newArray1)
    console.log(number)

// to get index
for (number in newArray1)
    console.log(number)

// using .forEach()
newArray1.forEach(function(number){
    console.log(number)
}) 

// using .forEach(element, index) with arrow function (one liner)
newArray1.forEach(number => console.log('arrow f:', number))

// using .forEach(element, index) with arrow function and with 2 parameters
newArray1.forEach((number, index) => console.log('2 params:', index, number)) 


///////////////////

// 11. Joining Arrays


const newArray2 = [1, 2, 3]

// .join() - it joins the array and returns a string (array -> string)
const joined = newArray2.join(', ')
console.log(joined)


// .split()  - a string method that works well with join(), it returns an array (string -> array)
const message123 = 'This is my first message'

const split = message123.split(' ')
console.log(split);

// technique used to create url slugs
const combined123 = split.join('-')
console.log(combined123);


///////////////////

// 12. Sorting Arrays

const numbers123 = [2, 3, 1, 'b', 4, 'a']
console.log(numbers123);

numbers123.sort()
console.log(numbers123);


// practice

const nameList = ['Germano Kuerten', 'andre Kuerten']

// nameList.sort()
// console.log(nameList);

const newNameList = nameList.join(',')
const toUpper = newNameList.toLocaleUpperCase();

const split1 = toUpper.split(',')
const sorted = split1.sort()
console.log(sorted);


///

const courses123 = [
    { id: 1, name: 'Node.js America'},
    { id: 2, name: 'javaScript Brazil'},
    { id: 3, name: 'A Zython'},
    { id: 4, name: 'Amanda Kubberness Amazonas'}
]

// Simple sort:

// courses123.sort(function(a, b) {
//     if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
//     if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
//     return 0
// })

// console.log(courses123);


// Sorting by last name:

    const sorted123 = courses123.sort(function(a, b) {

    const nameA = a.name.toLowerCase().split(' ')
    const nameB = b.name.toLowerCase().split(' ')

    // alternatively you can use .reverse() to reverse the array:
    // const reversedA = nameA.reverse()
    // const reversedB = nameB.reverse()
    
    let lastNameA = nameA[nameA.length -1]
    let lastNameB = nameB[nameB.length -1]
    
    if (lastNameA < lastNameB) return -1
    if (lastNameA  > lastNameB) return 1
    return 0
    
})

// Returning last name, and then first name.

Object.entries(sorted123).forEach(([key, x]) =>
    console.log(x.name.slice(x.name.lastIndexOf(' ')), x.name.split(' ')[0]))


// Ps. ASCII, abbreviated from American Standard Code for Information Interchange, is a character encoding standard for electronic communication. ASCII codes represent text in computers, telecommunications equipment, and other devices.


///////////////////

// 13. Testing the Elements of an Array

// .every() - if every element matches the given criteria
// .some() - if at least 1 element matches the given criteria

const numbersTesting = [1, 2, 3, -1]

const allNumbers = numbersTesting.every(function(value) {
    return value >= 0
})

console.log('.every()', allNumbers);

const someNumbers = numbersTesting.some(function(value) {
    return value >= 0
})

console.log('.some():', someNumbers);


///////////////////

// 14. Filtering an Array

const numbersFilter = [1, -1, 2, 3]

const numbersFiltered = numbersFilter.filter(function(value) {
    return value >= 0
})

console.log(numbersFiltered);


// Cleaner implementation example

const numFiltered = numbersFilter.filter(n => n >= 0)

console.log(numFiltered);


///////////////////

// 15. Mapping an Array

