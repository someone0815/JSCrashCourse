// key value pairs

const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA',
  },
};
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

// destructoring
const {
  firstName,
  lastName,
  address: { city },
} = person; // this is pulling not assigning
console.log(firstName);
console.log(city);

person.email = 'john.doe@mail.com';
console.log(person.email);

// arrays of objects

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

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos); // convert object literal to JSON
console.log(todoJSON);
