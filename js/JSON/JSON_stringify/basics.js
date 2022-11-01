// 1.JSON.stringify()  stringify字符串化
// 该方法方法将一个 JavaScript 对象或值 -> 转换为 JSON 字符串，

// 【语法】 JSON.stringify(value[, replacer [, space]])
const obj = { x: 5, y: 6 };
console.log(obj); // { x: 5, y: 6 }
console.log(JSON.stringify(obj)); // {"x":5,"y":6}
console.log(JSON.stringify(obj, null, '\t')); // {"x":5,"y":6}

console.log(JSON.stringify(2[ n => n+1 [3]])); //

const arr = [new Number(3), new String('false'), new Boolean(false)];
console.log(arr); // [ 3, 'false', false ]
console.log(JSON.stringify(arr)); // [3,"false",false]

const obj1 = { x: [10, undefined, function(){}, Symbol('')] };
// Symbol是一个内置对象，它的构造函数返回一个保证唯一的symbol primitive——也称为Symbol value或只是一个Symbol
// Symbol通常用于向对象添加唯一的属性键，这些键不会与任何其他代码可能添加到对象中的键发生冲突，并且对其他代码通常用于访问对象的任何机制都是隐藏的。
// 这支持一种形式的弱封装，或一种形式的弱信息隐藏.
console.log(obj1); // { x: [ 10, undefined, [Function (anonymous)], Symbol() ] }
console.log(JSON.stringify(obj1)); // {"x":[10,null,null,null]}

const date = new Date(2006, 0, 2, 15, 4, 5);
// JavaScript Date对象以一种平台无关的格式表示单个时间时刻。
console.log(date); // 2006-01-02T07:04:05.000Z
console.log(JSON.stringify(date)); // "2006-01-02T07:04:05.000Z"
