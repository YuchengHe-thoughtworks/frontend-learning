//【语法】Object.values(obj)
//【返回值】返回一个给定对象自身的所有可枚举属性【值】的数组，
// 值的顺序与使用 for...in 循环的顺序相同。

const obj = { foo: 'bar', baz: 42 };
console.log(Object.values(obj)); // [ 'bar', 42 ]

const obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.values(obj1)); // [ 'a', 'b', 'c' ]

// When we use 【numeric keys】,
// the value returned in a numerical order according to the keys
const an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.values(an_obj)); // [ 'b', 'c', 'a' ]

// getFoo is property which 【isn't enumerable】
const my_obj = Object.create({}, {
  getFoo: {
    value: function () {
      return this.foo;
    }
  }
});
my_obj.foo = 'bar';
console.log(Object.values(my_obj)); // [ 'bar' ]

