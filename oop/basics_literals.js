// const s1 = 'Hello';
// console.log(typeof s1);

// const s2 = new String('Hello');
// console.log(typeof s2);
//
// console.log(navigator.appVersion);

const book1 = {
  title: 'Book One',
  author: 'John Doe',
  year: '2013',
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));
