function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums(5, 5));

// arrow function
const addNumsArrw = (num1 = 1, num2 = 1) => {
  return num1 + num2;
};

console.log(addNumsArrw(5, 5));

// arrow function inline
const addNumsArrwInLine = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNumsArrwInLine(5, 5));

const addNumsArrwInLineNoBr = (num1) => num1 + 5;

console.log(addNumsArrwInLineNoBr(5));
// example: todos.forEach((todo) => console.log(todo))

// lexical this
