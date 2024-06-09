///////////////////
// NOTES
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
console.log("look at me", numbersArray);


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

// 14. Filtering an Array (returns a new array, does not modify the original array)

const numbersFilter = [1, -1, 2, 3]

const numbersFiltered = numbersFilter.filter(function(value) {
    return value >= 0
})

console.log(numbersFiltered);


// Cleaner implementation example

const numFiltered = numbersFilter.filter(n => n >= 0)

console.log(numFiltered);


///////////////////

// 15. Mapping an Array (returns a new array, does not modify the original array)

// .map() method - it 'maps' each element in an array into something else.

const list = numFiltered.map(n => '<li>' + n + '</li>')

console.log(list);


// .map() - mapping numbers into strings

const html = '<ul>' + list.join('') + '</ul>'

console.log(html)


// .map() - mapping to objects.

const listObject = numFiltered.map(n => {
    return { value: n }
})


// one liner: (has to wrap square braquets inside of parentheses, otherwise JS thinks it's another code block).

const listObject2 = numFiltered.map(n => ({ value: n }))

console.log(listObject2);


// Chaining - These methods are chainable, meaning you can call one method after another in a chain

const newNumbers = [1, -1, 2, 3]

const newNumbersFilterMap = newNumbers
    .filter(n => n >= 0)
    .map(n => ({value: n}))
    .filter(n => n.value > 1)
    .map(n => n.value + 1)

console.log(newNumbersFilterMap);


///////////////////

// 16. Reducing an Array

const newNumbers2 = [11, -1, 2, 3]

// Example:

let sum3 = 0
for (let n of newNumbers2)
    sum3 += n

console.log('sum of newNumbers2:', sum3)


// Using .reduce()

// Whats happening under the hood:
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a = 0
// a = 0, c = 2 => a = 2
// a = 2, c = 3 => a = 5

const sum4 = newNumbers2.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0) //, option for second argument here, that you can set to 0 or whatever initial number you'd like.


// minimizing

const sum5 = newNumbers2.reduce(
    (accumulator, currentValue) => accumulator + currentValue) 

console.log(sum5);



///////////////////

// 17. Exercise 1 - Array from Range

const numExercise = arrayFromRange(-1, 4);

// takes 2 parameters min, max.
function arrayFromRange(min, max) {
    let array = [];
    for(let i=min; i <= max; i++)
        array.push(i);
    return array;
}

console.log(numExercise);



///////////////////

// 18. Exercise 2 - Includes

const numbersInc = [1, 2, 3, 4, 9]

function includes(array, searchElement) {
    for (i = 0; i < array.length; i++)
        if (array[i] === searchElement) return true
    return false
}

console.log(includes(numbersInc, 5))


// Mosh's implementation

function includes2(array, searchElement) {
    for (let element of array)
        if (element === searchElement) return true
    return false
}

console.log(includes2(numbersInc, 10));



///////////////////

// 19. Exercise 3 - Except

const numbersExcept = [1, 2, 3, 4, 1, 1]


// with a 'for...in' loop. (here it is looping the index in the array)
function except(array, excluded) {
    output = []
    for (let element in array)
        if (!excluded.includes(array[element]))
            output.push(array[element])
    return output
}

console.log(except(numbersExcept, [1, 2]))


// Mosh's solution - (same thing but with 'for of' loop)

// with 'for...of' loop. (here it's looping the actual value inside the array)
function except2(array, excluded) {
    let output = []
    for (element of array)
        if (!excluded.includes(element))
            output.push(element)
    return output
}

console.log(except2(numbersExcept, [1, 3]));


// Practice

const numbersPractice1 = [1, 2, 3, 4, 1, 9]

function except3(array, excluded) {
    let output = []
    for (element of array)
        if (!excluded.includes(element))
            output.push(element)
    return ['here:', output]
}

console.log(except3(numbersPractice1, [1]))



///////////////////

// 20. Exercise 4 - Moving an Element

const numbers4 = [1, 2, 3, 4]

// const output4 = move(numbers4, 0, 1)
// console.log(output4)

// function move(array, index, offset) {

//     let newValue = array.splice(index, 1)
//     array.splice(offset, 0, newValue[0])

//     if (offset >= array.length) 
//         return console.error('Invalid Offset')
    
//     return array
// }


// Mosh's solution

const output5 = move2(numbers4, 1, 1)
console.log(output5)

function move2(array, index, offset) {

    const position = index + offset
    if (position >= array.length || position < 0)
        return console.error('Invalid Offset')

    const output = [...array]
    const newValue = output.splice(index, 1)[0]
    output.splice(position, 0, newValue)
    return output
}



///////////////////

// 21. Exercise 5 - Count Occurrences

const numbersOcc = [1, 2, 3, 4, 1, 1]


// My solution:

const countOcc = countOccurrences(numbersOcc, 1)

console.log(countOcc)

function countOccurrences(array, searchElement) {

let output = []

for (element of array)
    if (element === searchElement)
        output.push(element) 

const sum = output.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)

return sum
}


// Mosh's simple solution

const countMosh = countOccurrences2(numbersOcc, 1)

console.log(countMosh)

function countOccurrences2(array, searchElement) {
    let count = 0
    for (let element of array)
        if (element === searchElement)
            count++
    return `Mosh's solution, ${count}`
}


// Mosh's reduce() method solution

const countMosh2 = countOccurrences3(numbersOcc, 1)

console.log(countMosh2)

function countOccurrences3(array, searchElement) {
    return array.reduce((accumulator, currentValue) => {
        const occurrence = (currentValue === searchElement) ? 1 : 0
        return accumulator + occurrence
    }, 0)
}