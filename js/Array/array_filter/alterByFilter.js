// 1.修改每个单词
const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += ' extra'; // 'spray','limit extra','exuberant extra'...
  // return arr;
  return word.length < 6;
});
console.log(modifiedWords); // [ 'spray' ]
