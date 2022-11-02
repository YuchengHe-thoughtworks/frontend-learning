// 绝对值 absolute value
// Math.abs(x) 函数返回一个数字x的绝对值。
console.log(Math.abs(-100));
console.log(Math.abs(-Infinity)); // Infinity无穷
console.log(Math.abs(null)); // 0

function difference(a, b) {
  return Math.abs(a - b);
}
console.log(difference(3, 5)); // 2
console.log(difference(5, 3)); // 2

// 由于 abs() 是 Math 中的一个静态方法，所以你应该通过 Math.abs() 调用，
// 而不是作为你创建的 Math 对象的方法（Math 不是构造器）。

// 强制转换参数
console.log(Math.abs(null)); // 0
Math.abs(""); // 0
Math.abs([]); // 0
console.log(Math.abs('-100')); // 100
console.log(Math.abs([10])); // 10
// PS:无法强制转换的值将变成 NaN,此时该方法的返回值也为 NaN
Math.abs([1, 2]); // NaN
Math.abs({}); // NaN
Math.abs("string"); // NaN
Math.abs(); // NaN
