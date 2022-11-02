const words = 'what a beautiful    day';

// split()方法将String分为有序的子字符串列表，
// 将这些子字符串放入数组中，然后【返回数组】。
const splitted = words.split(' ');
const splitted1 = words.split('a', 4); // array
const splitted2 = words.split(' ') // string
  .join();

const n1 = splitted[2]; // beautiful
const n2 = n1.split('');
console.log(n2[2]); // a

const strCopy = words.split(); // [ 'what a beautiful    day' ]

// Params1: separator 可以是一个字符串OR正则表达式
// Params2: limit 是一个整数，限定返回的分割片段数量。
