// 计算输入数组中数字元素的平均值和中值。
const arr = [12, 46, 32, 64];
// Task1. 计算sum 拿到数字元素个数
// Resolve: array.reduce
const n = arr.length + 1;
const sum = arr.reduce((x, y) => x + y);

let averageValue = sum / n;
let midValue;
console.log(` mean: ${averageValue}, median: ${midValue} `);
