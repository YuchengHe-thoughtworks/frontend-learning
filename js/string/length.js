const emoji = '🐴👟';
console.log(emoji.length); // 4

const str = 'My\n';
/// 注意 \n 是一个单独的“特殊”字符，所以长度确实是 3。
console.log(str.length); // 3

const str1 = 'My';
// 获取最后一个字符
console.log(str1[str1.length - 1]); // y

const str2 = ' coco nuts ';
console.log(str2.length); // 11

// 改变大小写
console.log(str2[1].toUpperCase());
