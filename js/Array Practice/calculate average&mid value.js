// 计算输入数组中数字元素的平均值和中值。
const arr = [12, 46, 32, 64];
// Task1. 计算sum + 拿到数字元素个数
// Resolve: array.reduce
function getAverage() {
  const n = arr.length + 1;
  const sum = arr.reduce((x, y) => x + y);

  return sum / n;
}

// Task2. sort升序排序 + 根据index拿中间的value（注意length的奇偶）
// sort直接修改原数组
arr.sort((a, b) => a - b); // arr = [ 12, 32, 46, 64 ]
let averageValue = getAverage();
let midValue;
// console.log(` mean: ${averageValue}, median: ${midValue} `);
