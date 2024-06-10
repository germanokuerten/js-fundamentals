const output = fizzBuzz(5)
console.log(output)


function fizzBuzz(input) {
    if (input / 1 !== input) return NaN
    if (input % 3 === 0 && input % 5 === 0) return "FizzBuzz"
    if (input % 3 === 0) return "fizz"
    if (input % 5 === 0) return "Buzz"
    return input
}

// divisable by 3 = fizz
// divisable by 5 = buzz
// divisable by 3 and 5 = FizzBuzz
// not divisable by 3 of 5 = same input
// if dont pass a number get = not a number
