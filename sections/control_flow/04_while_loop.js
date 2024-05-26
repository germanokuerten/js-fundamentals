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


