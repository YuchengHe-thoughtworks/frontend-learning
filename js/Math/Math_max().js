// Math.max() 函数返回作为输入参数的最大数字.
// 如果没有参数，则返回 -Infinity。
// 如果参数不是数字且不能转换为数字，则返回NaN。
console.log(Math.max(1, 2, -4)); // 2
console.log(Math.max()); // -Infinity

const array = [1, 2, -4];
console.log(array); // [1, 2, -4]
console.log(...array); // 1 2 4
console.log(Math.max(array)); // NaN
console.log(Math.max(...array)); // 2

// 1.reduce+Math.max获取数组的最大元素
const arr = [1, 2, 3];
const max = arr.reduce((x, y) => Math.max(x,y), -Infinity);
console.log(max);
