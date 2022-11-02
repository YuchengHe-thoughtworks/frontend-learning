// 【获取姓名缩写】
// 给定的输入是一个由多个单词组成的字符串，每个单词之间有一个空格。
// 缩写名称并返回名称首字母。
const input = 'George Raymond Richard Martin';
// console.log(input[0]); // G
const arr = input.split(' '); // [ 'George', 'Raymond', 'Richard', 'Martin' ]
console.log(arr.map(getInitial).join(''));

// function getInitial(string) {
//   return string.split('', 1).join();
// }

function getInitial(array) {
  return array[0];
}
