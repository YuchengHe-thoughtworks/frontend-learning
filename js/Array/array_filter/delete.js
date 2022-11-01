// import {words} from './append.js';

// 删除单词
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
console.log(words.length); // words数组的长度为6
console.log(words[0].length); // "spray"字符串的长度为5
console.log(words[2].length); // "exuberant"字符串的长度为9

const deleteWords = words.filter((word, index, arr) => {
  // 过滤器依次过滤words中的每一个元素，每次都有执行pop
  arr.pop();
  console.log(words);
  return word.length < 6;
})

console.log(words); // [ 'spray', 'limit', 'exuberant' ]

console.log(deleteWords); // ["spray" ,"limit"]
// 注意，'elite' 也没有获得，因为它在过滤器达到之前就已经从 'words' 弹出了

