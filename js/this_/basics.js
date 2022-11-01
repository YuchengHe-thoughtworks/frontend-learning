// this references the object that is executing the current function
const obj = {
  foo() {
    return this;
  },
  bar: 1
};
console.log(obj); // { foo: [Function: foo], bar: 1 }

const foo2 = obj.foo;
// ⭐️根据定义，this会引用执行当前函数「obj.foo()」的对象「obj」
console.log(foo2); // { foo: [Function: foo], bar: 1 }
console.log(foo2()); // undefined
// console.log(obj()); // { foo: [Function: foo], bar: 1 }

// if the func is part of an object, we call the func as [method]
// 函数在对象中定义的时候被称为[方法]

// 1.if the func is a [method] in an object, "this" references the object itself
// 2.if the func is a regular func, "this" references the global object, which is window object in browsers and gobal in node
// 1.v
const video = {
  title: 'a',
  play() {
    console.log(this);
  }
};

video.play(); // { title: 'a', play: [Function: play] }

// 再向video中添加一个stop方法
video.stop = function () {
  console.log(this);
}

video.stop(); // { title: 'a', play: [Function: play], stop: [Function (anonymous)] }
