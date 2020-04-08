let LOOPS;

// for-loop

for (let i = 0; i < 10; i++) {
  console.log(`For Loop Number: ${i}`);
}

// while-loop

let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// array

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: true,
  },
  {
    id: 1,
    text: 'Meeting with boss',
    isCompleted: true,
  },
  {
    id: 1,
    text: 'Dentist appt',
    isCompleted: false,
  },
];

// not the best way to loop through array
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

for (let todo of todos) {
  console.log(todo.text);
}

//
//
//
//
//high order array methods (suggested for arrays)

// forEach loop though array

// map new array from array

// filter new array from array, based on condition

todos.forEach(function (todo, index) {
  console.log(`${index + 1}. ${todo.text}`);
});

// return array
const todoText = todos.map(function (todo) {
  return todo.text;
});
console.log(todoText);

//
const todoCompleted = todos.filter(function (todo) {
  return todo.isCompleted === true;
});
console.log(todoCompleted);

// functional programming

const todoCompletedText = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });
console.log(todoCompletedText);
