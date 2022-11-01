/*
// [...array].reduce ((x,y) => x.concat(y));
function union(...arrays) {
  let tempArray = [...arrays].reduce(arrayAppend);
  return arrayUnique(tempArray);
}

/!*
const array = [1,[2,3], 22,3,[231,323,4]];
let arr = [...array].reduce((x,y) => x.concat(y));
// ...可以把[1,[2,3], 22,3,[231,323,4]]分成:1, [2,3], 22, 3, [231,323,4]
console.log(arr);
*!/

const arrayAppend = (x,y) => x.concat(y);
const arrayUnique = (arr) => [...new Set(arr)]

console.log(union([1,2],[3],[5],[6]));
*/

/*// ES6中新的数据类型，Set
let arr2 = [1, '1', 2, 3, 2, 1, '1', {key1: 1}, {key1: 2}]
console.log([...new Set(arr2)]);*/

const friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}]

let reducer = (x, y) => [...x, ...y.books];

let allbooks = friends.reduce(reducer);

console.log(allbooks);
