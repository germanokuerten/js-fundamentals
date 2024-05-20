///////////////////
// 3. For (loop)
///////////////////

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

// initial expression. (i = 0) (i or index/ the loop variable); 
// condition (ex: i<5); 
// increment expression (i++).

// for (let i = 0; i < 5; i++) {
//     console.log('Hello World', i)
// }

for (let i = 1; i <= 5; i++) {
    console.log('Hello Mundao', i)
}

for (let i = 1; i <=5; i++) {
    if (i % 2 !== 0) console.log('odds', i)
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