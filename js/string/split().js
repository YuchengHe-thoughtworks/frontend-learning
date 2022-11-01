const words = 'what a beautiful    day';

// 3. split()方法将String分为有序的子字符串列表，
// 将这些子字符串放入数组中，然后【返回数组】。
const splitted = words.split('a');
const splitted1 = words.split(' ')
  .join();

console.log(typeof splitted); // array
console.log(splitted); // object
console.log(splitted1);
