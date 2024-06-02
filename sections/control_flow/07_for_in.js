/////////////////////
// 7. For...in loop
/////////////////////

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


// so this is the "for in" loop and we use it to iterate over the properties of an object. 

// ps. we can also use this to iterate over an array, but it's not ideal. But below is an example.

const colors = ['red', 'green', 'blue']

for (let index in colors) {
    console.log(index, colors[index])
}

console.log('----------')

// ps. for-of loop is ideal to iterate over arrays.


/////////////
// Practice
/////////////

// Name of each property (ex, name and age) and the value of each property (ex. 'Germano', 30).

const person = {
    name: 'Germano',
    age: 30
}

for (key in person) {
    // console.log(key)
    console.log(key, person[key]);
}

