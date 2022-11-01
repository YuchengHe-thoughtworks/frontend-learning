const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// 对原数组直接进行修改
// 即，【返回值】：原地排序后的数组。并且不进行复制！
console.log(months); // [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // [ 1, 100000, 21, 30, 4 ]
// 因为sort方法默认的排序规则是将元素->字符串后，按照UTF-16
// 所以我们一般情况下都是自己写它的回调函数compareFn来自定义我们想要的排序顺序

/*function compareFn(a, b) {
  if (在某些排序规则中，a 小于 b) {
    return -1;
  }
  if (在这一排序规则下，a 大于 b) {
    return 1;
  }
  // a 一定等于 b
  return 0;
}*/
/*..........................................................*/
// Q1.比较2个【数字】a,b的大小？
// R.a - b

const numbers = [4, 2, 5, 1, 3];
// function compareNumbers(a, b) {
//   return a - b;
// }
// numbers.sort(compareNumbers);

// arrow Fn
numbers.sort((a, b) => a - b);
console.log(numbers);

/*..........................................................*/
// Q2.对象按照某个属性排序？
// R.

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'and', value: 45 },
  { name: 'the', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// 2.1 sort by value
items.sort((a, b) => a.value - b.value);
console.log(items);

function compareByInitial(a, b) {
  const nameA = a.name.toUpperCase();
  const nameB = b.name.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

// 2.2 sort by name
items.sort(compareByInitial);
console.log(items);
