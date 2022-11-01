// parseInt(string, radix)函数可解析一个字符串，并返回一个整数。
// param1-string: 要被解析的字符串
// ps:如果不是字符串会被转换 & 忽视空格符
// param2-radix: 要解析的数字的基数。
// ps:该值介于2 ~ 36之间。默认值为10，表示十进制,即表示将前面的字符从radix进制转化为十进制
console.log(parseInt(123, 5)); // 结果为38：5进制的123->10进制的38
console.log(parseInt('123', 5)); // 结果为38：5进制的123->10进制的38
// (1)参数radix必须介于2~36之间，否则会返回NaN
// (2)字符串string中的数字不能大于radix才能正确返回数字结果值。

// expect [ 1, 2, 3 ], but [ 1, NaN, NaN ]
const y = ["1", "2", "3"];
const z = y.map(parseInt);
// ['1', '2', '3'].map((item, index, array) => parseInt(item, index, array));
// NaN原因：map的回调函数的参数index索引值作了parseInt的基数radix，
// 导致出现超范围的radix赋值和不合法的进制解析，才会返回NaN

const a=["1", "2", "3", "4","5",6,7,8,9,10,11,12,13,14,15];
// 由于.map()方法的callback function需要3个参（item，index，array[]） 当然，往往不用第3个
// 因此.map(parseInt)时 parseInt的radix拿到的就是index
console.log(a.map(parseInt));
console.log(parseInt('1',0)); // 1
// 在没有指定基数，或者基数为0的情况下，parseInt()会根据string参数来判断数字的基数。
// JS判断出此时为10进制的1，故而还返回1
console.log(parseInt('2',1)); // NaN
// 基数为1，不在`2 ~ 36`范围内，故返回NaN
console.log(parseInt('3',2)); // NaN
// 表示要将二进制的3转化为十进制，额...，不好意思，二进制中并没有3，所以返回NaN
console.log(parseInt(6,5));
console.log(parseInt(10,9));
console.log(parseInt(15,14));

// 解决办法
const z1 = y.map(value => parseInt(value)); // [ 1, 2, 3 ]

// ps: parseInt第一个参数如果不是字符串，先尝试转换为字符串，再进行进制转化。
