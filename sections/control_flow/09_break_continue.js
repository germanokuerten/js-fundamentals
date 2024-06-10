/////////////////////////
// 9. Break and Continue 
/////////////////////////

// break and continue can change how the loop behaves.

let i1 = 0


// Break: with the break keyword we jump out of the loop. and with continue keyword we go into the next iteration (repeat).

while (i1 <= 10) {
    if (i1 === 5) break

    console.log(i1);
    i1++
}


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

// Practice:

let i = 0

while (i <= 10) {
    // if (i === 5) break
    if (i % 2 === 0) {
        i++
        continue
    }
    console.log(i)
    i++
}