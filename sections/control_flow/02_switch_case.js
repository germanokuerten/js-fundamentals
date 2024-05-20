///////////////////
// 2. Switch... case
///////////////////

// example:
// switch (variable) {
// }

// ps. Once you have a break, it will jump out of the code block.


// let role = 'moderator';

// switch (role) {
//     case 'guest':
//         console.log('Guest User')
//         break
    
//     case 'moderator':
//         console.log('Moderator User')
//         break
    
//     default: 
//         console.log('Unknown User');
// }

let role = 'moderator'

switch (role) {
    case 'guest':
        console.log('Guest User')
        break;

    case 'moderator':
        console.log('Moderator User')
        break;

    default:
        console.log('Unknown User')
}


// Basically we can compare the value of a variable against a bunch of other values.
// Ps. these values can be strings, numbers or booleans (less common).

// Same thing below as above but with if statments instead. One is not better than the other, if statements can look cleaner but switch case statements can be more explicit and clearer.

// if (role === 'guest') console.log('Guest User');
// else if (role === 'moderator') console.log('Moderator User');
// else console.log('Unknown');

if (role === 'guest') console.log('Guest User')
else if (role === 'moderator') console.log('Moderator User');
else console.log('Unknown User')