///////////////////
// 4. While loop
///////////////////


// In "for loop" the loop variable is part of the loop itself.
// but in "while loops", you have to declare this variable externally.

// Ps. this i is different then the i in the previous for loop because of scope, the i in for loop only exists within the for loop scope.

// while (condition) {"the body of the while loop"}

// let i = 9;

// while (i <= 5) {
//     if (i % 2 === 0) {
//         console.log('while:', i) 
//     }
//     i++
// }

// let i = 0

// while (i <= 5) {
//     if (i % 2 === 0) console.log(i); 
//     i++    
// }

let i = 0

while (i <= 5) {
    if (i % 2 === 0) console.log(i)
    i++
}

console.log('hello mundao');


///////////////////

// 5. Do... while loop

// Do while loops are very similar to while loops, but with a slight difference. The difference is that in a Do while loop the code is executed as least once (even if the condition at the end evaluates to false).
// in Do while loops, the variable also needs to be declared externally.

// let i = 9;

// do {
//     if (i % 2 !== 0) {
//         console.log('do while:', i) 
//     }
//     i++
// } while (i <= 5)  


// ps. Do while loops are not very used in the real world, most of the time you will be using a for loop or a while loop.