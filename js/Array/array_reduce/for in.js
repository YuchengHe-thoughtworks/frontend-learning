// for in详解
const arr = [1,2,3];

for (let index in arr) {
  let res = index + 1
  let res1 = index + '吕'
  console.log(res)
  console.log(res1)
}
// 01 0吕 11 1吕 21 2吕 因为index索引为string，显然这里的+不是直接的几何运算

// 使用for in会遍历数组所有的可枚举属性，包括原型，
Array.prototype.a = 123;
for (let index in arr) {
  let res = arr[index]
  console.log(res)
}
// 1 2 3 123

// 如果不想遍历原型方法和属性的话，可以在循环内部判断一下，
// 使用hasOwnProperty()方法可以判断某属性是不是该对象的实例属性
for (let index in arr) {
  if (arr.hasOwnProperty(index)) {
    let res = arr[index]
    console.log(res)
  }
}
// 1 2 3

// Object & for in
const obj = {
  name: 'jing.lv',
  age: 22,
  gender: 'female'
};

for (let key in obj) {
  console.log(key + '=' + obj[key])
}
// name=jing.lv age=22 gender=female

function square(x) {
  return x * x;
}

const n1= square(4, 'Hello', 6); // 16

function square1(x,s,y) {
  return x * x, s, y * y;
}

const n2= square(4, 'Hello', 6); // 16

const dividingResult = 3 / 4;
console.log(typeof dividingResult);
