//use array.map() to map each element in an array into something else

// numbers is an array of Number
const numbers = [1, -1, 2, 3];

// const filtered = numbers.filter(value => value >= 0);
// const filtered = numbers.filter(number => number >= 0);
const filtered = numbers.filter(n => n >= 0); // [ 1, 2, 3 ]

// each number(n) is mapped to a string(that's our list item)
// items is an array of String
const items = filtered.map(n => '<li>' + n + '</li>'); // [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

// use string.join() to join the element of this array to create a string
// string.join() default separator: ,
const html = items.join(); // <li>1</li>,<li>2</li>,<li>3</li>
const html1 = items.join(' '); // <li>1</li> <li>2</li> <li>3</li>
const html2 = '<ul>' + items.join('') + '</ul>'; // <ul><li>1</li><li>2</li><li>3</li></ul>
