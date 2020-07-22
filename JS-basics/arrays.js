/**************************
 * ARRAYS
 */

 //initialize new array
 var names = ['ali', 'jorgell', 'john'];
 var years = new Array(1999, 1969, 1948);

 console.log(names);
 console.log(names.length);

//mutate array data
 names[1] = 'james';
 console.log(names);

// different data type

var john = ['john', 'smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
    console.log(john);

john.pop();
john.pop();
john.shift();
    console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'john is not a designer ' : 'john is a designer';
console.log(isDesigner);
