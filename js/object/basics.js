// Please write a line of code to remove the `name` property.
const pp = {name: 'Emma'};
console.log(pp);

pp.name = undefined;
console.log(pp);
// should remove object property using delete operator
delete pp.name; // delete object.key;即可
console.log(pp);

// 2. create object with braces expression
const pp1 = {
  name: 'Emma',
  greeting() {
    return `Hello, ${this.name}`
  },
};

pp1.name = 'John';
console.log(pp1.greeting()); // Hello, John


/*const foo = { foo: 'foo', bar: 'bar' };
console.log(typeof foo); // object
console.log(foo); // { foo: 'foo', bar: 'bar' }
console.log({foo}); // { foo: { foo: 'foo', bar: 'bar' } }*/

const { foo } = { foo: 'foo-', bar: 'bar' };
console.log(typeof foo); // string
console.log(foo); // foo-
console.log(typeof {foo}); // object
console.log({ foo }); // { foo: 'foo-' }

const { foo1 } = { foo: 'foo2', bar: 'bar1' };
console.log(foo1); // undefined
console.log(foo); // foo- 还是上面那个

// const [a, b, ...rest] = [1, 2, 3, 4, 5];
// console.log(rest); // [ 3, 4, 5 ]

let { name, age, ...rest }  = { name: "name", age: 28, address: 'xxx', phone: 'xxx'}
console.log(rest);

const first = { foo: 'foo'};
const second = { ...first,  bar: 'bar'};
console.log(second); // { foo: 'foo', bar: 'bar' }


// 一个对象的成员可以是数组、数字或者其他对象
// ⭐️JSON对象的键和字符串值必须使用"双引号"包裹
function f() {
  return new Date().getFullYear();
}
// obj对象有3个属性：posts、totalPost、getData 下面康康他们都有怎样的值
// 1.posts属性的值是一个对象数组，
// 它里面的每一个对象包含键title、votes以及comments
// 其中，votes属性是一个数值原始值; comments属性是字符串数组
// 3.getData属性的值是一个函数，这里我们称之为method 方法
const obj = {
  "posts": [{
    "title": "Get your mind in shape",
    "votes": 9,
    "comments": ["nice", "good link"]
  },{
    "title": "Yet another post",
    "votes": 0,
    "comments": []
  }
 ],
  "totalPost": 2,
  "getData": f()
}

console.log(obj)
