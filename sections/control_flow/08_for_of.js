///////////////////////
// 8. For...of loop
///////////////////////

let colors = ["green", "blue", "black"]

for (let index in colors) {
    console.log(index, colors[index])
}
// we use for in loop mostly to iterate of the properties of an object

// for-of loop is the ideal way to iterate over in items/elements of an array

// because the loop variable (color) here holds one element/item at each iteration of the array. 
for (let color of colors)
    console.log(color)


// Summary: 

// So we use "for in" loop to iterate over properties of an object

// and the "for of" loop to iterate over the elements/items in an array.
