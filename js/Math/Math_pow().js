// Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base^exponent。
// Math.pow(base, exponent)
console.log(Math.pow(2, 3)); // 2^3 = 8
console.log(Math.pow(16, 0.5)); // 16开根号 = 4

// 由于 abs() 是 Math 中的一个静态方法，所以你应该通过 Math.abs() 调用，
// 而不是作为你创建的 Math 对象的方法（Math 不是构造器）。

function raisePower(x,y) {
  return Math.pow(x,y)
}
