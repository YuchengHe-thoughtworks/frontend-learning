const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0); // [ 1, 2, 3 ]

// items is an array of Object(Object is wrapped with {})
// .map()里面是一个callback func 我们先declare a const, then return it
const items = filtered.map(n => {
  const obj = { value: n };
  return obj;
});
const items1 = filtered.map(n => {
  let obj;
  return obj = {value: n};
});
const items2 = filtered.map(n => {
  return {value: n};
});

// But 在这里我们不能像之前一样
// 之前：在使用箭头函数时，如果return的结果只有1行，我们可以删掉return以及{}
// R：默认{value: n}为代码块，JS不会把它解析为对象
const items3 = filtered.map(n => {value: n}); // [ undefined, undefined, undefined ]
// S：在{}外再加一层()
// 最好的写法
const items4 = filtered.map(n => ({value: n}));

// [ { value: 1 }, { value: 2 }, { value: 3 } ]
console.log(items);
console.log(items1);
console.log(items2);
console.log(items4);

// 把map()方法的3个参都传进来
const item5 = numbers.map((n, index, arr) => ({
  value: n,
  isPositiveNumber: n > 0, // boolean
  index: index,
}));
console.log(item5);
console.log(item5.length); // 4
