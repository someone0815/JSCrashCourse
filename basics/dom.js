console.log(window);

// Single element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container')); // much newer. like jQuery will select first

// Multiple element
console.log(document.querySelectorAll('.item')); // array methods usable
console.log(document.getElementsByClassName('item')); // much older. array not usable
console.log(document.getElementsByTagName('li')); // much older. array not usable

const items = document.querySelectorAll('.item');

items.forEach((item) => console.log(item));

const ul = document.querySelector('.items');

// modifying dom

// ul.remove();
// ul.lastElementChild.remove();

ul.firstElementChild.textContent = 'Hello';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h4>Goodbye</h4>';

const btn = document.querySelector('.btn');
btn.style.background = 'teal';

// events

// since its a submit button you have to prevent defautl behaviour
btn.addEventListener('click', (e) => {
  e.preventDefault();
  // console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
});



