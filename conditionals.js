const x = 4;
const y = 11;

// == (double equal)
// will not match datatypes
// '10' == 10 still true
// string == number still true
if (x == 10) {
  console.log('x is 10');
}
// === (triple equal)
// will match datatypes
// '10' == 10 not true
if (x === 10) {
  console.log('x is 10');
} else if (x > 10) {
  console.log('x is greater than 10');
} else {
  console.log('x is NOT 10');
}

// OR
if (x > 5 || y > 10) {
  console.log('x is more than 5 or y is more than 10');
}
// AND
if (x > 3 && y > 8) {
  console.log('x is more than 5 or y is more than 10');
}

// ternary operator (shorthand if statement)
const u = 4;

// ? = then
// : = else
const color = u > 10 ? 'red' : 'blue';
console.log(color);

switch (color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
  default:
    console.log('color is not red or blue');
    break;
}
