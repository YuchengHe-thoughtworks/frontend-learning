// 一般的函数【声明】语法：
function Sum(a, b) {
  return a + b;
}
console.log(Sum(1,4));

// 由于函数式编程特性，【函数】在JS里是 first-class citizen
// 函数可用作「变量」和「对象」，
// 比如：一个函数可以作为另一个函数的参数传递

const f = function (str1) {
  return function (str2) {
    return str1 + ' ' + str2;
  };
};

const a = f('hello');
const b = f('goodbye');
console.log(a('world'));
console.log(b('my sunshine'));
