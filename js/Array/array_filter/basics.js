// 1。创建数组
let msgArray = [];
msgArray[0] = 'Hello';
msgArray[99] = 'world';

if (msgArray.length === 100) {
  console.log('The length is 100.');
}

// 2.创建二维数组
let board = [
  ['R','N','B','Q','K','B','N','R'],
  ['P','P','P','P','P','P','P','P'],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' '],
  ['p','p','p','p','p','p','p','p'],
  ['r','n','b','q','k','b','n','r'] ];

// console.log(board.join('\n'));

// Move King's Pawn forward 2
board[4][4] = board[6][4];
board[6][4] = ' ';
// console.log(board.join('\n'));

// 3.用数组将一组值以表格的形式显示
// console.table(board);
// 练习
const values = [];
for (let x = 1; x < 10; x++) {
  values.push([
    2 ** x,
    x + 1
  ])
}
// console.table(values);

// 4.Array.join()方法将数组中所有元素都转化为字符串并连接在一起
// 返回值：返回最后生成的字符串
let a = [1, 2, 3];  // 创建一个包含三个元素的数组
// (1)不指定分隔符，默认使用逗号
a.join(); // => "1,2,3"
// (2)指定一个可选的字符串在生成的字符串中来分割数组的各个元素
a.join(""); // => "123"
a.join(" "); // => "1 2 3"
let b = new Array(10); // 创建一个长度为10的空数组
b.join('-'); // => "---------"：9个连字号组成的字符串
// 注：Array.join()方法是String.split()方法的逆向操作
// 后者是将字符串分割成若干块来创建一个数组

//5. Array.filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result0 = words.filter(word => word.length > 6); // [ 'exuberant', 'destruction', 'present' ]
const result1 = words.join(' & '); // "spray & limit & elite & exuberant & destruction & present"

// 练习1：找出数组中所有的素数
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6,
  7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  // return num > 1;
  return (num > 1); // 不加括号也有相同的效果
}
array.filter(isPrime); // [ 2, 3, 5, 7, 11, 13 ]

// 练习2：过滤JSON中的无效条目：用 filter() 创建具有非零 id 的元素的 json。
// JSON:基于JavaScript语言的轻量级的数据交换格式(JavaScript Object Notation)
const arr2 = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' },
];

// 加一个计数器，来记录有几个元素是不符合过滤的要求
let invalidEntries = 0;

function filterByID(item) {
  // Number.isFinite()方法确定传递的值是否为有限数
  // 也就是说，它检查给定值的类型是否为number
  // 且该值既不是正无穷大，也不是负无穷大，也不是NaN
  // 返回值：Boolean -指示给定值是否为有限数
  if (Number.isFinite(item.id) && item.id !==0) {
    // return item;
    return true;
  }
  else {
    invalidEntries++;
    return false;
  }
}

const arrByID = arr2.filter(filterByID);

console.log('Filtered Array:\n', arrByID); //  [ { id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 } ]
const invalidCount = `Number of Invalid Entries = ${invalidEntries}.`;
console.log(invalidCount); // Number of Invalid Entries = 5.

const arr = [1,2].concat([1,2,3]);
console.log(arr.filter((v,i,self) => i === self.indexOf(v)));
// 别用includes()哈 它返回的是boolean

