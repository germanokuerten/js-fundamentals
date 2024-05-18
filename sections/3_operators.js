///////////////////
// Operators
///////////////////

// 1. JS Operators

// The different types of operators in JS

// Arithmetic - (to perform calculations / Math)
// Assignment 
// Comparison
// Logical 
// Bitwise


// ps. An expression is something that produces a value

///////////////////
// 2. Arithmetic Operators
///////////////////


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

console.log(++x, " = this should be 11")  // ++ (increments 1) and x is now 11 and will log 11.

console.log(x++)  // x will log 10, but is actually 11 after ++


// Decrement (--)
console.log(--x) // here it decrements 1, so x is now 11.
console.log(x--) // x will log 11, minus 1, then x becomes 10. 
console.log(x)   // so now x is 10.


///////////////////
// 3. Assignment Operator
///////////////////

console.log("Assignment Operators             ______________")

let z = 10

// z++ is the same as z = z + 1

// both the same
z = z + 5
z += 5

// both the same
z = z * 3
z *= 3

// Practice
2
let k = 10
k += 5
console.log(k)


/////////////////////////////
// 4. Comparison Operators
/////////////////////////////


console.log('Comparison Operators');

x = 1
console.log(x)

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

// Equal to
console.log(x === 1); // true
// Not equal to
console.log(x !== 1); // false


/////////////////////////////
// 5. Equality Operators
/////////////////////////////

console.log('Equality Operators');

// Strict Equality (same type + value)
console.log(1 === 1);

// Loose Equality (// it converts the type of the right to match the type of the left) (and only checks for the value)
console.log(1 == 1); // true
console.log('1' == 1); // true
console.log(0 == true); // false
console.log(1 == true); // true

// Most of the time you should be using the Strict Equality operator.


/////////////////////////
// 6. Ternary Operator
/////////////////////////

// if a customer ha more than 100 points,
// they are a 'gold' customer, 
// otherwise, they are a 'silver' customer.

let points = 110;
let kind = points > 100 ? 'gold' : 'silver';

console.log("customer is a " + kind + " customer");



//////////////////////////
// 7. Logical Operators
//////////////////////////

// AND (&&)
// OR (||)
// NOT (!)


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



//////////////////////////////////////
// 8. Logical Operators with Non-booleans
//////////////////////////////////////

console.log(false || true); // returns true
console.log(false || 'Mano') // returns "Mano"
console.log(false || 1) // returns 1

// Falsy (false):
// undefined
// null
// 0
// false
// ''
// NaN (not a number)

// With the logical OR || operators as soon as we find a value that is truthy that operand is returned, and this is called short-circuiting.

console.log(false || 1 || 2) // so here it returns 1.


// with this technique, we can provide default values.
let userColor = null
let defaultColor = 'blue'
let currentColor = userColor || defaultColor

console.log(currentColor)


///////////////////
// 9. Bitwise Operators
///////////////////

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
// 00000100 // only read
// 00000010 // only write
// 00000001 // only execute

const readPermission = 4
const writePermission = 2
const executePermission = 1

let myPermission = 0

// with bitwise OR operator we can add permissions
myPermission = myPermission | readPermission | writePermission

// with bitwise AND operator we can check to see if we have a given permission
let message = (myPermission & readPermission) ? 'yes' : 'no'

console.log(message);


///////////////////////////
// 9. Operators Precedence
///////////////////////////

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
console.log('y8 is ', y8);
console.log('x8 is ', x8);

// but then now y8 will be 11
y8 = x8
console.log('y8 now is ', y8);


// 10. What is the value of y9?

let x9 = 1
let y9 = x9 !== 2

console.log('1 not equal to 2', y9);


// /////////////////// 

// // 12. Exercise 

// let a = 'red'
// let b = 'blue'

// let c = b

// b = a
// a = c

// console.log(a);
// console.log(b);





// 

let a = 'red'
let b = 'blue'

// a = b 
// b = (b === a) ? 'red' : 'blue'

c = a

a = b
b = c

console.log(a)
console.log(b)