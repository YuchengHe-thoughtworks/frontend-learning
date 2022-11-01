// var -> function
// let -> block 现在都用let关键字了
// const -> block

/*function sayHello() {
  for (var i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
  }
  console.log(i, 'bala'); // 5 'bala'
}

sayHello();*/

/*
const person = {
  name: 'Emma',
  age: '22',
  // walk是person对象中的一个方法
  walk: function () {},
  // 更简单地在对象中定义一个方法（省去冒号和function关键字）
  talk() {}
};

// 提前知道 -> 点
person.name = 'John';
person.talk();

// 提前不知道 -> 括号
const targetMember = 'name';
person[targetMember.value] = 'Jerk';
*/

/*const person = {
  name: "Emma",
  walk() {
    // this的值取决于函数的调用方式
    console.log(this); // this返回对当前对象的引用
  }
};

person.walk(); // 调用person对象中的walk方法->返回对该【对象】的引用

//walk is a function
//person.walk is an object
//bind method 可以永久设置this的值
//所以当我们在walk函数上调用bind时，我们会得到一个新的walk函数，并且这个新函数中this的值，是基于我们传递给bind方法的参数
const walk = person.walk.bind(person);// 这里我没用调用walk方法 只是获得了对这个【函数】的引用
// 将函数作为独立对象 or 在对象外部调用
walk(); // 默认情况下，会返回浏览器中的窗口对象的全局对象；严格模式下，会返回undefined*/

/*const square0 = function (number) {
  return number * number;
}

const square1 = (number) => {
  return number * number;
}
//只有1个参数时，可以不带括号
const square2 = number => {
  return number * number;
}
//只有一行返回值时，可以不带return以及花括号
const square = number => number * number;
console.log(square(5)); // 25
//如果没有参数，必须带括号
const square3 = () => {
  return number * number;
}*/

/*// 数组对象 Array.filter()
const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];
// 调用filter()这个方法时，它会对每个job object迭代这个数组
const activeJobs0 = jobs.filter(function (job) { return job.isActive; });
const activeJobs1 = jobs.filter( job => job.isActive);
console.log(activeJobs1);

const words = [
  'spray',
  'limit',
  'elite',
  'exuberant',
  'destruction',
  'present',
];
const result = words.filter(word => word.length > 6);
console.log(result);*/

//Arrow function don't rebind this
/*const person = {
  talk() {
    //setTimeout()方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。
    setTimeout(function () {
      //这个function不是任何对象的一部分
      console.log("this", this);
    }, 1000);
    console.log('this', this);
  }
};

// 当我们将函数作为对象外部的独立函数调用时，默认情况下会返回window对象
person.talk(); // person对象的talk方法*/

/*// 如何引用内部的person对象
// 法1.
const person1 = {
  talk() {
    // 在回调函数外声明一个self
    const self = this;
    setTimeout(function () {
      console.log("self", self);
    }, 1000);
  }
};

person1.talk();*/

/*
// 法2.利用箭头函数 因为箭头函数不会重新绑定this
// 换言之，把上面的function换成箭头函数，它将继承this关键字
const person2 = {
  talk() {
    setTimeout(() => {console.log("this", this);}, 1000);
  }
};

person2.talk();
*/

/*let timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(showAlert, 2000);
}

function showAlert() {
  alert('That was really slow!');
}

function clearAlert() {
  //clearTimeout取消先前通过调用setTimeout()建立的超时
  window.clearTimeout(timeoutID);
}*/

/*const colors = ['red', 'green', 'blue'];

const items = colors.map(addTap);
const items1 = colors.map(color => '<li>' + color + '</li>');

function addTap(color) {
  return '<li>' + color + '</li>';
}

console.log(items);
console.log(items1);*/

/*// 最好的写法
const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);*/

/*// 对象重组
const address = {
  street: 'Beijing',
  city: '',
  country: ''
};
// 现在我们需要在代码中的某个地方去
// extract address对象中这些属性的值 并将它们存储在单独的变量中
const street = address.street;
const city = address.city;
const country = address.country;
// 最好的写法 下面这行等同于上面3行
const { street, city, country } = address;
// 如果你只关注address对象的某一个属性，当然可以只提取它
const { street } = address;
// 如果你不想用和属性名一样名字，你当然可以重新定义
const { street: st } = address;
console.log(st.length); // 7*/

/*// 组合2个数组成1个数组
const first = [1, 2, 3];
const second = [4, 5, 6];

/*!// combined0 === combined1
const combined0 = first.concat(second);
// ...first 表示拿到first这个数组中的全部元素
const combined1 = [...first, ...second];
// 使用...时，向2个数组中加一个元素时会很方便
const combined2 = [...first, 'a', ...second, 'b'];*!/

const clone = [...first];
console.log(first);
console.log(clone);*/

/*
// 组合2个对象成1个对象
const first = { name: 'Emma' };
const second = { job: 'developer' };

const combined = {...first, ...second, location: 'China'};
console.log(combined);

const clone = {...first};
*/

// classes
/*const person = {
  name: 'Emma',
};
// 什么时候使用class?
// 如果walk这个fun中有数十行代码
// 或者，当我们有一个具有至少一种func的对象时
const person2 = {
  name: 'Emma',
  walk() {
    console.log("walk");
  }
};*/

/*
// class 1
class Person { // Person类
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log("walk");
  }
}

const person1 = new Person('Emma', 22); // 创建Person类的person1对象
const person2 = new Person('Bob', 23); // 创建Person类的person2对象

console.log(person1,person2);
person1.walk();

// class 2
class Address {
  constructor() {
    this.city = 'Beijing';
  }
}

const address1 = new Address();

console.log(address1.city);
*/

/*// class 5
class Car { // 创建类
  constructor(brand) { // 类构造方法
    this.carname = brand; // 类主体、属性
  }
}
const myCar = new Car("Ford"); // 创建Car类的对象

console.log(myCar);*/

/*
// class 4
class Polygon {
  constructor() {
    this.name = 'Polygon';
    this.width = 10;
    this.height = 2;
  }
}

const poly1 = new Polygon();

console.log(poly1.name);

// 派生类
class Square extends Polygon {
  constructor(length) {
    // 在一个构造方法中可以使用super关键字来调用一个父类的构造方法。
    super(length, length);
    // 注意：在派生类中，必须先调用 super() 才能使用 "this"。
    // 忽略这个，将会导致一个引用错误。
    this.name = 'Square';
  }

  get area() {
    return this.width * this.height;
  }
  set area(value) {
    this._area = value;
  }
}

const square1 = new Square();
square1.width = 3;
square1.height = 3;
console.log(square1);
*/

// default默认导出时不用花括号
// Teacher是"./teacher.js"此模块的默认导出，promote是以命名的形式导出
import Teacher, { promote } from "./teacher.js";
// 'react' 没有./ 因为react不是我们项目的一部分，它是存储在node modules folder中的第三方库
// 引入Component -> 以便自定义组件
import React, { Component } from 'react';

const teacher = new Teacher("Emma","MSc");
teacher.teach();

/*
// String primitive
const message0 = 'This is my\n first message';
const message1 = 'This is my\n' + 'first message';
const message2 =
  'This is my\n' +
  '\'first\' message';
console.log(message2);

// Template ``
const another0 = `This is my
first message`;
const another1 =
  `This is my
'first' message`;
console.log(another0);
console.log(another1);
*/

/*const email =
  `Hi John,

Thank you for joining my mailing list.

Regards,
Mosh`;
console.log(email);

const name = 'Emma';
const message3 = 'Hi ' + name + ',\n';
// 使用反写号时，用${}动态加入变量 更加方便
const a = 12;
const b = 2;
function square() {
  return a * b;
}
const another2 =
  `Hi ${name},${2 + 3}, ${square()}

Thank you for joining my mailing list.

Regards,
Mosh`;
console.log(another2);*/

// array.filter学习
const numbers = [1, -1, 2, 3];
const numbers1 = numbers.filter(function (value) {
  return value >= 0;
});
const numbers2 = numbers.filter( n => n >= 0);

// 1.创建数组
const fruits = ['Apple', 'Banana'];
console.log(fruits.length); // 2
//(1)可以直接console.log打印数组
console.log(fruits);
// 2.通过index索引来访问数组
let first = fruits[0];
let last = fruits[fruits.length - 1];
console.log(first, last);
// 3.forEach遍历数组
fruits.forEach(function (item,index,array) {
  console.log(item, index, array)
});
// 4.添加push/删除pop 元素到数组的末尾
let newFruit = fruits.push('Orange');
//(2)也可以使用扩展运算符实现数组的浅拷贝
let arr = [...fruits];
console.log(arr); // [ 'Apple', 'Banana', 'Orange' ]
let removeLast = fruits.pop();
console.log(fruits); // [ 'Apple', 'Banana' ]
fruits.pop();
console.log(fruits); // [ 'Apple' ]
//(3)还可以用Object.values(arr)方法来打印数组
console.log(Object.values(fruits)); // [ 'Apple' ]
const usrName = ['Emma', 'John', 'Bob', 'Jack'];
// 5.添加unshift/删除shift 元素到数组的头部
usrName.shift(); // [ 'John', 'Bob', 'Jack' ]
usrName.unshift('Amy'); // [ 'Amy', 'John', 'Bob', 'Jack' ]

// 6.array.index找出某个元素在数组中的索引
const pos0 = usrName.indexOf('Bob'); // 2
// const pos0 = usrName.indexOf('Emily'); // -1
// 7.1 通过索引删除某个元素
usrName.splice(pos0, 1); // [ 'Amy', 'John', 'Jack' ]
// 7.2 从一个索引位置删除多个元素 参数含义：从哪个索引开始往后删，往后删几个
const vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
let pos = 1;
let n = 2;
const removedItems = vegetables.splice(pos, n); // 把删掉的也存在一个数组中
console.log(removedItems); // [ 'Turnip', 'Radish' ]
console.log(vegetables); // [ 'Cabbage', 'Carrot' ]

// 8.复制一个数组 让slice()不传任何参即可
const shallowCopy = vegetables.slice();
console.log(shallowCopy); // [ 'Cabbage', 'Carrot' ]

const fruits1 = [];
fruits1.push('banana', 'apple', 'peach');

fruits1[5]= 'mango';
console.log(fruits1); // [ 'banana', 'apple', 'peach', <2 empty items>, 'mango' ]
console.log(fruits1[4]); // undefined

console.log(Object.keys(fruits1)); // [ '0', '1', '2', '5' ]

// 使用Object.keys(obj)方法来获取obj自身的（不含继承的）所有可遍历属性
// 使用Object.values(obj)方法来获取obj自身的（不含继承的）所有可遍历属性的键值
//Object.keys(obj) 返回obj自己的可枚举属性名的数组
let people = {
  name: '张三',
  age: 25,
  address: '深圳',
  getName: function () {}
};
console.log(Object.keys(people)); // [ 'name', 'age', 'address', 'getName' ]
console.log(Object.values(people)); // [ '张三', 25, '深圳', [Function: getName] ]
// 常用技巧 获取到属性对应的值，做一些处理
const n1 = Object.keys(people).map(key => people[key]);
console.log(n1); // [ '张三', 25, '深圳', [Function: getName] ]

//Object.keys(arr)
let arr1 = [1,2,3,4,5];
console.log(Object.keys(arr1)); // [ '0', '1', '2', '3', '4' ]
//Object.keys(str)
let str0 = '12345字符串';
console.log(Object.keys(str0));

