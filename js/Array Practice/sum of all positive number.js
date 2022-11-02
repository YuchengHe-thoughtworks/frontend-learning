// 如果给定的输入是一个数字数组，则返回所有正数的总和。
// 如果数组为空或没有任何正数，则返回 0。

const input = [1, -4, 12, 0, -3, 29, -150];
const input0 = [];
function positiveSum(arr) {
  return arr.filter(value => value > 0)
    .reduce((x, y) => x + y, 0);
}
// ⭐️提供初始值 initialValue 通常更安全!
// 这里reduce中的initialValue设置为0是必不可少的（sad path）
// 因为reduce抛出异常的情况：数组为空且初始值 initialValue 未提供。
/*PS:如果数组仅有一个元素（无论位置如何）并且没有提供初始值 initialValue，
或者有提供 initialValue 但是数组为空，
那么此唯一值将被返回且 callbackfn 不会被执行*/

// R.先filter筛选，再reduce遍历得到sum
const result = positiveSum(input0);
console.log(result);
