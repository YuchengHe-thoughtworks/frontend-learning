// 1.字符串原始值
const str = 'some string';
// JS自动给字符串原始值包装上了字符串对象方法
console.log(str.match(/st/));
const newStr = 'abcde'.substring(1,2); // b

// 2.字符串对象
const strObj = new String('abced');
const strObj1 = String('abced1');
// valueOf()方法 获得原始值
const str1 = strObj1.valueOf(); // abced1

