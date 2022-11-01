// 计算数组中所有元素之和 类似于计算购物车中所有商品的价格
const numbers = [1, -1, 2, 3];

//【Old way】
// 数组/对象遍历常用：
// for of遍历的是数组元素值（value），而 for in遍历的是数组的索引（index）
let sum = 0;
for (let n of numbers)
  sum += n;

console.log(sum);

// 【New way: .reduce()】
// array.reduce() 我们使用它，当我们希望返回1个值的时候（数字/字符串/对象）
// 下面的reduce()有2个param 1.callback function 2.accumulator的初始值（这里是0）
// 1.其中callback function 需要2个param: accumulator, currentValue
// accumulator相当于上面的sum，是我们初始化的东西
const sum1 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
// a=0, c=1 => a=1
// a=1, c=-1 => a=0
// a=0, c=2 => a=2
// a=2, c=3 => a=5
console.log(sum1);

// 我们可以让这段代码更整洁：
// 不设置2.accumulator的初始值，此时初始值将被设置为array的第一个元素（-1）
// a=1, c=-1 => a=0 这与我们上面第2次调用完全相同
// a=0, c=2 => a=2
// a=2, c=3 => a=5
const sum2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})
console.log(sum2);

// 更整洁：
const sum3 = numbers.reduce((x, y) => x + y);
console.log(sum3);
