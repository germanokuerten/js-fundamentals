///////////////////
// Control Flow
///////////////////



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