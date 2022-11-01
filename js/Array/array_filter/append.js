// 2.添加新单词
export const words = ['spray', 'limit', 'exuberant', 'destruction', 'elite', 'present'];
const appendedWords = words.filter((word, index, arr) => {
  //每个''都筛选一次，所以每次都要push一个new在最后
  arr.push('new');
  console.log(words);

  return word.length < 6;
})

console.log(words); // 带6个new

// 只有三个符合条件，即使 `words`本身现在有更多字符长度小于 6 的单词
console.log(appendedWords); // [ 'spray', 'limit', 'elite' ]

console.log(words);
