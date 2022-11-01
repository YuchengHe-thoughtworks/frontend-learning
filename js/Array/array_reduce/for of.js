// for of遍历的是数组元素值，
// 而且for of遍历的只是数组内的元素，不包括原型属性和索引

const arr = [1,2,3]
arr.a = 123
Array.prototype.a = 123

for (let value of arr) {
  console.log(value)
}
//1 2 3

// for of适用遍历数/数组对象/字符串/map/set等拥有迭代器对象（iterator）的集合，
// 但是不能遍历对象，因为没有迭代器对象.
// 但如果想遍历对象的属性，你可以用for in循环（这也是它的本职工作）或用内建的Object.keys()方法
const obj = {
  a: 1,
  b: 2,
  c: 3
};
for (let key of Object.keys(obj)) {
  console.log(key, obj[key]);
}
// a 1 b 2 c 3

