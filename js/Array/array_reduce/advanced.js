const arr = [1, 2, 3, 4, 6];
const arr1 = [1, 2, 3, 4, [6]];

// 数组中的每个元素按序执行一个由您提供的 reducer 函数，
// 每一次运行 reducer 会将先前元素的计算结果作为参数传入，最后将其结果汇总为[单个返回值]。
function reducer(previous, current, index, array) {
  let returns;
  returns = previous + current; //arr1最后一次 10+6=16
  console.log(`previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`);
  return returns;
}

const array = arr.reduce(reducer);
const array1 = [...arr1].reduce(reducer);
console.log('--', array);
console.log('--1', array1);

const arrayUnique = (arr) => [...new Set(arr)]
