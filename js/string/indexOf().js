// 查找子字符串

const str = 'coconuts';

// str.indexOf(substr, pos)方法从给定位置 pos 开始，在 str 中查找 substr，
// 如果没有找到，则返回 -1，否则返回匹配成功的【第一次】位置。

console.log(str.indexOf('c', 3)); // -1
// 表示从str[3]，即第4个字符'o'开始search 'c' ->找不到 ->返回-1

// 如果我们对【所有存在位置】都感兴趣，可以在一个循环中使用 indexOf。
// 每一次新的调用都发生在上一匹配位置之后：

const target = 'co';
let pos = -1;

while ((pos = str.indexOf(target, pos + 1)) !== -1) {
  console.log(`Found at ${pos}`);
}
// Found at 0
// Found at 2

// 同理，注意indexOf()作为if语句的判断条件时
let str1 = "Widget with id";

if (str1.indexOf("Widget") !== -1) {
  console.log("We found it"); // 现在工作了！
}
// 技巧 if (~str.indexOf(...)) 读作 “if found”。
// 但请不要这么写，会读即可
if (~str1.indexOf("Widget")) {
  console.log("Found it"); // 现在工作了！
}

// 还有一个类似的方法 str.lastIndexOf(substr, position)，
// 它从字符串的末尾开始搜索到开头。
// 如果没有找到，则返回 -1，否则返回匹配成功的【最后一次】位置。

const target1 = 'oc';
console.log(str.lastIndexOf(target1)); // 1
// let posFromEnd = str.length;
//
// while ((pos = str.lastIndexOf(target1, posFromEnd - 1)) !== -1) {
//   console.log(`Found at ${posFromEnd}`);
// }
