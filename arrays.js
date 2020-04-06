// vars that hold multiple values

const numbers = new Array(1, 2, 3, 4, 5); // constructor
console.log(numbers);

const fruits = new Array('apples', 'oranges', 'pears'); // can add even with const
// const name:string <- not required (not statically typed)
// fruits = []  <- error. reassigning not possible
console.log(fruits[0]);

fruits[3] = 'grapes';
fruits.push('mangos'); // add at end
fruits.unshift('strawberries'); // add at beginning
console.log(fruits);
fruits.pop(); // pops(removes) last one
console.log(fruits);

console.log(Array.isArray(fruits)); // check if is array

console.log(fruits.indexOf('oranges'));
