// 如果给定的输入是一个数字数组，则返回所有正数的总和。
// 如果数组为空或没有任何正数，则返回 0。

const input = [ 1, -4, 12, 0, -3, 29, -150];
// R.用filter作为if的判断条件 计算sum是时候用reduce
const sum = positiveSum(input);

function positiveSum(array) {
  const positiveNum = array.filter(x => x > 0);
  let sum = positiveNum.reduce((x, y) => x + y);
  return sum;
}

console.log(`Sum of all positive number is: ${sum}.`)
