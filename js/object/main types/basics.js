// 【JSON库】：帮我们序列化&解析JS对象
// const obj = JSON.parse('{ a:1 }');
// console.log(obj);
const stringObj = JSON.stringify({a:1, b:"hi"});
console.log(stringObj);

// 【数组对象】：数组是从0开始索引的列表。
// 数组有一些非常好用的方法，比如indexOf、slice 、join 。
const arr= [];

const arr1= ['apple', 'orange', 'peach'];

// 【数据对象】
const obj = {};

const obj1 = {
  name: 'Emma',
  age: 22,
  height: 172
}

// 【数学对象】：数学常量&一些方法
// Math.floor() -> 返回小于或等于给定数字的最大整数。
const x = Math.floor(3.4890); // 3
// Math.random()随机生成[0,1)之间的一个浮点数（近似均匀分布）
// 往往使用时在后面*上想要的倍数 Math.random()*100即随机生成[0,100)之间的一个浮点数
// Math.fround() -> 返回数字最接近的32位单精度浮点表示。
const ran = Math.fround(Math.random()*100);

/*// 请在浏览器中运行下面2个例子

// 【浏览器对象】：用于访问浏览器及其一些属性，比如 URL
window.location.href = 'http://rapidprototypingwithjs.com';
console.log("test");

// 【DOM对象】：
document.write("Hello World");
const table = document.createElement('table');
const main = document.getElementById('main');*/
