// 将数组中每个元素的值平方。假设您只会在输入数组中获得数字。
// [1,2,3] -> [1,4,6]
// Task：用map，对原数组中的每一个元素做平方映射，再返回一个新数组
const input = [ 1, 2, 3, 4, 5 ];
// ⭐️特别回忆：map处理数组元素的范围在 callbackFn 第一次调用前就已经确定了
// 即，调用map方法后追加的数组元素不会被 callbackFn 访问
console.log(input.map(x => Math.pow(x, 2)));
